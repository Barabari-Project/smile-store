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
    <section className="bg-white px-0 overflow-hidden relative">
      <Navbar></Navbar>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] py-8 px-0">
        {/*Brand Info*/}
        <div className="flex flex-col justify-center py-7 md:py-0 relative smallherocontainer">
          <div className="text-center md:text-left space-y-10 lg:max-w-[600px]">
            <motion.h1
              as="h1"
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-left font-serif font-extrabold text-primaryBlue headingText leading-snug flex items-center"
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
              className="text-ultravioletBlue subHeadingText font-semibold font-serif leading-snug flex items-center sm:text-wrap"
            >
              Doing Business with Empathy!
              <span className="flex items-center space-x-2 ml-2">
                <FaSmileBeam />
                <FaShoppingCart />
              </span>
              <span className="text-secondary"></span>
            </motion.h4>

            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start items-center italic sm:text-wrap p-2"
            >
              At SMILE Store, we’re not just a grocery store—we’re a community
              built on care, inclusion, and empowerment. Our stores are led by
              individuals with disabilities and caregivers who show every day
              that the power of a smile can truly change lives. When you shop
              with us, you’re doing more than filling your cart; you’re
              supporting people, dreams, and a vision of a world where everyone
              matters.
            </motion.div>
          </div>
        </div>

        {/*Hero Image*/}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src="/smile-store-hero.avif"
            alt=""
            className="w-[400px] xl:w-[600px] relative drop-shadow rounded-full"
          ></motion.img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
