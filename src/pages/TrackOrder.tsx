import { motion } from "framer-motion";
import { FaTruck, FaBox, FaCheckCircle } from "react-icons/fa";

const TrackOrder: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-primary mb-10 text-center"
        >
          Track Your Order
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-10"
        >
          <h2 className="text-2xl font-bold text-primary mb-6">Enter Order Details</h2>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none"
              placeholder="Order Number"
            />
            <input
              type="email"
              className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none"
              placeholder="Email Address"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              Track Order
            </button>
          </form>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-primary mb-6">Order #12345 - In Transit</h2>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                {[
                  { icon: <FaCheckCircle className="text-accent" />, label: "Ordered", date: "Jan 1, 2024" },
                  { icon: <FaCheckCircle className="text-accent" />, label: "Processing", date: "Jan 2, 2024" },
                  { icon: <FaTruck className="text-accent" />, label: "Shipped", date: "Jan 3, 2024" },
                  { icon: <FaBox className="text-gray-300" />, label: "Delivered", date: "Jan 5, 2024" }
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl mb-4">
                      {step.icon}
                    </div>
                    <p className="text-lg font-semibold text-primary mb-2">{step.label}</p>
                    <p className="text-gray-500 text-sm">{step.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-primary mb-6">Order Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Shipping Address</h4>
                <p className="text-gray-700">John Doe</p>
                <p className="text-gray-700">123 Fashion St</p>
                <p className="text-gray-700">New York, NY 10001</p>
                <p className="text-gray-700">United States</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Delivery Information</h4>
                <p className="text-gray-700">Expected Delivery: Jan 5, 2024</p>
                <p className="text-gray-700">Shipping: Express</p>
                <p className="text-gray-700">Tracking: ABC123456789</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrackOrder;
