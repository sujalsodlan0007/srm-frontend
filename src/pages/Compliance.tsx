import { motion } from "framer-motion"
import ComplianceGrid from "../components/ComplianceGrid"
import { Link } from "react-router-dom"

const Compliance: React.FC = () => {
  return (
    <div className="bg-surface min-h-screen">
      <section className="bg-gradient-to-br from-primary to-primary/70 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Compliance & Certifications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            We maintain the highest global standards across quality, safety, sustainability, and ethical manufacturing.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ComplianceGrid />

        <div className="mt-16 rounded-3xl bg-accent/10 border border-accent/20 p-12 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Need compliance support for your next export order?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Our team helps you navigate certifications, documentation, and international compliance requirements so your production is export-ready from day one.
          </p>
          <Link
            to="/request-quotation"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-white text-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Request a Certification Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Compliance
