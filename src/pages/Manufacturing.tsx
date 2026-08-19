import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { manufacturingSteps } from "../data/sampleData";
import { FaCheckCircle, FaClipboardCheck, FaSearch, FaEye } from "react-icons/fa";

const Manufacturing: React.FC = () => {
  const qualitySteps = [
    {
      icon: <FaClipboardCheck className="text-4xl" />,
      title: "Raw Material Inspection",
      description: "All incoming fabrics and materials are thoroughly checked for quality before production."
    },
    {
      icon: <FaSearch className="text-4xl" />,
      title: "In-Process Quality Control",
      description: "Multiple checkpoints during production to ensure each piece meets our standards."
    },
    {
      icon: <FaEye className="text-4xl" />,
      title: "Final Quality Audit",
      description: "100% inspection of finished products before packaging and shipping."
    },
    {
      icon: <FaCheckCircle className="text-4xl" />,
      title: "Packaging & Shipping Check",
      description: "Final verification before dispatch to ensure everything is perfect."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 z-10" />
        <img
          src="/uploads/marco-j-haenssgen-sE0udIZcgGM-unsplash.jpg.jpeg"
          alt="Manufacturing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Our Manufacturing Process
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Quality Craftsmanship at Every Step
          </motion.p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-16 text-center"
          >
            From Concept to Delivery
          </motion.h2>
          <div className="space-y-8">
            {manufacturingSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-8 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-accent to-primary/70 rounded-2xl flex items-center justify-center text-4xl">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-3xl font-bold text-accent">{String(step.id).padStart(2, "0")}</span>
                    <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-16 text-center"
          >
            Our Quality Control Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualitySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-10 rounded-2xl shadow-lg text-center"
              >
                <div className="text-accent mb-6">{step.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-12 text-center"
          >
            Our Factory
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/uploads/marco-j-haenssgen-sE0udIZcgGM-unsplash.jpg.jpeg",
              "/uploads/remy-gieling-KP6XQIEjjPA-unsplash.jpg.jpeg",
              "/uploads/equalstock-kuyumG6hKWk-unsplash.jpg.jpeg",
              "/uploads/francois-le-nguyen-pouTfHUG430-unsplash.jpg.jpeg",
              "/uploads/luba-glazunova-hl8EFKDlbKw-unsplash.jpg.jpeg",
              "/uploads/collab-media-upKXvfgKABY-unsplash - Copy.jpg.jpeg"
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <img src={img} alt={`Factory ${index + 1}`} className="w-full h-72 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Our Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "ISO 9001", desc: "Quality Management" },
              { title: "ISO 14001", desc: "Environmental Management" },
              { title: "SA8000", desc: "Social Accountability" }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 text-center text-white"
              >
                <FaCheckCircle className="text-6xl text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                <p className="text-white/80">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-12 text-center"
          >
            Production Capacity
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50,000+", label: "Pieces per Month" },
              { number: "2,000+", label: "Styles per Year" },
              { number: "500+", label: "Skilled Workers" },
              { number: "50+", label: "Countries Served" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-xl text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Partner With Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8"
          >
            Let's discuss your manufacturing needs and create something amazing together.
          </motion.p>
          <Link
            to="/request-quotation"
            className="inline-block bg-accent hover:bg-accent/90 text-white px-12 py-5 rounded-full text-xl font-semibold transition-all"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
