import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const MotionDiv = motion.div;

const faqData = [
  {
    question: " What types of goods do you handle?",
    answer:
      "We handle a wide range of goods, including general merchandise, industrial equipment, agricultural products, electronics, consumer goods, and raw materials. Our services are flexible and tailored to client needs.",
  },
  {
    question: "Do you assist with both air and sea freight?",
    answer:
      "Yes, we provide logistics support for both air and sea freight, including coordination, documentation, and real-time tracking of shipments.",
  },
  {
    question: "Can you help with customs clearance at any Nigerian port?",
    answer:
      "Absolutely. We offer clearing and forwarding services at all major Nigerian seaports, airports, and land border posts, including Lagos (Apapa and Tin Can), Onne, Port Harcourt, Kano, and Abuja.",
  },
  {
    question: "How long does the clearing process take?",
    answer:
      "Clearing times vary depending on cargo type, documentation, and regulatory checks. However, with complete documents, we aim to complete clearance within 3 to 5 working days.",
  },
  {
    question: " What export support do you provide?",
    answer:
      "We assist exporters with product registration, packaging, export permits, customs documentation, freight booking, and delivery to foreign destinations.",
  },
  {
    question: "  Is your company licensed?",
    answer:
      "Yes, Josephus International Link Ltd is fully registered and compliant with Nigerian trade and logistics regulatory authorities.",
  },
  {
    question: "  Can you help with import permits and SONCAP/NAFDAC approvals?",
    answer:
      "Yes, we offer support with obtaining Form M, SONCAP, NAFDAC, and other mandatory trade approvals.",
  },
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-gradient-to-r from-white via-blue-50 to-white py-24 text-gray-800 overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl"></div>

      <div className="max-w-3xl mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-16"
        >
          Frequently Asked Questions
        </MotionDiv>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left p-4 bg-white hover:bg-blue-50 transition-colors duration-300"
              >
                <span className="font-medium text-gray-800">
                  {item.question}
                </span>
                <MotionDiv
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-blue-700" />
                </MotionDiv>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <MotionDiv
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    exit={{ scaleY: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ transformOrigin: "top" }}
                    className="px-4 pb-4 text-gray-600 bg-white overflow-hidden"
                  >
                    {item.answer}
                  </MotionDiv>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
