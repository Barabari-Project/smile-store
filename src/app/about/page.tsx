"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Footer from '../components/Footer';

const Page = () => {
  const approachData = [
    {
      title: "Empowerment",
      description: "Enabling persons with disabilities to lead independent lives by offering entrepreneurship and employment opportunities."
    },
    {
      title: "Accessibility",
      description: "Establishing stores that cater to underserved communities with essential goods at affordable prices."
    },
    {
      title: "Sustainability",
      description: "Creating scalable, community-focused models that ensure long-term impact."
    },
    {
      title: "Collaboration",
      description: "Partnering with organizations, investors, and individuals to build a stronger, more inclusive ecosystem."
    }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
    <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-8xl font-poppins md:text-8xl font-bold text-ultravioletBlue mb-6">
            About SMILE Store
          </h1>
          <p className="text-lg text-ultravioletBlue/80 mb-2 font-poppins">
            A place where inclusive retail transforms lives and empowers communities.
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-light py-4">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-lightBlue to-secondaryBlue p-8 rounded-2xl"
            >
              <h2 className="text-5xl font-bold text-blue-900 mb-4 font-serif">Our Vision</h2>
              <p className="text-blue-800 text-xl font-poppins">
              To build an inclusive world where every individual, regardless of ability or background, has equal access to opportunities, dignity, and a thriving community.

              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-mimiRed to-cherryBlossomRed p-8 rounded-2xl"
            >
              <h2 className="text-5xl font-bold text-red-800 mb-4 font-serif">Our Mission</h2>
              <p className="text-red-900 text-xl font-poppins">
              To create a network of inclusive retail spaces that empower individuals with disabilities, support marginalized communities, and deliver essential goods with fairness and compassion.

              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-center text-ultravioletBlue mb-12 font-serif text-5xl">Our Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-light p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-3xl font-semibold text-primaryBlue mb-3 font-serif">{item.title}</h3>
                <p className="text-ultravioletBlue text-xl font-poppins">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-light">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-ultravioletBlue mb-12 font-serif">Our Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-lightBlue to-secondaryBlue p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-ultravioletBlue mb-3 font-serif">Empowered Lives</h3>
              <p className="text-ultravioletBlue/80 font-poppins">
                Hundreds of individuals with disabilities have found purpose and livelihood through our initiatives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-mimiRed to-cherryBlossomRed p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-red-800 mb-3 font-serif">Strengthened Communities</h3>
              <p className="text-red-900 font-poppins">
                Affordable groceries and doorstep deliveries have made life easier for elderly and low-income families.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-lightBlue to-secondaryBlue p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-ultravioletBlue mb-3 font-serif">Economic Growth</h3>
              <p className="text-ultravioletBlue/80 font-poppins">
                Inclusive business models have created jobs and supported local economies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-mimiRed to-cherryBlossomRed p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-red-800 mb-3 font-serif">Social Change</h3>
              <p className="text-red-900 font-poppins">
                By showcasing the abilities of individuals with disabilities, we are breaking stereotypes and fostering acceptance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-light to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-ultravioletBlue mb-12 font-poppins">Our Team</h2>
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
          <h2 className="text-3xl font-bold text-ultravioletBlue mb-8 font-serif">Join Our Mission</h2>
          <p className="text-lg text-ultravioletBlue/80 mb-8 max-w-2xl mx-auto font-poppins">
          At SMILE Store, every purchase, every partnership, and every story contributes to a greater good. Together, we can create a world where compassion leads and inclusion thrives.

          </p>
          <button className="bg-primaryBlue text-light px-8 py-3 rounded-full font-semibold hover:bg-secondaryBlue transition-colors font-poppins animate-pulseCustom">
            Partner With Us
          </button>
        </div>
        <Footer/>
      </section>
   
    </div>
    </>
  );
};

export default Page;