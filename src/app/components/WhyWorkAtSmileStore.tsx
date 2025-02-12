"use client";
import React from "react";
import {
  FaPeopleArrows,
  FaShoppingCart,
  FaHandsHelping,
  FaHome,
} from "react-icons/fa";
import { motion } from "framer-motion";

const WhyWorkAtSmileStore = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariant = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        duration: 0.8,
      },
    },
  };

  const content = [
    {
      icon: <FaPeopleArrows />,
      heading: "Purpose-Driven Works",
      text: "Make a difference in the lives of persons with disabilities and underserved communities.",
    },
    {
      icon: <FaShoppingCart />,
      heading: "Inclusive Environment",
      text: "We are committed to building a workplace where everyone feels valued, regardless of ability or background.",
    },
    {
      icon: <FaHandsHelping />,
      heading: "Career Growth",
      text: "From store operations to leadership roles, we provide opportunities for personal and professional development.",
    },
    {
      icon: <FaHome />,
      heading: "Community Impact",
      text: "Every role contributes to a mission of creating stronger, more inclusive neighborhoods.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-0 overflow-hidden relative">
      <motion.div
        className="container mx-auto text-center py-8 sm:py-20 px-2 md:px-4 max-w-8xl"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <motion.h2
          className="text-ultravioletBlue font-serif font-extrabold text-5xl sm:text-5xl md:text-6xl mb-12 sm:mb-16"
          variants={itemVariant}
        >
          Why Work with SMILE Store?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* First partition: Image of Smile Store */}
          <div className="flex justify-center items-center h-full">
            <img
              src="/careers.avif"
              alt="Smile Store"
              className="rounded-lg shadow-lg h-full object-cover"
            />
          </div>

          {/* Second partition: Tabs in 2-column format with equal height */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full"
            variants={containerVariant}
          >
            {content.map((item, index) => (
              <motion.div
                className="bg-white hover:bg-gray-50 shadow-lg rounded-xl p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] h-full"
                key={index}
                variants={itemVariant}
                whileHover={{ y: -5 }}
              >
                <div className="icon-heading flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left mb-4">
                  <motion.span
                    className="icon text-secondaryRed text-3xl sm:text-4xl p-3 bg-red-50 rounded-lg"
                    variants={iconVariant}
                  >
                    {item.icon}
                  </motion.span>
                  <h3 className="font-serif text-primaryBlue text-2xl sm:text-2xl font-bold leading-tight">
                    {item.heading}
                  </h3>
                </div>
                <div className="text-left font-poppins text-gray-600 text-base sm:text-lg leading-relaxed">
                  {item.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyWorkAtSmileStore;
