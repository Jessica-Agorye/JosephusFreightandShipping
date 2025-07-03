import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import josephuslogo from "../assets/images/josehpuslogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="bg-white text-gray-800 fixed w-full z-50 shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <img
              src={josephuslogo}
              alt="Josephus logo"
              className="
                max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-24
                w-auto object-contain transition-all duration-300
              "
              style={{
                height: "auto",
              }}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  relative text-gray-800 uppercase font-semibold tracking-wide
                  transition-all duration-300
                  before:content-[''] before:absolute before:left-0 before:bottom-0
                  before:w-0 before:h-[2px]
                  before:bg-gradient-to-r before:from-blue-500 before:to-green-400
                  before:transition-all before:duration-300
                  hover:text-transparent
                  hover:bg-clip-text
                  hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-400
                  hover:before:w-full
                "
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              className="
                inline-block
                bg-gradient-to-r from-blue-500 to-green-400
                text-white uppercase font-semibold
                px-5 py-2 rounded-md shadow
                hover:from-blue-600 hover:to-green-500
                transition-all duration-300
              "
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            md:hidden
            bg-white
            px-4 pt-4 pb-8
            space-y-4
            shadow-lg
            transition-all duration-300 ease-in-out
          "
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                block text-gray-800 uppercase font-semibold tracking-wide relative
                transition-all duration-300
                before:content-[''] before:absolute before:left-0 before:bottom-0
                before:w-0 before:h-[2px]
                before:bg-gradient-to-r before:from-blue-500 before:to-green-400
                before:transition-all before:duration-300
                hover:text-transparent
                hover:bg-clip-text
                hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-400
                hover:before:w-full
              "
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className="
              block w-full text-center
              bg-gradient-to-r from-blue-500 to-green-400
              text-white uppercase font-semibold
              px-4 py-3 rounded-md shadow
              hover:from-blue-600 hover:to-green-500
              transition-all duration-300
            "
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
