import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from "react-icons/fa";
import LeadForm from "../components/LeadForm";

const whatsappNumber = "+91 9568978819"
const whatsappLink = "https://wa.me/919568978819?text=Hello%20SRM%20Global%20Hub"
const phoneNumber = "+91 9568978819"
const phoneLink = "tel:+919568978819"
const emailAddress = "sujalsodlan0001@gmail.com"
const emailLink = `mailto:${emailAddress}`
const facilityMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2153895620276!2d-73.98731968458847!3d40.75798597932682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1645564990761!5m2!1sen!2sus"

const Contact: React.FC = () => {
  // REPLACE WITH REAL DATA: address, email, phone, WhatsApp, and facility map location
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
            Connect with SRM GLOBAL HUB
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Share your project details and our team will get back to you with a tailored manufacturing plan.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-8">Contact Information</h2>
            <div className="space-y-6">
              {[
                { icon: <FaMapMarkerAlt className="text-2xl" />, title: "Address", desc: "Plot No. 123, Industrial Area, Gurugram, Haryana 122001, India" },
                { icon: <FaPhone className="text-2xl" />, title: "Phone", desc: phoneNumber },
                { icon: <FaEnvelope className="text-2xl" />, title: "Email", desc: emailAddress },
                { icon: <FaClock className="text-2xl" />, title: "Business Hours", desc: "Mon - Sat: 9 AM - 7 PM" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-accent text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">{item.title}</h3>
                    {item.title === "Email" ? (
                      <a href={emailLink} className="text-gray-600 hover:text-accent transition-colors">
                        {item.desc}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-2xl text-center transition-colors flex flex-col items-center gap-3"
              >
                <FaWhatsapp className="text-3xl" />
                <span className="font-semibold text-lg">WhatsApp</span>
                <span className="text-sm text-green-100">{whatsappNumber}</span>
              </a>
              <a
                href={emailLink}
                className="bg-primary hover:bg-primary/90 text-white p-6 rounded-2xl text-center transition-colors flex flex-col items-center gap-3"
              >
                <FaEnvelope className="text-3xl" />
                <span className="font-semibold text-lg">Email Us</span>
              </a>
              <a
                href={phoneLink}
                className="bg-accent hover:bg-accent/90 text-white p-6 rounded-2xl text-center transition-colors flex flex-col items-center gap-3"
              >
                <FaPhone className="text-3xl" />
                <span className="font-semibold text-lg">Call Now</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <LeadForm />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Find Our Facility</h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              title="Google Maps"
              src={facilityMapSrc}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact;
