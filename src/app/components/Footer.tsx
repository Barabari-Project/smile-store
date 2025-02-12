import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-ultravioletBlue text-white border-t border-gray-500 mt-6">
      <div className="container mx-auto px-6 py-8">
        {/* Company Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col">
            <div className="flex items-center">
              {/* <img src="/smile_store_logo.png" alt="Smile Store Logo" className="w-10 h-10 mr-2" /> */}
              <h2 className="text-2xl font-semibold">Smile Store</h2>
            </div>
            <p className="text-gray-100 mt-2">
              Building a brighter tomorrow, one smile at a time.
            </p>
            <div className="flex items-center mt-1">
              <p className="text-gray-100">
                Incubated by NSRCEL, IIM Bengaluru &nbsp;
              </p>
              <img
                src="/IIMLogo.png"
                alt="IIM Logo"
                className="w-13 h-8 mr-2"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center">
              <FaPhoneAlt className="mr-3 text-4xl text-gray-100" />
              <div>
                <span className="font-medium">Call Us</span>
                <a
                  href="tel:9567669911"
                  className="block hover:text-blue-200 transition-colors"
                >
                  +91 956 766 9911
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <FaEnvelope className="mr-3 text-5xl text-gray-100" />
              <div>
                <span className="font-medium">Email Us</span>
                <a
                  href="mailto:shop@smilegroceries.com"
                  className="block hover:text-blue-200 transition-colors"
                >
                  shop@smilegroceries.com
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-4xl text-gray-100" />
              <div>
                <span className="font-medium">Visit Us</span>
                <p className="text-gray-100">Kozhikode, Mayannur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.instagram.com/smilegroceries/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-blue-200 transition-colors"
          >
            <FaInstagram size={36} />
          </a>
          <a
            href="https://www.facebook.com/people/Smilegroceries/61573051232624/?sk=mentions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-blue-200 transition-colors"
          >
            <FaFacebook size={36} />
          </a>
          <a
            href="https://www.linkedin.com/company/smile-groceries/about/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-blue-200 transition-colors"
          >
            <FaLinkedin size={36} />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-900 pt-6 text-center text-gray-200">
          <p>&copy; 2025 Smile Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
