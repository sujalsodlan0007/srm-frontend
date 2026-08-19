import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "What is your minimum order quantity?",
      answer: "Our MOQ is 50 pieces for most products. Contact us for custom order details."
    },
    {
      question: "How long does production take?",
      answer: "Production typically takes 2-4 weeks depending on order size and complexity."
    },
    {
      question: "Do you offer private labeling?",
      answer: "Yes! We offer complete private label and OEM services including custom packaging."
    },
    {
      question: "What shipping methods do you offer?",
      answer: "We offer DHL, FedEx, UPS, and sea freight options worldwide."
    },
    {
      question: "Can I customize products?",
      answer: "Absolutely! We offer full customization including fabric, design, sizing, and labeling."
    }
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
            FAQ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Frequently Asked Questions
          </motion.p>
        </div>
      </section>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left"
              >
                <h3 className="text-xl font-bold text-primary">{faq.question}</h3>
                {openIndex === index ? <FaChevronUp className="text-accent" /> : <FaChevronDown className="text-accent" />}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-8">
                  <p className="text-gray-600 text-lg">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
