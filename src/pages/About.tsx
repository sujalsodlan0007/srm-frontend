import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLightbulb, FaHeart } from "react-icons/fa";

const About: React.FC = () => {
  const timeline = [
    { year: "2000", title: "Founded", desc: "Started as a small workshop" },
    { year: "2008", title: "Expansion", desc: "Opened first factory" },
    { year: "2015", title: "Global Reach", desc: "Exported to 30 countries" },
    { year: "2024", title: "Innovation", desc: "Sustainable manufacturing" }
  ];

  const team = [
    { name: "John Smith", role: "CEO", img: "/uploads/luba-glazunova-hl8EFKDlbKw-unsplash.jpg.jpeg" },
    { name: "Jane Doe", role: "Head of Design", img: "/uploads/francois-le-nguyen-pouTfHUG430-unsplash.jpg.jpeg" },
    { name: "Mike Johnson", role: "Production Manager", img: "/uploads/equalstock-kuyumG6hKWk-unsplash.jpg.jpeg" }
  ];
  // REPLACE WITH REAL DATA: leadership bios and team photos

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src="/uploads/remy-gieling-KP6XQIEjjPA-unsplash.jpg.jpeg"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Crafting Excellence Since 2000
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/uploads/marco-j-haenssgen-sE0udIZcgGM-unsplash.jpg.jpeg"
                alt="Our Story"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                What started as a small workshop with a passion for quality has grown into a leading clothing manufacturer.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                For over two decades, we've been dedicated to crafting premium garments that combine style, comfort, and durability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <FaLightbulb className="text-5xl" />, title: "Vision", desc: "To be the global leader in sustainable clothing manufacturing." },
              { icon: <FaHeart className="text-5xl" />, title: "Mission", desc: "To deliver exceptional quality while prioritizing people and the planet." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-2xl shadow-lg text-center"
              >
                <div className="text-accent mb-6">{item.icon}</div>
                <h3 className="text-3xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-16 text-center"
          >
            Our Journey
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-accent h-full" />
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="w-5/12" />
                <div className="w-2/12 flex justify-center">
                  <div className="w-12 h-12 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-xl">
                    {item.year.slice(-2)}
                  </div>
                </div>
                <div className="w-5/12">
                  <div className={`bg-white p-8 rounded-2xl shadow-lg ${index % 2 === 0 ? "ml-8" : "mr-8"}`}>
                    <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-12 text-center"
          >
            Our Leadership
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden text-center"
              >
                <img src={member.img} alt={member.name} className="w-full h-72 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-accent font-semibold text-lg">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Company Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-6"
          >
            Download Our Company Profile
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8"
          >
            Get detailed information about our capabilities, certifications, and services.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            href="#"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white px-12 py-5 rounded-full text-xl font-semibold transition-all"
          >
            <span>Download PDF</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </motion.a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-6"
          >
            Let’s take your brand from concept to production
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-700 mb-8"
          >
            Our manufacturing experts are ready to help with OEM, private label, and export-ready apparel.
          </motion.p>
          <Link
            to="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-12 py-5 rounded-full text-xl font-semibold transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
