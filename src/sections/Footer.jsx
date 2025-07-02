import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="bg-blue-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Brand */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold mb-3">ShipSmart Logistics</h2>
          <p className="text-blue-100 max-w-xs">
            Reliable global freight & shipping solutions you can trust.
          </p>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-blue-100">Phone: +1 (800) 555-1234</p>
          <p className="text-blue-100">Email: info@josephus.com</p>
        </div>

        {/* Social Links */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-white text-blue-700 rounded-full p-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="bg-white text-blue-700 rounded-full p-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="bg-white text-blue-700 rounded-full p-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="#"
              className="bg-white text-blue-700 rounded-full p-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-blue-100 text-sm">
        &copy; {new Date().getFullYear()} Josephus Logistics. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
