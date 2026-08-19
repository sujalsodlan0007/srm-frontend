import { motion } from "framer-motion";
import { FaGlobe, FaShieldAlt, FaPlayCircle } from "react-icons/fa";

const Factory: React.FC = () => {
  const factoryFeatures = [
    { title: "Production Units", value: "50,000 sq ft" },
    { title: "Skilled Workers", value: "500+" },
    { title: "Machines", value: "Modern Equipment" },
    { title: "Capacity", value: "100,000+ pcs/month" }
  ];
  
  const images = [
    "/uploads/marco-j-haenssgen-sE0udIZcgGM-unsplash.jpg.jpeg",
    "/uploads/remy-gieling-KP6XQIEjjPA-unsplash.jpg.jpeg",
    "/uploads/equalstock-kuyumG6hKWk-unsplash.jpg.jpeg",
    "/uploads/francois-le-nguyen-pouTfHUG430-unsplash.jpg.jpeg"
  ];

  const certifications = [
    "ISO 9001:2015 (Quality Management)",
    "SA8000 (Social Accountability)",
    "Oeko-Tex Standard 100",
    "Sedex Members Ethical Trade Audit (SMETA)"
  ];

  const exportCountries = [
    "United States", "United Kingdom", "Germany", "France",
    "Canada", "Australia", "Japan", "United Arab Emirates"
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
            Our Factory
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            State-of-the-Art Facilities
          </motion.p>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Production Capacity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {factoryFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-primary/10 rounded-2xl p-8 text-center"
            >
              <h3 className="text-3xl font-bold text-primary mb-2">{feature.value}</h3>
              <p className="text-gray-600">{feature.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Video Tour */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">Factory Video Tour</h2>
          <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
            <FaPlayCircle className="text-8xl text-accent" />
            <p className="ml-4 text-xl text-gray-600">Click to watch our factory video tour</p>
          </div>
        </motion.section>

        {/* Certifications & Compliance */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-8">
            <FaShieldAlt className="text-5xl text-accent mr-4" />
            <h2 className="text-4xl font-bold text-primary">Certifications & Compliance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100"
              >
                <p className="font-semibold text-lg">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Global Export Capability */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-8">
            <FaGlobe className="text-5xl text-accent mr-4" />
            <h2 className="text-4xl font-bold text-primary">Global Export Capability</h2>
          </div>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We export our products to countries around the world, adhering to international standards and regulations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {exportCountries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-4 rounded-xl text-center font-semibold"
              >
                {country}
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Factory Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={image} alt={`Factory ${index + 1}`} className="w-full h-96 object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Factory;
