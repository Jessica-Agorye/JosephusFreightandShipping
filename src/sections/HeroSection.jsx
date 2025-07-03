import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import herosec2 from "../assets/images/herosec2.jpg";
import herosec from "../assets/images/herosec.jpg";

const MotionDiv = motion.div;

function HeroSection() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white"
    >
      {/* Decorative Blob */}
      <div
        className="absolute -top-32 -right-32 w-64 h-64 bg-blue-400 opacity-30 rounded-full blur-md"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 py-32 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:w-1/2 will-change-transform"
        >
          <div className="bg-blue-700/30 md:bg-transparent p-6 md:p-0 rounded-lg md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Reliable Global Freight & Shipping Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              Move your business forward with secure, efficient, and timely
              delivery services. From sea freight to air cargo, we handle
              logistics you can trust.
            </p>
            <a
              href="mailto:josephusinterlinkltd@gmail.com"
              className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition-colors duration-300"
            >
              Send Us an Email
            </a>
          </div>
        </MotionDiv>

        {/* Images */}
        <div className="mt-16 md:mt-0 md:w-1/2 flex justify-center relative h-[30rem] md:h-[28rem]">
          {/* Image 1 */}
          <div className="w-64 h-96 relative rounded-xl overflow-hidden shadow-lg transform rotate-[-4deg]">
            <img
              src={herosec}
              alt="Cargo ship and freight"
              loading="eager"
              fetchpriority="high"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700/40 to-transparent"></div>
          </div>

          {/* Image 2 */}
          <div className="w-64 h-96 absolute top-10 left-8 rounded-xl overflow-hidden shadow-xl transform rotate-[4deg]">
            <img
              src={herosec2}
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
  );
}

export default HeroSection;
