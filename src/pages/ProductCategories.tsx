import { motion } from "framer-motion";
import ProductCategoryCard from "../components/ProductCategoryCard";
import { categories } from "../data/sampleData";

const ProductCategories: React.FC = () => {
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
            Product Categories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Explore our high-volume manufacturing categories for export-ready apparel.
          </motion.p>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <ProductCategoryCard
              key={category.id}
              name={category.name}
              image={category.image}
              description={`Premium ${category.name} manufacturing with flexible MOQ, private label options, and export-ready packaging.`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
