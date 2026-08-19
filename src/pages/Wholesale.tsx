import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTruck, FaBox, FaDollarSign, FaUsers } from "react-icons/fa";

const Wholesale: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/70 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Wholesale & Bulk Orders
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Premium Quality at Competitive Prices
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: <FaBox className="text-4xl" />, title: "MOQ 50 Pieces", desc: "Low minimum order quantity" },
            { icon: <FaDollarSign className="text-4xl" />, title: "Wholesale Pricing", desc: "Up to 50% off retail" },
            { icon: <FaTruck className="text-4xl" />, title: "Global Shipping", desc: "Worldwide delivery" },
            { icon: <FaUsers className="text-4xl" />, title: "Dedicated Support", desc: "Account manager assigned" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-accent mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">Ready to Partner?</h2>
          <Link
            to="/request-quotation"
            className="inline-block bg-accent hover:bg-accent/90 text-white px-12 py-5 rounded-full text-xl font-semibold transition-all"
          >
            Request a Quotation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wholesale;
