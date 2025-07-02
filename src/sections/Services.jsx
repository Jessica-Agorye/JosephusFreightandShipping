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
        "We make importing to Nigeria fast and compliant, handling sourcing, shipping, customs, delivery, and quality checks.",
      icon: <FaPlane size={40} className="text-blue-700" />,
    },
    {
      title: "Export Services",
      description:
        "We help Nigerian businesses reach global markets with efficient export services, managing documentation, packaging, freight, customs, and international delivery.",
      icon: <FaShippingFast size={40} className="text-blue-700" />,
    },
    {
      title: "Logistics",
      description:
        "We provide reliable logistics services across Nigeria, including transport, warehousing, door-to-door delivery, cargo handling, and real-time tracking.",
      icon: <FaWarehouse size={40} className="text-blue-700" />,
    },
    {
      title: "Clearing & Forwarding",
      description:
        "We provide efficient clearing and forwarding services in Nigeria, handling customs clearance, trade documents, duty payments, regulatory compliance, and prompt delivery of goods to their final destination.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
          {services.map((service, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 flex flex-col h-full text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-1">{service.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
