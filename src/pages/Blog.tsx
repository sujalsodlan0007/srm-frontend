import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/sampleData";

const Blog: React.FC = () => {
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
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Fashion Tips & Industry News
          </motion.p>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-accent font-semibold">{post.category}</span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                <Link to="/blog/1" className="text-accent font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
