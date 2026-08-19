import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTag, FaPalette, FaBox } from "react-icons/fa";

const PrivateLabel: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary to-primary/70 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Private Label & OEM
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Build Your Brand with Us
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <FaPalette className="text-4xl" />, title: "Custom Design", desc: "Bring your designs to life" },
            { icon: <FaTag className="text-4xl" />, title: "Your Branding", desc: "Private label packaging" },
            { icon: <FaBox className="text-4xl" />, title: "Full OEM", desc: "Complete manufacturing" }
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
              <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/request-quotation"
            className="inline-block bg-accent hover:bg-accent/90 text-white px-12 py-5 rounded-full text-xl font-semibold transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivateLabel;
