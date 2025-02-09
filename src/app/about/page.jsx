"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Footer from '../components/Footer';
import { useState } from 'react';
const Page = () => {
  const [activeTab, setActiveTab] = useState(0);
  const approachData = [
    {
      title: "Empowerment",
      description: "Enabling persons with disabilities to lead independent lives by offering entrepreneurship and employment opportunities.",
      icon: "👥",
      details: "We believe in creating meaningful opportunities that empower individuals with disabilities to achieve financial independence and personal growth. Through our innovative entrepreneurship programs and inclusive employment practices, we're building a foundation for lasting positive change in their lives."
    },
    {
      title: "Accessibility",
      description: "Establishing stores that cater to underserved communities with essential goods at affordable prices.",
      icon: "🏪",
      details: "Our stores are strategically located and designed to ensure easy access for all community members. We focus on providing essential goods at fair prices, making daily necessities available to everyone, regardless of their economic situation."
    },
    {
      title: "Sustainability",
      description: "Creating scalable, community-focused models that ensure long-term impact.",
      icon: "🌱",
      details: "By developing sustainable business models that benefit both our partners and communities, we ensure long-lasting positive impact. Our approach combines social responsibility with economic viability, creating a framework that can be replicated and scaled."
    },
    {
      title: "Collaboration",
      description: "Partnering with organizations, investors, and individuals to build a stronger, more inclusive ecosystem.",
      icon: "🤝",
      details: "We believe in the power of partnerships to create meaningful change. By collaborating with various stakeholders, from local organizations to international partners, we're building an ecosystem that promotes inclusivity and shared success."
    }
  ];
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">

        <section className="container mx-auto px-4 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-8xl pt-2 font-serif md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            SMILE STORE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-2xl md:text-2xl text-gray-600 mb-8"
          >
            A place where inclusive retail transforms lives and empowers communities.
          </motion.p>
        </section>

        {/* Vision & Mission Section */}
        <section className="bg-light py-16 relative overflow-hidden">
          {/* Floating Background Elements */}
          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 opacity-10"
          >
            <Image
              src="/smile_store_logo.png"
              alt="Background Logo"
              width={200}
              height={200}
              className="opacity-30"
            />
          </motion.div>

          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lightBlue to-secondaryBlue rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-lightBlue/20 relative">
                  <div className="absolute -top-6 left-8 bg-gradient-to-br from-lightBlue to-secondaryBlue p-4 rounded-xl shadow-lg">
                    <span className="text-3xl">👁️</span>
                  </div>
                  <h2 className="text-5xl font-bold text-blue-900 mb-6 font-serif pt-4">Our Vision</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-lightBlue to-secondaryBlue mb-6" />
                  <p className="text-blue-800 text-xl font-poppins leading-relaxed">
                    To build an inclusive world where every individual, regardless of ability or background, has equal access to opportunities, dignity, and a thriving community.
                  </p>
                  <motion.div
                    className="absolute bottom-4 right-4 text-blue-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-mimiRed to-cherryBlossomRed rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-mimiRed/20 relative">
                  <div className="absolute -top-6 left-8 bg-gradient-to-br from-mimiRed to-cherryBlossomRed p-4 rounded-xl shadow-lg">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h2 className="text-5xl font-bold text-red-800 mb-6 font-serif pt-4">Our Mission</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-mimiRed to-cherryBlossomRed mb-6" />
                  <p className="text-red-900 text-xl font-poppins leading-relaxed">
                    To create a network of inclusive retail spaces that empower individuals with disabilities, support marginalized communities, and deliver essential goods with fairness and compassion.
                  </p>
                  <motion.div
                    className="absolute bottom-4 right-4 text-red-500"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Connecting Line */}
            <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-lightBlue via-transparent to-mimiRed transform -translate-y-1/2 hidden md:block" />
          </div>

          {/* Floating Background Elements */}
          <motion.div
            animate={{
              y: [20, -20, 20],
              rotate: [0, -10, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-10 opacity-10"
          >
            <Image
              src="/smile_store_logo.png"
              alt="Background Logo"
              width={200}
              height={200}
              className="opacity-30"
            />
          </motion.div>
        </section>


        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-bold text-center text-ultravioletBlue mb-12 font-serif text-5xl">Our Approach</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Logo */}
              <motion.div
              
                className="flex flex-col items-center justify-center"
              >
                {/* Increased size of logo container */}
                <div className="relative w-full h-96 mb-8">
                  <motion.div
                    
                    className="w-full h-full"
                  >
                    <Image
                      src="/smile_store_logo.png"
                      alt="SMILE Store Logo"
                      fill
                      className="object-contain drop-shadow-xl w-full"
                      priority
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Side - Tabs and Content */}
              <div className="flex flex-col">
                {/* Tabs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {approachData.map((item, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveTab(index)}
                      className={`p-4 rounded-xl transition-all duration-300 ${activeTab === index
                        ? 'bg-gradient-to-r from-primaryBlue to-secondaryBlue text-white shadow-lg'
                        : 'bg-white text-primaryBlue hover:bg-gray-50'
                        }`}
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="text-xl font-semibold">{item.title}</div>
                    </motion.button>
                  ))}
                </div>

                {/* Content */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-3xl font-semibold text-primaryBlue mb-4 font-serif">
                    {approachData[activeTab].title}
                  </h3>
                  <p className="text-xl text-ultravioletBlue font-poppins leading-relaxed">
                    {approachData[activeTab].details}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 bg-gradient-to-b from-gray-50 to-light overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-center text-ultravioletBlue mb-16 font-serif"
            >
              Our Impact
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connecting Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 hidden lg:block" />

              {/* Card 1 - Empowered Lives */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <div className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-full h-72 mb-6 overflow-hidden rounded-lg">
                    <Image
                      src="/impact_images/empowered-life.png"
                      alt="Empowered Lives - People with disabilities working"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-ultravioletBlue mb-4 font-serif text-center">
                    Empowered Lives
                  </h3>
                  <div className="h-px w-16 bg-primaryBlue mb-4 mx-auto opacity-50" />
                  <p className="text-gray-600 font-poppins text-center">
                    Hundreds of individuals with disabilities have found purpose and livelihood through our initiatives.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 - Strengthened Communities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative group"
              >
                <div className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-full h-72 mb-6 overflow-hidden rounded-lg">
                    <Image
                      src="/impact_images/strengthen-community.jpg"
                      alt="Strengthened Communities - Community support activities"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-ultravioletBlue mb-4 font-serif text-center">
                    Strengthened Communities
                  </h3>
                  <div className="h-px w-16 bg-primaryBlue mb-4 mx-auto opacity-50" />
                  <p className="text-gray-600 font-poppins text-center">
                    Affordable groceries and doorstep deliveries have made life easier for elderly and low-income families.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 - Economic Growth */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group"
              >
                <div className="relative  bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-full h-72 mb-6 overflow-hidden rounded-lg">
                    <Image
                      src="/impact_images/economic-growth.png"
                      alt="Economic Growth - Business development"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-ultravioletBlue mb-4 font-serif text-center">
                    Economic Growth
                  </h3>
                  <div className="h-px w-16 bg-primaryBlue mb-4 mx-auto opacity-50" />
                  <p className="text-gray-600 font-poppins text-center">
                    Our business model has transformed local economies by creating sustainable employment opportunities
                  </p>
                </div>
              </motion.div>

              {/* Card 4 - Social Change */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative group"
              >
                <div className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-full h-72 mb-6 overflow-hidden rounded-lg">
                    <Image
                      src="/impact_images/social-change.jpg"
                      alt="Social Change - Community inclusion"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-ultravioletBlue mb-4 font-serif text-center">
                    Social Change
                  </h3>
                  <div className="h-px w-16 bg-primaryBlue mb-4 mx-auto opacity-50" />
                  <p className="text-gray-600 font-poppins text-center">
                    Showcasing the abilities of individuals with disabilities, we are breaking stereotypes and fostering acceptance.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        {/* Team Section */}
        <section className="py-16 bg-gradient-to-b from-light to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-ultravioletBlue mb-12 font-serif">Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/person1.jpg"
                    alt="Sooraj Santhosh"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-ultravioletBlue mb-1 font-poppins">Sooraj Santhosh</h3>
                <p className="text-ultravioletBlue/80 font-poppins">Founder & Managing Partners
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/person2.jpg"
                    alt="Team Member 2"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-ultravioletBlue mb-1 font-poppins">Santhosh Kumar S</h3>
                <p className="text-ultravioletBlue/80 font-poppins">Partners, Operation Heads</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/person3.jpg"
                    alt="Team Member 3"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-ultravioletBlue mb-1 font-poppins">Mike Johnson</h3>
                <p className="text-ultravioletBlue/80 font-poppins">Technology Lead</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/person4.jpg"
                    alt="Team Member 4"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-ultravioletBlue mb-1 font-poppins">Sarah Williams</h3>
                <p className="text-ultravioletBlue/80 font-poppins">Community Manager</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="pt-16 bg-gradient-to-br from-lightBlue to-secondaryBlue">
          <div className="container mx-auto px-4 text-center pb-2">
            <h2 className="text-5xl font-bold text-ultravioletBlue mb-8 font-serif">Join Our Mission</h2>
            <p className="text-lg text-ultravioletBlue/80 mb-8 max-w-2xl mx-auto font-poppins">
              At SMILE Store, every purchase, every partnership, and every story contributes to a greater good. Together, we can create a world where compassion leads and inclusion thrives.

            </p>
            <a href="/partners">
              <button className="bg-primaryBlue text-light px-8 py-3 rounded-full font-semibold hover:bg-secondaryBlue transition-colors font-poppins animate-pulseCustom">
                Partner With Us
              </button>
            </a>

          </div>
          <Footer />
        </section>

      </div>
    </>
  );
};

export default Page;