import React from "react";
import { motion } from "framer-motion";
import {
  FaShippingFast,
  FaWarehouse,
  FaFileInvoice,
  FaPlane,
} from "react-icons/fa";

const MotionDiv = motion.div;

function Services() {
  const services = [
    {
      title: "Import Services",
      description:
        "Seamless import solutions with global reach. We handle every step from origin to destination with transparency and speed.",
      icon: <FaPlane size={40} className="text-blue-700" />,
    },
    {
      title: "Export Services",
      description:
        "Empower your business to reach new markets. We manage your export logistics efficiently and cost-effectively.",
      icon: <FaShippingFast size={40} className="text-blue-700" />,
    },
    {
      title: "Warehousing & Distribution",
      description:
        "Secure storage and streamlined distribution tailored to your business needs. Keep inventory moving efficiently.",
      icon: <FaWarehouse size={40} className="text-blue-700" />,
    },
    {
      title: "Customs Clearance",
      description:
        "Ensure smooth customs processing and compliance. Our experts handle documentation and regulations for worry-free shipping.",
      icon: <FaFileInvoice size={40} className="text-blue-700" />,
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-gradient-to-r from-white via-blue-50 to-white py-24 text-gray-800 overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-16"
        >
          Our Services
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center text-blue-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
