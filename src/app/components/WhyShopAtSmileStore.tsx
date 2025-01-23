"use client"
import React from 'react';
import { FaPeopleArrows, FaShoppingCart, FaHandsHelping, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhyShopAtSmileStore = () => {
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
        ease: "easeOut"
      } 
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
        duration: 0.8
      }
    }
  };

  const content = [
    {
      icon: <FaPeopleArrows />,
      heading: 'Empowering People, Changing Lives',
      text: 'Every store is run by people with unique abilities, proving that everyone has something amazing to contribute. Your support gives individuals the chance to shine.',
    },
    {
      icon: <FaShoppingCart />,
      heading: 'Groceries That Care for Your Wallet',
      text: "We believe everyone deserves access to good food, no matter their circumstances. That's why we offer fair prices and special discounts for those who need it most.",
    },
    {
      icon: <FaHandsHelping />,
      heading: 'Strengthening Our Neighborhoods',
      text: 'Your purchase doesn\'t just buy groceries—it helps uplift low-income families, seniors, and people with disabilities in our community.',
    },
    {
      icon: <FaHome />,
      heading: 'An Inclusive Place for All',
      text: "Our stores are welcoming spaces designed for everyone—whether you're a parent, a senior, or someone with different needs, you'll always feel at home here.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-0 overflow-hidden relative">
      <motion.div
        className="container mx-auto text-center py-16 sm:py-20 px-2 md:px-4 max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <motion.h2
          className="text-ultravioletBlue font-serif font-extrabold text-5xl sm:text-5xl md:text-6xl mb-12 sm:mb-16"
          variants={itemVariant}
        >
          Why Shop at the SMILE Store?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          variants={containerVariant}
        >
          {content.map((item, index) => (
            <motion.div
              className="bg-white hover:bg-gray-50 shadow-lg rounded-xl p-8 sm:p-10 transition-all duration-300 hover:scale-[1.02]"
              key={index}
              variants={itemVariant}
              whileHover={{ y: -5 }}
            >
              <div className="icon-heading flex flex-col sm:flex-row items-start sm:items-center gap-5 text-left mb-6">
                <motion.span 
                  className="icon text-secondaryRed text-4xl sm:text-5xl p-4 bg-red-50 rounded-lg"
                  variants={iconVariant}
                >
                  {item.icon}
                </motion.span>
                <h3 className="font-serif text-primaryBlue text-3xl sm:text-3xl font-bold leading-tight">
                  {item.heading}
                </h3>
              </div>
              <div className="text-left font-poppins text-gray-600 text-lg sm:text-xl leading-relaxed">
                {item.text}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyShopAtSmileStore;
