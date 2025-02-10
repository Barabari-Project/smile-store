"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaMoneyBillWave,
  FaGraduationCap,
  FaUsers,
  FaHeartbeat,
  FaHandHoldingHeart,
  FaBalanceScale,
} from "react-icons/fa";

const CareersPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white px-0 overflow-hidden relative">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl pt-2 font-serif md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Join Us in Spreading Smiles!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-2xl md:text-2xl text-gray-600 mb-8"
          >
            At SMILE Store, we&apos;re more than just a retail chain—we&apos;re
            a movement that empowers individuals, supports communities, and
            creates meaningful change. By joining our team, you become part of a
            family that believes in the power of inclusion, compassion, and
            opportunity.
          </motion.p>
        </section>

        {/* Why Work With Us Section */}
        <div className=" bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-ultravioletBlue mb-12 font-serif">
              Why Work with SMILE Store?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Purpose-Driven Work",
                  description:
                    "Make a difference in the lives of persons with disabilities and underserved communities.",
                },
                {
                  title: "Inclusive Environment",
                  description:
                    "We are committed to building a workplace where everyone feels valued, regardless of ability or background.",
                },
                {
                  title: "Career Growth",
                  description:
                    "From store operations to leadership roles, we provide opportunities for personal and professional development.",
                },
                {
                  title: "Community Impact",
                  description:
                    "Every role contributes to a mission of creating stronger, more inclusive neighborhoods.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-lightBlue to-secondaryBlue p-6 rounded-xl"
                >
                  <h3 className="text-2xl font-semibold text-ultravioletBlue mb-3 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-poppins text-xl">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>



        {/* Current Openings Section */}
        <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-ultravioletBlue mb-12 font-serif">
              Current Openings
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Store Manager",
                  location: "Various locations in Kerala",
                  description:
                    "Oversee store operations, manage inventory, and ensure excellent customer service.",
                  requirements: [
                    "Prior retail management experience preferred",
                    "Strong communication and leadership skills",
                    "Commitment to our mission of inclusivity",
                  ],
                },
                {
                  title: "Sales Associate",
                  location: "SMILE Catalyst & Enabler Stores",
                  description:
                    "Assist customers, manage product shelves, and maintain a welcoming store environment.",
                  requirements: [
                    "No prior experience required—training provided",
                    "Friendly and customer-oriented attitude",
                    "Open to persons with disabilities",
                  ],
                },
                {
                  title: "Delivery Partner",
                  location: "Across Kerala",
                  description:
                    "Deliver groceries to customers, ensuring timely and efficient service.",
                  requirements: [
                    "Must own a two-wheeler or four-wheeler",
                    "Valid driver's license and vehicle insurance",
                    "Punctual and reliable",
                  ],
                },
                {
                  title: "Community Outreach Coordinator",
                  location: "Headquarters, Kerala",
                  description:
                    "Work with local communities to identify needs, organize events, and promote SMILE Store initiatives.",
                  requirements: [
                    "Degree in social work or related field preferred",
                    "Passion for community engagement and inclusion",
                    "Strong organizational and communication skills",
                  ],
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-3xl font-semibold text-ultravioletBlue mb-2 font-serif">
                    {job.title}
                  </h3>
                  <p className="text-secondaryRed mb-4 font-poppins text-xl">
                    {job.location}
                  </p>
                  <p className="text-gray-800 mb-4 font-poppins">
                    {job.description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-black font-poppins">
                      Requirements:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 font-poppins">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
            <center>
            <p className="text-black mb-8 font-poppins font-bold  text-xl pt-10">
              Ready to make a difference? Send your CV to
              careers@smilegroceries.com
            </p>
            <motion.a
              href="mailto:careers@smilegroceries.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="get-in-touch hover:animate-pulseCustom inline-block"
            >
              <span className="flex items-center space-x-2">
                <div className="text-3xl font-serif">Apply Now</div>
                <HiArrowLongRight className="text-xl" />
              </span>
            </motion.a>
            </center>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-ultravioletBlue mb-12 font-serif">
              Benefits of Working at SMILE Store
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Competitive Salary Packages",
                  icon: (
                    <FaMoneyBillWave className="text-4xl text-ultravioletBlue" />
                  ),
                  description:
                    "We offer attractive compensation packages that recognize your value and contribution.",
                },
                {
                  title: "Comprehensive Training Programs",
                  icon: (
                    <FaGraduationCap className="text-4xl text-ultravioletBlue" />
                  ),
                  description:
                    "Continuous learning and development opportunities to enhance your skills.",
                },
                {
                  title: "Inclusive Work Environment",
                  icon: <FaUsers className="text-4xl text-ultravioletBlue" />,
                  description:
                    "A workplace that celebrates diversity and ensures everyone feels welcome.",
                },
                {
                  title: "Health and Wellness Support",
                  icon: (
                    <FaHeartbeat className="text-4xl text-ultravioletBlue" />
                  ),
                  description:
                    "Comprehensive health benefits and wellness programs for your well-being.",
                },
                {
                  title: "Opportunity to Drive Social Change",
                  icon: (
                    <FaHandHoldingHeart className="text-4xl text-ultravioletBlue" />
                  ),
                  description:
                    "Be part of meaningful initiatives that positively impact communities.",
                },
                {
                  title: "Work-Life Balance",
                  icon: (
                    <FaBalanceScale className="text-4xl text-ultravioletBlue" />
                  ),
                  description:
                    "Flexible schedules and policies that respect your personal time.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-lightBlue to-secondaryBlue p-6 rounded-xl"
                >
                  <div className=" text-3xl flex items-center mb-4">
                    {benefit.icon}
                    <h3 className="text-2xl font-serif font-semibold text-gray-900 ml-3">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-800 text-md font-poppins">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Apply Section */}
        {/* <div className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-serif font-bold text-ultravioletBlue mb-8">
              How to Apply?
            </h2>
            <p className="text-ultravioletBlue/80 mb-8 font-poppins">
              Ready to make a difference? Send your CV to
              careers@smilegroceries.com
            </p>
            <motion.a
              href="mailto:careers@smilegroceries.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="get-in-touch hover:animate-pulseCustom inline-block"
            >
              <span className="flex items-center space-x-2">
                <div className="text-3xl font-serif">Apply Now</div>
                <HiArrowLongRight className="text-xl" />
              </span>
            </motion.a>
          </div>
        </div> */}
      </section>
      <Footer />
    </>
  );
};

export default CareersPage;


