import { motion } from "framer-motion";
import { FaRecycle, FaLeaf, FaTint, FaSun, FaUsers } from "react-icons/fa";

const Sustainability: React.FC = () => {
  const initiatives = [
    { icon: <FaLeaf className="text-4xl" />, title: "Organic Materials", description: "100% certified organic cotton" },
    { icon: <FaRecycle className="text-4xl" />, title: "Recycling", description: "Zero-waste production process" },
    { icon: <FaTint className="text-4xl" />, title: "Water Conservation", description: "50% reduced water usage" },
    { icon: <FaSun className="text-4xl" />, title: "Green Energy", description: "Solar-powered facilities" },
    { icon: <FaUsers className="text-4xl" />, title: "Fair Trade", description: "Ethical labor practices" }
  ];
  
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-green-600 to-green-800 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Sustainability
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Committed to the Planet
          </motion.p>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                {initiative.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{initiative.title}</h3>
              <p className="text-gray-600">{initiative.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Our Promise</h2>
          <p className="text-xl max-w-3xl mx-auto">
            We are dedicated to creating fashion that doesn't harm our planet. Every piece is made with care for the environment and the people who make it.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Sustainability;
