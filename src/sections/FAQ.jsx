import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const MotionDiv = motion.div;

const faqData = [
  {
    question: "How long does international shipping take?",
    answer:
      "Shipping times vary by destination and shipping method. Typically, international freight can take 5-14 business days depending on the route and customs clearance.",
  },
  {
    question: "Do you handle customs paperwork?",
    answer:
      "Absolutely! Our customs experts ensure all documentation is correct and your shipments comply with international regulations for seamless transit.",
  },
  {
    question: "Can I track my shipment in real-time?",
    answer:
      "Yes, we offer advanced tracking solutions that let you monitor your shipments at every stage of the journey in real-time.",
  },
  {
    question: "What types of cargo do you ship?",
    answer:
      "We handle a wide range of cargo including general freight, oversized loads, hazardous materials, and temperature-sensitive goods.",
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
      {/* Decorative background blobs */}
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
