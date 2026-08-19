import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaChartLine, FaEnvelope, FaSignOutAlt, FaTshirt, FaUsers, FaWhatsapp } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { adminLogin, deleteAdminLead, getAdminLeads, updateAdminLead } from '../services/api';

interface LeadItem {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  fullName?: string;
  productType?: string;
  estimatedBudget?: string;
  status: string;
  createdAt?: string;
}

const AdminDashboard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('sujalsodlan0001@gmail.com');
  const [password, setPassword] = useState('sachin@2001');
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('srm_admin_token'));
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (token && (location.pathname === '/admin' || location.pathname === '/admin/login')) {
      navigate('/admin/leads');
    }
  }, [token, location.pathname, navigate]);

  useEffect(() => {
    if (!token) return;
    void loadLeads();
  }, [token]);

  const loadLeads = async () => {
    if (!token) return;
    try {
      setLoading(true);
      const data = await getAdminLeads(token);
      setLeads(data.leads || []);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to load leads');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const data = await adminLogin(email, password);
      if (!data.success) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('srm_admin_token', data.token);
      setToken(data.token);
      navigate('/admin/leads');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string) => {
    if (!token) return;
    try {
      await updateAdminLead(id, 'contacted', token);
      setMessage('Lead marked as contacted');
      await loadLeads();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Update failed');
    }
  };

  const handleDelete = async (id: string) => {
    if (!token) return;
    try {
      await deleteAdminLead(id, token);
      setMessage('Lead deleted');
      await loadLeads();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Delete failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('srm_admin_token');
    setToken(null);
    setLeads([]);
    navigate('/admin/login');
  };

  const stats = [
    { icon: <FaTshirt className="text-4xl" />, label: 'Total Leads', value: leads.length.toString() },
    { icon: <FaUsers className="text-4xl" />, label: 'New Leads', value: leads.filter((lead) => lead.status === 'new').length.toString() },
    { icon: <FaEnvelope className="text-4xl" />, label: 'Contacted', value: leads.filter((lead) => lead.status === 'contacted').length.toString() },
    { icon: <FaChartLine className="text-4xl" />, label: 'Response Rate', value: `${leads.length ? Math.round((leads.filter((lead) => lead.status === 'contacted').length / leads.length) * 100) : 0}%` }
  ];

  if (!token) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="mx-auto max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
          <h1 className="mb-4 text-4xl font-bold text-primary">Admin Login</h1>
          <p className="mb-8 text-gray-600">Sign in to manage inquiries and contact requests.</p>
          <form onSubmit={handleLogin} className="space-y-5">
            <label className="block">
              <span className="font-semibold text-gray-700">Email</span>
              <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
            </label>
            <label className="block">
              <span className="font-semibold text-gray-700">Password</span>
              <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" required className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
            </label>
            {message ? <p className="text-sm text-red-600">{message}</p> : null}
            <button type="submit" disabled={loading} className="w-full rounded-full bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70">
              {loading ? 'Signing in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold text-primary">
              Admin Dashboard
            </motion.h1>
            <p className="mt-2 text-gray-600">Manage incoming inquiries from your customers.</p>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 font-semibold text-primary transition-colors hover:bg-gray-100">
            <FaSignOutAlt /> Logout
          </button>
        </div>

        {message ? <div className="mb-6 rounded-2xl border border-accent/20 bg-accent/10 p-4 text-sm text-primary">{message}</div> : null}

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="rounded-2xl bg-white p-8 text-center shadow-lg">
              <div className="mb-4 text-accent">{stat.icon}</div>
              <h3 className="mb-2 text-3xl font-bold text-primary">{stat.value}</h3>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          <div className="border-b border-gray-200 bg-gray-50 p-6">
            <h2 className="text-2xl font-bold text-primary">Leads</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Phone</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Company</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Message</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Created</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-gray-500">Loading leads...</td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-gray-500">No leads yet.</td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead._id} className="align-top">
                      <td className="px-4 py-4 text-sm text-gray-700">{lead.fullName || lead.name}</td>
                      <td className="px-4 py-4 text-sm text-gray-700">{lead.email}</td>
                      <td className="px-4 py-4 text-sm text-gray-700">{lead.phone}</td>
                      <td className="px-4 py-4 text-sm text-gray-700">{lead.company}</td>
                      <td className="max-w-xs px-4 py-4 text-sm text-gray-700">{lead.message}</td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${lead.status === 'contacted' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">{lead.createdAt ? new Date(lead.createdAt).toLocaleString() : '—'}</td>
                      <td className="px-4 py-4 text-sm">
                        <div className="flex flex-wrap gap-2">
                          <button onClick={() => void handleStatusUpdate(lead._id)} className="rounded-full bg-accent px-3 py-2 text-white transition-colors hover:bg-accent/90">Mark as Contacted</button>
                          <button onClick={() => void handleDelete(lead._id)} className="rounded-full bg-red-600 px-3 py-2 text-white transition-colors hover:bg-red-700">Delete</button>
                          <a href={`https://wa.me/91${lead.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="rounded-full bg-green-600 px-3 py-2 text-white transition-colors hover:bg-green-700"><FaWhatsapp className="inline" /></a>
                          <a href={`mailto:${lead.email}`} className="rounded-full bg-slate-700 px-3 py-2 text-white transition-colors hover:bg-slate-800"><FaEnvelope className="inline" /></a>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
