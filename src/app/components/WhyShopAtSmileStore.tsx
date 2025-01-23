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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
      text: 'We believe everyone deserves access to good food, no matter their circumstances. That’s why we offer fair prices and special discounts for those who need it most.',
    },
    {
      icon: <FaHandsHelping />,
      heading: 'Strengthening Our Neighborhoods',
      text: 'Your purchase doesn’t just buy groceries—it helps uplift low-income families, seniors, and people with disabilities in our community.',
    },
    {
      icon: <FaHome />,
      heading: 'An Inclusive Place for All',
      text: 'Our stores are welcoming spaces designed for everyone—whether you’re a parent, a senior, or someone with different needs, you’ll always feel at home here.',
    },
  ];

  return (
    <section className="bg-white px-0 overflow-hidden relative">
      <motion.div
        className="container mx-auto text-center py-6"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <motion.h2
          className="text-ultravioletBlue font-serif font-bold text-6xl mb-2 p-4"
          variants={itemVariant}
        >
          Why Shop at the SMILE Store?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2"  
          variants={containerVariant}
        >
          {content.map((item, index) => (
            <motion.div
              className="grid-container bg-light shadow-md p-4 rounded-lg"  
              key={index}
              variants={itemVariant}
            >
              <div className="icon-heading flex items-center gap-2">
                <span className="icon text-ultravioletBlue text-3xl">{item.icon}</span>
                <h1 className="headingGrid font-serif text-primaryRed text-xl font-semibold">
                  {item.heading}
                </h1>
              </div>
              <div className="subtext font-semibold font-poppins text-ultravioletBlue mt-2"> 
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
