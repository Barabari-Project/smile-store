import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';  

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-6 bg-ultravioletBlue border-t border-gray-300 mt-6">
      <div className="flex flex-col text-left mb-4 md:mb-0">
        <h2 className="text-2xl font-semibold text-white">Smile Store</h2>
        <p className="text-gray-200 mt-2">Building a brighter tomorrow, one smile at a time.</p>
      </div>
      <div className="flex flex-col text-right md:text-left px-4 md:px-0">
        <p className="text-white font-medium flex items-center mb-2">
          <FaPhoneAlt className="mr-2" /> <strong className='p-1'>Call Us:</strong> 9567669911
        </p>
        <p className="text-white font-medium flex items-center mb-2">
          <FaEnvelope className="mr-2" /> <strong className='p-1'>Email Us:</strong> 
          <a href="mailto:shop@smilegroceries.com" className="text-blue-300 p-1 hover:underline">shop@smilegroceries.com</a>
        </p>
        <p className="text-white font-medium flex items-center">
          <FaMapMarkerAlt className="mr-2" /> <strong className='p-1'>Visit Us:</strong> Kozhikode, Mayannur
        </p>
      </div>
    </footer>
  );
};

export default Footer;
