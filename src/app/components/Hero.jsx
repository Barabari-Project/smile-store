"use client";

import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaSmileBeam } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

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
    <section className="bg-gradient-to-b from-white to-gray-50 px-0 overflow-hidden relative">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[600px] sm:min-h-[650px] md:min-h-[750px] py-8 sm:py-10 md:py-12 px-2 md:px-2 w-full mx-auto">
        {/*Brand Info*/}
        <div className="flex flex-col justify-center py-4 sm:py-6 md:py-0 relative smallherocontainer">
          <div className="text-center md:text-left space-y-8 sm:space-y-10 md:space-y-12 lg:max-w-[650px]">
            <motion.h1
              as="h1"
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-left font-poppins font-extrabold text-primaryBlue text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight flex items-center"
            >
              <span className="text-primaryBlue first-letter-effect">S</span>
              <span className="text-secondaryBlue">mile</span>
              <span className="text-secondaryBlue first-letter-effect-red">
                {" "}
                S
              </span>
              <span className="text-secondaryRed">tore</span>
              <br />
              <span className="text-blossomRed"></span>
            </motion.h1>

            <motion.h4
              as="h4"
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-ultravioletBlue text-3xl sm:text-xl md:text-3xl font-semibold font-poppins leading-relaxed flex items-center flex-wrap gap-2"
            >
              Doing Business with Empathy!
              <span className="flex items-center gap-2 sm:gap-3 text-secondaryRed">
                <FaSmileBeam className="text-xl sm:text-2xl" />
                <FaShoppingCart className="text-xl sm:text-2xl" />
              </span>
            </motion.h4>

            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start items-center italic font-poppins text-base sm:text-lg text-gray-700 leading-relaxed max-w-[580px]"
            >
              At SMILE Store, we're not just a grocery store—we're a community
              built on care, inclusion, and empowerment. Our stores are led by
              individuals with disabilities and caregivers who show every day
              that the power of a smile can truly change lives. When you shop
              with us, you're doing more than filling your cart; you're
              supporting people, dreams, and a vision of a world where everyone
              matters.
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
    </section>
  );
};

export default Hero;
