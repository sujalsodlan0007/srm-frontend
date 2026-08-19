import { useState } from 'react';
import { submitInquiry } from '../services/api';

interface LeadFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  country: string;
  productInterest: string;
  quantityRequired: string;
  honeypot: string;
}

const initialState: LeadFormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
  country: 'India',
  productInterest: 'Private Label',
  quantityRequired: '',
  honeypot: ''
};

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const data = await submitInquiry(formData);
      if (!data.success) {
        throw new Error(data.message || 'Unable to submit inquiry');
      }

      setSubmitted(true);
      setFormData(initialState);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-xl">
      <h2 className="mb-4 text-3xl font-bold text-primary">Request a Quote</h2>
      <p className="mb-8 text-gray-600">Share your requirements and we&apos;ll respond within 24 hours.</p>
      {submitted ? (
        <div className="rounded-3xl border border-accent bg-accent/10 p-8 text-center">
          <h3 className="mb-3 text-2xl font-bold text-primary">Thank you!</h3>
          <p className="text-gray-700">We&apos;ll get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="font-semibold text-gray-700">Name</span>
              <input name="name" value={formData.name} onChange={handleChange} type="text" required className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
            </label>
            <label className="block">
              <span className="font-semibold text-gray-700">Company</span>
              <input name="company" value={formData.company} onChange={handleChange} type="text" required className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="font-semibold text-gray-700">Email</span>
              <input name="email" value={formData.email} onChange={handleChange} type="email" required className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
            </label>
            <label className="block">
              <span className="font-semibold text-gray-700">Phone</span>
              <input name="phone" value={formData.phone} onChange={handleChange} type="tel" required className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
            </label>
          </div>

          <label className="block">
            <span className="font-semibold text-gray-700">Message</span>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="mt-2 w-full rounded-3xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
          </label>

          <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" autoComplete="off" />

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-accent px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70">
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </button>
        </form>
      )}
    </div>
  );
};

export default LeadForm;
