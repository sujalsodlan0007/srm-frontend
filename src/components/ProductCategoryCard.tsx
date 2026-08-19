import { motion } from "framer-motion"
import { Link } from "react-router-dom"

interface ProductCategoryCardProps {
  name: string
  image: string
  description: string
}

const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({ name, image, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all"
  >
    <div className="relative h-80 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="text-3xl font-bold">{name}</h3>
      </div>
    </div>
    <div className="p-8 space-y-6">
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
      <Link
        to="/request-quotation"
        className="inline-flex items-center justify-center w-full rounded-full bg-accent px-6 py-4 text-white font-semibold hover:bg-accent/90 transition-colors"
      >
        Inquire Now
      </Link>
    </div>
  </motion.div>
)

export default ProductCategoryCard
