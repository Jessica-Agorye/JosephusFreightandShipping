import React from "react";
import heroimage from "../assets/images/heroimage.jpg";

function AboutUs() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-white via-blue-50 to-white py-24 text-gray-800 overflow-hidden"
    >
      {/* Decorative shapes for modern style */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100 opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-10 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        {/* Image Section */}
        <div className="md:w-1/2">
          <div className="relative w-full h-80 md:h-[28rem] rounded-xl overflow-hidden shadow-xl">
            <img
              src={heroimage}
              alt="About Us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">
            About Our Shipping Solutions
          </h2>
          <p className="text-lg mb-6">
            For over a decade, we’ve delivered seamless freight and logistics
            solutions for businesses worldwide. Our mission is to simplify
            shipping and empower your growth through reliable, transparent, and
            innovative services.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-700 rounded-full mr-3"></span>
              Fast & reliable global freight services
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-700 rounded-full mr-3"></span>
              Tailored logistics solutions for any industry
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-700 rounded-full mr-3"></span>
              Transparent tracking and real-time updates
            </li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
