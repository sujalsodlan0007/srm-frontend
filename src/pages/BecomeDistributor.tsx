import { motion } from "framer-motion";

const BecomeDistributor: React.FC = () => {
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
            Become a Distributor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Partner with Us for Success
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
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Distributor Application</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="Your Company" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Contact Person</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="Your Name" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="email@company.com" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="+1 (555) 123-4567" />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Country</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="Your Country" />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Tell Us About Your Business</label>
              <textarea rows={6} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none resize-none" placeholder="Tell us about your distribution experience..." />
            </div>
            
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Submit Application
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BecomeDistributor;
