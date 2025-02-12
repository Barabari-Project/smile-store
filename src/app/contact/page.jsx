"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePhone = (phone) => {
    return phone.length === 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      setError("Phone number must be 10 digits.");
      return;
    }

    setError(null);

    const response = await fetch("https://api.web3forms.com/submit", {
      

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "0bb53059-c819-4750-8ded-3d33c019631e",
        ...formData,
      }),
    });
    if (response.ok) {
      toast.success("Thank you! We’ll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      toast.error("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <section className="text-center mt-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-4xl font-serif md:text-7xl font-bold mb-8 mt-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-xl sm:text-lg md:text-3xl mb-8 text-gray-600"
            >
            Contact us today with any questions, or inquiries. We’d love to hear from you!
            </motion.p>
          </section>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="/contactus.png"
                alt="Contact Us"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 border-primaryBlue border-2 p-6 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2 text-left text-xl" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-2 border-primaryBlue w-full px-4 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-logoGreen"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2 text-left text-xl" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-2 border-primaryBlue w-full px-4 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-logoGreen"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2 text-left text-xl" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-2 border-primaryBlue w-full px-4 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-logoGreen"
                    required
                  />
                  {error && <p className="text-red-600 text-md mt-1">{error}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2 text-left text-xl" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="border-2 border-primaryBlue w-full px-4 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-logoGreen"
                    rows={4}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-cherryBlossomRed text-red-800 px-8 py-2 text-2xl font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
