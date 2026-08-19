import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTrash, FaHeart } from "react-icons/fa";
import { products } from "../data/sampleData";

const Wishlist: React.FC = () => {
  const wishlistProducts = products.slice(0, 4);
  
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-4xl font-bold text-primary flex items-center gap-4">
              <FaHeart className="text-accent" /> My Wishlist
            </h1>
            <span className="text-xl text-gray-600">{wishlistProducts.length} items</span>
          </div>
          
          {wishlistProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {wishlistProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-accent">
                      <FaTrash size={18} />
                    </button>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                    <h3 className="text-xl font-bold text-primary mb-3">{product.name}</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-2xl font-bold text-accent">₹{product.price.toFixed(0)}</span>
                      <span className="text-lg text-gray-400 line-through">₹{product.originalPrice.toFixed(0)}</span>
                    </div>
                    <div className="flex gap-4">
                      <Link to={`/product/${product.id}`} className="flex-1 bg-primary hover:bg-primary/90 text-white text-center py-3 rounded-xl font-semibold transition-colors">
                        View Details
                      </Link>
                      <button className="px-6 bg-accent hover:bg-accent/90 text-white rounded-xl font-semibold transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <FaHeart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-primary mb-4">Your wishlist is empty</h2>
              <p className="text-gray-600 text-lg mb-8">Add some products to your wishlist</p>
              <Link to="/shop" className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
                Shop Now
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Wishlist;
