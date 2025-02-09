"use client";

import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaSmileBeam, FaShoppingCart } from "react-icons/fa";
import { HiArrowRightCircle } from "react-icons/hi2";
import ParallaxImages from "./ParallaxImages";
import { ParallaxProvider } from "react-scroll-parallax";

const FadeUp = (delay = 0) => ({
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
      duration: 0.6,
      delay,
      ease: "easeInOut",
    },
  },
});

const Hero = () => {
  return (
    <>
      <div className="bg-white">
        <Navbar />

        <motion.section
          className="bg-[#FCF8F1] bg-opacity-30 py-4"
          {...FadeUp(0)}
        >
          <div className="px-4 mx-auto max-w-[1600px] sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <motion.div
                className="text-center lg:text-left"
                {...FadeUp(0.2)}
              >
                <motion.h1
                  className="mt-2 text-6xl font-bold lg:mt-8 sm:text-7xl xl:text-8xl text-ultravioletBlue font-serif"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Smile Store!
                </motion.h1>
                <motion.p
                  className="text-2xl pt-6 font-bold tracking-wider text-blue-500 uppercase"
                  {...FadeUp(0.4)}
                >
                  Doing Business with Empathy!
                </motion.p>
                <motion.p
                  className="mt-6 font-poppins text-lg text-gray-600 lg:mt-8 sm:text-xl"
                  {...FadeUp(0.6)}
                >
                  At SMILE Store, we're not just a grocery store—we're a
                  community built on care, inclusion, and empowerment. Our
                  stores are led by individuals with disabilities and caregivers
                  who show every day that the power of a smile can truly change
                  lives. When you shop with us, you're doing more than filling
                  your cart; you're supporting people, dreams, and a vision of a
                  world where everyone matters.
                </motion.p>

                <motion.div
                  className="mt-12 flex justify-center lg:justify-start"
                  {...FadeUp(0.8)}
                >
                  <button className="get-in-touch hover:animate-pulseCustom rounded-lg">
                    <span className="flex items-center space-x-2">
                      <div className="text-3xl pr-2 p-2">Shop Now</div>
                      <div>
                        <HiArrowRightCircle className="text-3xl" />
                      </div>
                    </span>
                  </button>
                </motion.div>
              </motion.div>

              <motion.div {...FadeUp(1)}>
                <motion.img
                  className="w-auto hover:scale-105 transition-transform duration-500"
                  src="/ecom1.png"
                  alt="E-commerce display"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>

      <ParallaxProvider>
        <ParallaxImages />
      </ParallaxProvider>
    </>
  );
};

export default Hero;
