"use-client";
import React from "react";

const VisionBuiltOnSmile = () => {
  return (
    <>
      <section className="bg-white py-8">
        <div className="container mx-auto px-6 sm:px-12 flex flex-col sm:flex-row w-full items-center justify-between">
          <div className="w-full mb-6 sm:mb-0">
            <h2 className="text-4xl sm:text-4xl font-bold font-serif text-left text-ultravioletBlue mb-4">
              Vision Built on Smiles!
            </h2>
            <p className="text-black font-poppins text-lg sm:text-xl text-left sm:ml-3">
              At the SMILE Store, we dream of a world where everyone gets a fair
              chance, where communities come together, and where kindness is a
              way of life. Every time you shop with us, you’re helping make that
              dream come true.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container mx-auto px-6 sm:px-12 flex flex-col sm:flex-row w-full items-center justify-between">
          <div className="w-full mb-6 sm:mb-0">
            <h2 className="text-4xl sm:text-4xl font-bold font-serif text-right text-ultravioletBlue mb-4">
              Let’s Build a Better Community Together
            </h2>
            <p className="text-black font-poppins text-lg sm:text-xl text-right sm:mr-3">
              When you choose a SMILE Store, you’re not just buying groceries—you’re investing in hope, inclusion, and the strength of our neighborhood.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionBuiltOnSmile;
