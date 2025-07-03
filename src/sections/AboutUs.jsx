import React from "react";
import about1 from "../assets/images/about1.jpg";
import about2 from "../assets/images/about2.jpg";
import about3 from "../assets/images/about3.jpg";
import { FaShip, FaExchangeAlt, FaFileAlt } from "react-icons/fa";

function AboutUs() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-white via-blue-50 to-white py-24 text-gray-800 overflow-hidden"
    >
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100 opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-10 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-stretch gap-8">
        <div className="md:w-1/2 relative min-h-[28rem] flex justify-center items-center">
          <div className="w-52 h-72 rounded-xl overflow-hidden shadow-lg transform rotate-[-6deg] absolute top-0 left-8">
            <img
              src={about1}
              alt="About Us 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent"></div>
          </div>
          =
          <div className="w-52 h-72 rounded-xl overflow-hidden shadow-xl transform rotate-[5deg] absolute top-10 right-8">
            <img
              src={about2}
              alt="About Us 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent"></div>
          </div>
          <div className="w-52 h-72 rounded-xl overflow-hidden shadow-lg transform rotate-[-3deg] absolute bottom-0 left-1/2 translate-x-[-50%]">
            <img
              src={about3}
              alt="About Us 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent"></div>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col justify-between">
          <div className="bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">
                About <span className="text-blue-900">Our Solutions</span>
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                <span className="font-semibold text-blue-700">
                  Josephus International Link Ltd
                </span>{" "}
                is a dynamic Nigerian company specializing in{" "}
                <span className="text-blue-700 font-medium">import</span>,{" "}
                <span className="text-blue-700 font-medium">export</span>,{" "}
                <span className="text-blue-700 font-medium">logistics</span>,
                and{" "}
                <span className="text-blue-700 font-medium">
                  clearing & forwarding
                </span>{" "}
                services.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                We deliver seamless end-to-end supply chain solutions across
                industries, handling cargo by land, sea, or air with precision
                and care. As a trusted partner across West Africa, we’re
                dedicated to building strong, lasting business connections.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <FaShip className="text-blue-700 mt-1" size={20} />
                  <span>Import and Export services for diverse industries</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaExchangeAlt className="text-blue-700 mt-1" size={20} />
                  <span>
                    Tailored logistics solutions designed for unique business
                    needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaFileAlt className="text-blue-700 mt-1" size={20} />
                  <span>
                    Expert customs clearing and documentation for seamless trade
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
