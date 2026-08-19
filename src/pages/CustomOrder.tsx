import { motion } from "framer-motion";

const CustomOrder: React.FC = () => {
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
            Custom Clothing Order
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Design Your Perfect Garment
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
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Product Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="e.g., Custom Polo Shirt" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Upload Design</label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center">
                <p className="text-gray-600 mb-4">Drag & drop your design here or</p>
                <button type="button" className="text-accent font-semibold hover:underline">Browse files</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Fabric</label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none">
                  <option>Cotton</option>
                  <option>Polyester</option>
                  <option>Cotton Blend</option>
                  <option>Denim</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Quantity</label>
                <input type="number" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="Enter quantity" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Additional Notes</label>
              <textarea rows={6} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none resize-none" placeholder="Tell us more about your custom order..." />
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Submit Custom Order Request
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomOrder;
