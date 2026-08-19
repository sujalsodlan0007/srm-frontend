import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCut, FaPaintBrush, FaIndustry, FaBoxOpen, FaTruck, FaCheckCircle } from "react-icons/fa";

const Services: React.FC = () => {
  const services = [
    { icon: <FaCut className="text-4xl" />, title: "Pattern Making", description: "Precision pattern development" },
    { icon: <FaPaintBrush className="text-4xl" />, title: "Design Services", description: "Custom design solutions" },
    { icon: <FaIndustry className="text-4xl" />, title: "Manufacturing", description: "Full production capabilities" },
    { icon: <FaBoxOpen className="text-4xl" />, title: "Packaging", description: "Premium packaging solutions" },
    { icon: <FaTruck className="text-4xl" />, title: "Shipping", description: "Worldwide delivery" },
    { icon: <FaCheckCircle className="text-4xl" />, title: "Quality Control", description: "Rigorous inspection process" }
  ];

  const oemDetails = [
    "Custom design manufacturing",
    "Your brand labeling and packaging",
    "Flexible MOQ options",
    "End-to-end production support"
  ];

  const odmDetails = [
    "Choose from our existing design library",
    "Customization options available",
    "Quick turnaround times",
    "Cost-effective solutions"
  ];

  const privateLabelDetails = [
    "Your brand identity",
    "Custom packaging and tags",
    "Quality assurance",
    "Brand marketing support"
  ];
  
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Complete End-to-End Solutions
          </motion.p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM & ODM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
          >
            OEM & ODM Manufacturing
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-10 shadow-lg"
            >
              <h3 className="text-3xl font-bold text-primary mb-6">OEM (Original Equipment Manufacturing)</h3>
              <p className="text-gray-600 mb-8 text-lg">We manufacture products based on your unique designs and specifications, with your branding and packaging.</p>
              <ul className="space-y-4">
                {oemDetails.map((detail, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-accent text-xl" />
                    <span className="text-lg">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-10 shadow-lg"
            >
              <h3 className="text-3xl font-bold text-primary mb-6">ODM (Original Design Manufacturing)</h3>
              <p className="text-gray-600 mb-8 text-lg">Choose from our existing product designs and customize them to your requirements.</p>
              <ul className="space-y-4">
                {odmDetails.map((detail, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-accent text-xl" />
                    <span className="text-lg">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Private Label */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
          >
            Private Label Manufacturing
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 max-w-4xl mx-auto"
          >
            <p className="text-gray-700 mb-10 text-xl text-center">Build your own brand with our premium private label services. We handle everything from design to delivery under your brand name.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {privateLabelDetails.map((detail, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow text-center">
                  <FaCheckCircle className="text-accent text-3xl mb-4 mx-auto" />
                  <p className="font-semibold">{detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
        
      <div className="py-10 text-center">
        <Link
          to="/request-quotation"
          className="inline-block bg-accent hover:bg-accent/90 text-white px-12 py-5 rounded-full text-xl font-semibold transition-all"
        >
          Get Started Today
        </Link>
      </div>
    </div>
  );
};

export default Services;
