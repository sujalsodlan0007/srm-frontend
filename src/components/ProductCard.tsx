import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHeart, FaEye } from "react-icons/fa";
import { Product } from "../data/sampleData";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={product.name}
            className="absolute top-0 left-0 w-full h-72 object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        )}
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
            NEW
          </div>
        )}
        {product.isFeatured && (
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
            FEATURED
          </div>
        )}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-primary p-3 rounded-full hover:bg-accent hover:text-white transition-colors shadow-lg" title="Save">
            <FaHeart size={18} />
          </button>
          <Link to={`/product/${product.id}`} className="bg-white text-primary p-3 rounded-full hover:bg-accent hover:text-white transition-colors shadow-lg" title="View">
            <FaEye size={18} />
          </Link>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <h3 className="text-lg font-semibold text-primary mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        <div className="space-y-2 text-sm mb-4">
          <div className="flex justify-between">
            <span className="text-gray-500">MOQ:</span>
            <span className="font-semibold text-primary">{product.moq} pcs</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Sample Price:</span>
            <span className="font-semibold text-primary">₹{product.samplePrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Bulk Price:</span>
            <span className="font-semibold text-accent">₹{product.bulkPriceRange[0]} - ₹{product.bulkPriceRange[1]}</span>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap mb-4">
          {product.colors.slice(0, 4).map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full border-2 border-gray-200 cursor-pointer hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
              title={`Color ${index + 1}`}
            />
          ))}
        </div>
        <Link
          to={`/product/${product.id}`}
          className="mt-2 w-full text-center bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          View Details & Inquiry
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
