import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaCheck,
  FaUsers,
  FaTruck,
  FaAward,
  FaArrowRight,
  FaPhone,
  FaIndustry,
  FaShieldAlt,
  FaFileDownload
} from "react-icons/fa";
import { testimonials, manufacturingSteps } from "../data/sampleData";
import BrandLogoGrid from "../components/BrandLogoGrid";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home: React.FC = () => {
  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 z-10" />
        <img
          src="/uploads/marco-j-haenssgen-sE0udIZcgGM-unsplash.jpg.jpeg"
          alt="SRM GLOBAL HUB Factory"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-5xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Premium Garment Manufacturing
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl md:text-4xl font-semibold mb-4"
          >
            Your Trusted Partner for OEM, ODM & Private Label
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 opacity-90"
          >
            15+ Years Experience • 200+ Skilled Workers • 50,000+ Pieces/Month Capacity
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/request-quotation"
              className="bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              Request a Quote
            </Link>
            <Link
              to="/contact"
              className="border-3 border-white hover:bg-white hover:text-primary text-white px-10 py-5 rounded-full text-xl font-semibold transition-all flex items-center justify-center gap-2"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "200+", label: "Skilled Workers" },
              { number: "50,000+", label: "Pieces/Month" },
              { number: "50+", label: "Countries Served" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center"
          >
            Why Choose SRM GLOBAL HUB
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto"
          >
            We combine traditional craftsmanship with modern technology to deliver premium quality garments.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaAward className="text-5xl" />, title: "15+ Years Experience", desc: "Trusted by leading brands worldwide" },
              { icon: <FaUsers className="text-5xl" />, title: "Expert Team", desc: "200+ skilled professionals dedicated to excellence" },
              { icon: <FaCheck className="text-5xl" />, title: "Rigorous Quality Control", desc: "Multi-stage inspection process" },
              { icon: <FaIndustry className="text-5xl" />, title: "Custom Design", desc: "Bring your vision to life" },
              { icon: <FaTruck className="text-5xl" />, title: "On-Time Delivery", desc: "Global shipping with reliable logistics" },
              { icon: <FaShieldAlt className="text-5xl" />, title: "Compliance Certified", desc: "Meet all international standards" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-10 rounded-2xl shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all border-t-4 border-accent"
              >
                <div className="text-accent mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA 1 */}
      <section className="py-16 bg-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary mb-6"
          >
            Ready to Discuss Your Project?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto"
          >
            Speak with our manufacturing team for a fast quote, lead time estimate, or compliance review.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/request-quotation"
              className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full text-xl font-semibold transition-all"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/contact"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 rounded-full text-xl font-semibold transition-all"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center"
          >
            Our Manufacturing Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto"
          >
            From design to delivery, we ensure every step meets the highest quality standards.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {manufacturingSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all"
              >
                <div className="text-6xl mb-6 text-accent">{step.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/manufacturing"
              className="inline-block bg-primary text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-primary/90 transition-all"
            >
              Learn More About Our Process <FaArrowRight className="inline ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto"
          >
            Comprehensive manufacturing solutions tailored to your needs.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaIndustry className="text-5xl" />,
                title: "OEM Manufacturing",
                desc: "Produce your designs at scale with our expertise.",
                link: "/request-quotation"
              },
              {
                icon: <FaShieldAlt className="text-5xl" />,
                title: "ODM Manufacturing",
                desc: "Choose from our ready designs and customize them.",
                link: "/request-quotation"
              },
              {
                icon: <FaAward className="text-5xl" />,
                title: "Private Label",
                desc: "Build your brand with our premium private label services.",
                link: "/request-quotation"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-accent mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{service.desc}</p>
                <Link
                  to={service.link}
                  className="text-accent font-semibold text-lg hover:underline flex items-center gap-2"
                >
                  Learn More <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA 2 */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-6"
          >
            Start Your Manufacturing Journey Today
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-full text-xl font-semibold transition-all"
            >
              Contact Us
            </Link>
            <a
              href="tel:+919259010657"
              className="border-2 border-white hover:bg-white hover:text-primary text-white px-10 py-4 rounded-full text-xl font-semibold transition-all flex items-center justify-center gap-2"
            >
              <FaPhone size={20} /> Call Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center"
          >
            Client Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto"
          >
            Hear what our satisfied clients have to say about working with us.
          </motion.p>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="mb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-2xl shadow-lg"
                >
                  <div className="text-accent text-5xl mb-6">"</div>
                  <p className="text-gray-700 text-lg mb-8 leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {testimonial.image && (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-accent"
                        />
                      )}
                      <div>
                        <h4 className="text-2xl font-bold text-primary">{testimonial.name}</h4>
                        <p className="text-gray-500 text-lg">{testimonial.brand}</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 text-3xl">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>{i < testimonial.rating ? "★" : "☆"}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary mb-10 text-center"
          >
            Trusted by Leading Brands
          </motion.h3>
          <p className="text-center text-gray-500 mb-10 text-sm sm:text-base">
            Demo brand identities representing the type of fashion and apparel partners we serve.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <BrandLogoGrid />
          </motion.div>
        </div>
      </section>

      {/* Download Company Profile */}
      <section className="py-16 bg-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaFileDownload className="text-6xl text-accent mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-primary mb-4">Download Our Company Profile</h3>
            <p className="text-xl text-gray-600 mb-8">Get detailed information about our company, services, and capabilities.</p>
            <a
              href="#"
              className="inline-flex bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all items-center justify-center gap-2 mx-auto"
            >
              <FaFileDownload /> Download Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Final Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-10"
          >
            Get in touch with us today for a free consultation and quote.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent/90 text-white px-12 py-5 rounded-full text-2xl font-semibold transition-all"
            >
              Contact Us
            </Link>
            <Link
              to="/request-quotation"
              className="border-3 border-white hover:bg-white hover:text-primary text-white px-12 py-5 rounded-full text-2xl font-semibold transition-all"
            >
              Request Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
