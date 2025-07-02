import React from "react";
import { motion } from "framer-motion";
import { FaGlobeAmericas, FaClock, FaCogs, FaHeadset } from "react-icons/fa";

const MotionDiv = motion.div;

function WhyChooseUs() {
  const features = [
    {
      title: "Global Coverage",
      description:
        "We deliver shipments to over 50 countries, ensuring smooth logistics anywhere your business goes.",
      icon: <FaGlobeAmericas size={24} className="text-blue-700" />,
      color: "bg-white text-blue-700",
    },
    {
      title: "Fast & Reliable Delivery",
      description:
        "Time-sensitive cargo? Count on our fast and dependable services to keep your business running smoothly.",
      icon: <FaClock size={24} className="text-blue-700" />,
      color: "bg-white text-blue-700",
    },
    {
      title: "Custom Solutions",
      description:
        "Every business is unique. We tailor logistics and shipping services to your specific needs and industry.",
      icon: <FaCogs size={24} className="text-blue-700" />,
      color: "bg-white text-blue-700",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our dedicated team is always available to help you track, manage, and optimize your shipments.",
      icon: <FaHeadset size={24} className="text-blue-700" />,
      color: "bg-white text-blue-700",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative bg-blue-700 py-24 text-white overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-blue-600 opacity-30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Why Choose Us
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div
                className={`mb-4 w-16 h-16 rounded-full flex items-center justify-center ${feature.color}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
