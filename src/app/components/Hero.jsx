"use client";

import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaSmileBeam, FaShoppingCart } from 'react-icons/fa';
import ParallaxImages from './ParallaxImages'
import { ParallaxProvider } from "react-scroll-parallax";
const FadeUp = (delay) => ({
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay: delay,
      ease: "easeInOut",
    },
  },
});

const Hero = () => {
  return (
    <>
    <section className="bg-gradient-to-b from-white to-gray-50 px-0 overflow-hidden relative">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[600px] sm:min-h-[650px] md:min-h-[750px] py-8 sm:py-10 md:py-12 px-2 md:px-2 w-full mx-auto">
        {/*Brand Info*/}
        <div className="flex flex-col justify-center py-4 sm:py-6 md:py-0 relative smallherocontainer">
          <div className="text-center md:text-left space-y-8 sm:space-y-10 md:space-y-12 lg:max-w-[650px]">
            <motion.div
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <h1 className="text-center md:text-left font-serif font-extrabold text-primaryBlue leading-snug flex items-center justify-center md:justify-start text-5xl sm:text-5xl md:text-5xl lg:text-6xl">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="text-primaryBlue first-letter-effect inline-block"
                >
                  S
                </motion.span>
                <motion.span
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring" }}
                  className="text-secondaryBlue inline-block"
                >
                  mile
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="text-secondaryBlue first-letter-effect-red inline-block ml-2"
                >
                  S
                </motion.span>
                <motion.span
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring" }}
                  className="text-secondaryRed inline-block"
                >
                  tore
                </motion.span>
              </h1>
              {/* Decorative Underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-primaryBlue via-secondaryBlue to-secondaryRed mt-2 hidden md:block"
              />
            </motion.div>

            <motion.div
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <h4 className="text-ultravioletBlue text-xl sm:text-xl md:text-3xl font-semibold font-poppins leading-relaxed flex items-center justify-center md:justify-start flex-wrap gap-2">
                Doing Business with Empathy!
                <motion.span 
                  className="flex items-center gap-2 sm:gap-3 text-secondaryRed"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaSmileBeam className="text-lg sm:text-xl md:text-2xl" />
                  <FaShoppingCart className="text-lg sm:text-xl md:text-2xl" />
                </motion.span>
              </h4>
            </motion.div>

            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="relative bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <p className="font-poppins text-base sm:text-lg text-gray-700 leading-relaxed max-w-[580px]">
                At SMILE Store, we're not just a grocery store—we're a community
                built on care, inclusion, and empowerment. Our stores are led by
                individuals with disabilities and caregivers who show every day
                that the power of a smile can truly change lives. When you shop
                with us, you're doing more than filling your cart; you're
                supporting people, dreams, and a vision of a world where everyone
                matters.
              </p>
            </motion.div>
          </div>
        </div> 

        {/*Hero Image*/}
        <div className="flex justify-center items-center mt-4 sm:mt-6 md:mt-0">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src="/smile-store-hero.avif"
            alt=""
            className="w-[280px] sm:w-[350px] md:w-[400px] xl:w-[600px] relative drop-shadow-2xl rounded-full hover:scale-105 transition-transform duration-300"
          ></motion.img>
        </div>
      </div> 
      <ParallaxProvider>
    <ParallaxImages />

    </ParallaxProvider>
    </section>
 
    </>
  );
};

export default Hero;
