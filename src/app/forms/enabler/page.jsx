"use client"
import { useState } from 'react';
import toast from 'react-hot-toast';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function EnablerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    storeLocation: '',
    spaceAvailable: '',
    hasPreviousExperience: false,
    investmentReadiness: '',
    motivation: '',
    termsAccepted: false
  });

  const [files, setFiles] = useState({
    idProof: null,
    addressProof: null
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files: uploadedFiles } = e.target;
    if (uploadedFiles?.[0]) {
      setFiles(prev => ({
        ...prev,
        [name]: uploadedFiles[0]
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      storeLocation: '',
      spaceAvailable: '',
      hasPreviousExperience: false,
      investmentReadiness: '',
      motivation: '',
      termsAccepted: false
    });
    setFiles({
      idProof: null,
      addressProof: null
    });
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach((input) => {
      input.value = '';
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submitPromise = new Promise(async (resolve, reject) => {
      try {
        const formDataToSend = new FormData();

        Object.keys(formData).forEach(key => {
          formDataToSend.append(key, String(formData[key]));
        });

        if (files.idProof) formDataToSend.append('idProof', files.idProof);
        if (files.addressProof) formDataToSend.append('addressProof', files.addressProof);

        const response = await fetch('/api/enabler', {
          method: 'POST',
          body: formDataToSend,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong');
        }

        resetForm();
        resolve('Application submitted successfully!');
      } catch (err) {
        reject(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsSubmitting(false);
      }
    });

    toast.promise(submitPromise, {
      loading: 'Submitting application...',
      success: (message) => message,
      error: (err) => `Error: ${err}`
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Join the FOCO Retail Revolution
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Proposed Store Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="storeLocation"
                value={formData.storeLocation}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter proposed store location"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Available Space (in sq. ft.) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="spaceAvailable"
                value={formData.spaceAvailable}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter available space"
              />
            </div>

            <div className="flex items-center space-x-2 py-2">
              <input
                type="checkbox"
                name="hasPreviousExperience"
                checked={formData.hasPreviousExperience}
                onChange={handleInputChange}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="text-sm text-gray-700">
                I have previous business experience
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Investment Readiness <span className="text-red-500">*</span>
              </label>
              <select
                name="investmentReadiness"
                value={formData.investmentReadiness}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select investment range</option>
                <option value="Below ₹5 Lakh">Below ₹5 Lakh</option>
                <option value="₹5-10 Lakh">₹5-10 Lakh</option>
                <option value="Above ₹10 Lakh">Above ₹10 Lakh</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                What excites you about SMILE Enabler? <span className="text-red-500">*</span>
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tell us what excites you about this opportunity"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ID Proof <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="idProof"
                onChange={handleFileChange}
                required
                accept="image/*,.pdf"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Upload a valid government ID (Passport, Driver's License, Aadhaar, etc.)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address Proof <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="addressProof"
                onChange={handleFileChange}
                required
                accept="image/*,.pdf"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Upload a recent utility bill or rental agreement
              </p>
            </div>

            <div className="flex items-start space-x-2 py-4">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                required
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="text-sm text-gray-700">
                I agree to the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a> and
                confirm that all information provided is accurate
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-md
              hover:opacity-90 transition-opacity duration-200 font-semibold
              ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}