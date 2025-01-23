import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-ultravioletBlue text-white border-t border-gray-300 mt-6">
      <div className="container mx-auto px-6 py-8">
        {/* Company Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold">Smile Store</h2>
            <p className="text-gray-200 mt-2">Building a brighter tomorrow, one smile at a time.</p>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center">
              <FaPhoneAlt className="mr-3 text-gray-200" />
              <div>
                <span className="font-medium">Call Us</span>
                <a href="tel:9567669911" className="block hover:text-blue-300 transition-colors">
                  +91 956 766 9911
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <FaEnvelope className="mr-3 text-gray-200" />
              <div>
                <span className="font-medium">Email Us</span>
                <a 
                  href="mailto:shop@smilegroceries.com" 
                  className="block hover:text-blue-300 transition-colors"
                >
                  shop@smilegroceries.com
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-gray-200" />
              <div>
                <span className="font-medium">Visit Us</span>
                <p className="text-gray-200">Kozhikode, Mayannur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-600 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Smile Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
