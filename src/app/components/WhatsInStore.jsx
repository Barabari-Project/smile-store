"use client";
import React from 'react';

const WhatsInStore = () => {
  const cards = [
    {
      color: "bg-red-300",
      image: "/everyday-essentials.png", 
      headingColor : "text-red-800",
      subTextHeadingColor : "text-red-900",
      heading: "Everyday Essentials",
      text: "Quality groceries at prices you can smile about.",
    },
    {
      color: "bg-purple-400",
      image: "/discount.png",
      headingColor : "text-purple-800",
      subTextHeadingColor : "text-purple-900",
      heading: "Special Discounts",
      text: "Thoughtful pricing for seniors, low-income households, and marginalized groups.",
    },
    {
      color: "bg-red-900",
      image: "/doorstep-delivery.png", 
      headingColor : "text-white",
      subTextHeadingColor : "text-white",
      heading: "Doorstep Delivery",
      text: "Making life easier for our neighborhood.",
    },
    {
      color: "bg-orange-400",
      image: "/shop-online.png", 
      headingColor : "text-orange-800",
      subTextHeadingColor : "text-orange-800",
      heading: "Shop Online Anytime",
      text: "With our e-commerce platform, your groceries are just a click away.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 m-10">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl md:text-6xl font-bold font-serif text-center text-gray-800 mb-5">
          What’s in Store for You?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ${card.color}`}
            >
              <img
                src={card.image}
                alt={card.heading}
                className="w-full h-100 object-contain"
              />
              <div className="p-4">
              <h3 className={`text-2xl font-semibold font-serif text-white mb-2 ${card.headingColor}`}>
                  {card.heading}
                </h3>
                <p className = {`text-white text-sm font-poppins font-bold ${card.subTextHeadingColor}`}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsInStore;
