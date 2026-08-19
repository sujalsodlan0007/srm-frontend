import { motion } from "framer-motion";
import { useState } from "react";
import { submitInquiry } from "../services/api";

interface RequestQuotationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  productType: string;
  quantity: string;
  estimatedBudget: string;
  additionalDetails: string;
  honeypot: string;
}

const initialState: RequestQuotationFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  country: "India",
  productType: "T-Shirts",
  quantity: "",
  estimatedBudget: "$500 - $1,000",
  additionalDetails: "",
  honeypot: ""
};

const RequestQuotation: React.FC = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        fullName: `${formData.firstName} ${formData.lastName}`.trim(),
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        country: formData.country,
        productType: formData.productType,
        quantity: formData.quantity,
        estimatedBudget: formData.estimatedBudget,
        additionalDetails: formData.additionalDetails,
        message: formData.additionalDetails,
        productInterest: formData.productType,
        quantityRequired: formData.quantity,
        source: "request-quotation",
        honeypot: formData.honeypot
      };

      const data = await submitInquiry(payload);
      if (!data.success) {
        throw new Error(data.message || "Unable to submit quotation request");
      }

      setMessage({ type: "success", text: "Your quotation request has been received. We will contact you shortly." });
      setFormData(initialState);
    } catch (error) {
      setMessage({ type: "error", text: error instanceof Error ? error.message : "Unable to submit quotation request" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-primary to-primary/70 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Request a Quotation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Get a Custom Quote for Your Project
          </motion.p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" required className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="John" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" required className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="Doe" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input name="email" value={formData.email} onChange={handleChange} type="email" required className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input name="phone" value={formData.phone} onChange={handleChange} type="tel" required className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="+1 (555) 123-4567" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Company</label>
                <input name="company" value={formData.company} onChange={handleChange} type="text" required className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="Company Name" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Country</label>
                <input name="country" value={formData.country} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="United States" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Product Type</label>
              <select name="productType" value={formData.productType} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none">
                <option>T-Shirts</option>
                <option>Polo Shirts</option>
                <option>Hoodies</option>
                <option>Jackets</option>
                <option>Pants</option>
                <option>Custom</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Quantity</label>
                <input name="quantity" value={formData.quantity} onChange={handleChange} type="number" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="Enter quantity" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Estimated Budget</label>
                <select name="estimatedBudget" value={formData.estimatedBudget} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none">
                  <option>$500 - $1,000</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Additional Details</label>
              <textarea name="additionalDetails" value={formData.additionalDetails} onChange={handleChange} rows={6} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none resize-none" placeholder="Tell us about your requirements..." />
            </div>

            <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" autoComplete="off" />

            {message ? <p className={`text-sm ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>{message.text}</p> : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70 text-white py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              {isSubmitting ? "Submitting..." : "Submit Quotation Request"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default RequestQuotation;
