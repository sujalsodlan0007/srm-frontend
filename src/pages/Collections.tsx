import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/sampleData";

const Collections: React.FC = () => {
  const collections = [
    { name: "Summer Collection", image: "/uploads/luba-glazunova-hl8EFKDlbKw-unsplash.jpg.jpeg" },
    { name: "Winter Collection", image: "/uploads/equalstock-kuyumG6hKWk-unsplash.jpg.jpeg" },
    { name: "Premium Line", image: "/uploads/marco-j-haenssgen-sE0udIZcgGM-unsplash.jpg.jpeg" }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-primary to-primary/70 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Curated for You
          </motion.p>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-4">{collection.name}</h3>
                <Link to="/shop" className="inline-block bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                  Shop Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.filter(p => p.isBestSeller).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
