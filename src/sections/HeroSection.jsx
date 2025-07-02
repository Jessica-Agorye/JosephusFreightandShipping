import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroimage from "../assets/images/heroimage.jpg";
import QuoteForm from "../components/QuoteForm";

const MotionDiv = motion.div;

function HeroSection() {
  const [showForm, setShowForm] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const handleGetQuoteClick = () => {
    setShowForm(true);
    setTimeout(() => {
      const form = document.getElementById("quote-form");
      if (form) form.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white"
      >
        {/* Decorative background blob */}
        <div
          className="absolute -top-32 -right-32 w-64 h-64 bg-blue-400 opacity-30 rounded-full blur-md"
          aria-hidden="true"
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 py-32 flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:w-1/2 will-change-transform"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Reliable Global Freight & Shipping Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              Move your business forward with secure, efficient, and timely
              delivery services. From sea freight to air cargo, we handle
              logistics you can trust.
            </p>
            <button
              onClick={handleGetQuoteClick}
              className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition-colors duration-300"
            >
              Get a Quote
            </button>
          </MotionDiv>

          {/* Overlapping Images - NO animation */}
          <div className="mt-16 md:mt-0 md:w-1/2 flex justify-center relative">
            {/* Image 1 */}
            <div className="w-64 h-96 relative rounded-xl overflow-hidden shadow-lg transform rotate-[-4deg]">
              <img
                src={heroimage}
                alt="Cargo ship and freight"
                loading="eager"
                fetchpriority="high"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/40 to-transparent"></div>
            </div>

            {/* Image 2 */}
            <div className="w-64 h-96 absolute top-8 left-5 rounded-xl overflow-hidden shadow-xl transform rotate-[4deg]">
              <img
                src={heroimage}
                alt="Containers and logistics"
                loading="eager"
                fetchpriority="high"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <QuoteForm onClose={() => setShowForm(false)} />
        </div>
      )}
    </>
  );
}

export default HeroSection;
