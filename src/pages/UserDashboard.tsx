import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const UserDashboard: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-primary mb-10"
        >
          My Account
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
              <Link to="/dashboard" className="flex items-center gap-4 p-4 rounded-xl bg-accent/10 text-accent font-semibold">Profile</Link>
              <Link to="/dashboard/orders" className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 text-gray-700 font-semibold">Orders</Link>
              <Link to="/wishlist" className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 text-gray-700 font-semibold">Wishlist</Link>
              <Link to="/dashboard/addresses" className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 text-gray-700 font-semibold">Addresses</Link>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary mb-8">Profile Information</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                    <input type="text" defaultValue="John" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                    <input type="text" defaultValue="Doe" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" defaultValue="john@example.com" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" />
                </div>
                
                <button type="submit" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
