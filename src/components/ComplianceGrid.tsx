import { motion } from "framer-motion"

const complianceItems = [
  { title: "ISO 9001", description: "Quality management systems for consistent product standards." },
  { title: "SEDEX", description: "Ethical sourcing and supply chain transparency." },
  { title: "SA8000", description: "Social accountability for safe working conditions." },
  { title: "OEKO-TEX Standard 100", description: "Certified safe and sustainable textile materials." },
  { title: "WRAP", description: "Worldwide Responsible Accredited Production compliance." },
  { title: "BSCI", description: "Social compliance standards for international brands." }
]

const ComplianceGrid: React.FC = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {complianceItems.map((item, index) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8"
      >
        <div className="inline-flex items-center justify-center rounded-full bg-accent/10 text-accent w-14 h-14 mb-6 text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
        <p className="text-gray-600 leading-relaxed">{item.description}</p>
      </motion.div>
    ))}
  </div>
)

export default ComplianceGrid
