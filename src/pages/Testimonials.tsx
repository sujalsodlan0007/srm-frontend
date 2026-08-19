import { motion } from "framer-motion";
import TestimonialCarousel from "../components/TestimonialCarousel";

const Testimonials: React.FC = () => {
  const brandLogos = [
    "Fashion Forward",
    "Parisian Style",
    "Ethnic Wear House",
    "Global Apparel",
    "Trend Setters",
    "Premium Wear Co.",
    "Style Hub",
    "Urban Threads"
  ];
  // REPLACE WITH REAL DATA: client logos and brand names

  return (
    <div className="bg-white">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 z-10" />
        <img
          src="/uploads/remy-gieling-KP6XQIEjjPA-unsplash.jpg.jpeg"
          alt="Testimonials"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Client Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl"
          >
            Hear from brands that trust our manufacturing and export expertise.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-4 text-center"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-16 text-center"
          >
            Trusted by leading fashion brands worldwide.
          </motion.p>

          <TestimonialCarousel />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-4 text-center"
          >
            Brands We've Worked With
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-12 text-center"
          >
            Join the list of successful partners.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brandLogos.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center flex items-center justify-center"
              >
                <h3 className="text-2xl font-bold text-primary/70 hover:text-primary transition-colors">
                  {brand}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
