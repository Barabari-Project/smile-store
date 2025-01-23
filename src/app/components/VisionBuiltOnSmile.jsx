"use client";
import React from "react";
import { motion } from 'framer-motion';

const VisionBuiltOnSmile = () => {
  return (
    <>
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-6 sm:px-12 max-w-6xl">
          <motion.div 
            className="w-full mb-6 sm:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-left text-ultravioletBlue mb-6 leading-tight">
              Vision Built on Smiles!
            </h2>
            <motion.p 
              className="text-black font-poppins text-lg sm:text-xl text-left sm:ml-3 leading-relaxed max-w-3xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At the SMILE Store, we dream of a world where everyone gets a fair
              chance, where communities come together, and where kindness is a
              way of life. Every time you shop with us, you're helping make that
              dream come true.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-6 sm:px-12 max-w-6xl">
          <motion.div 
            className="w-full mb-6 sm:mb-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-right text-ultravioletBlue mb-6 leading-tight">
              Let's Build a Better Community Together
            </h2>
            <motion.p 
              className="text-black font-poppins text-lg sm:text-xl text-right sm:mr-3 leading-relaxed max-w-3xl ml-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              When you choose a SMILE Store, you're not just buying groceries—you're investing in hope, inclusion, and the strength of our neighborhood.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default VisionBuiltOnSmile;
