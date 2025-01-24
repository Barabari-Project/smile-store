"use client"
import { useState } from 'react';
import toast from 'react-hot-toast';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function InvestorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organizationName: '',
    proposedInvestmentAmount: '',
    smileCatalyst: false,
    smileEnabler: false,
    smileDelivery: false,
    compassionateCredit: false,
    motivation: '',
    termsAccepted: false
  });

  const [files, setFiles] = useState({
    businessRegistration: null,
    financialProof: null
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
      organizationName: '',
      proposedInvestmentAmount: '',
      smileCatalyst: false,
      smileEnabler: false,
      smileDelivery: false,
      compassionateCredit: false,
      motivation: '',
      termsAccepted: false
    });
    setFiles({
      businessRegistration: null,
      financialProof: null
    });
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach((input) => {
      input.value = '';
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate at least one interest area is selected
    if (!formData.smileCatalyst && !formData.smileEnabler && 
        !formData.smileDelivery && !formData.compassionateCredit) {
      toast.error('Please select at least one interest area');
      return;
    }

    setIsSubmitting(true);

    const submitPromise = new Promise(async (resolve, reject) => {
      try {
        const formDataToSend = new FormData();

        Object.keys(formData).forEach(key => {
          formDataToSend.append(key, String(formData[key]));
        });

        if (files.businessRegistration) {
          formDataToSend.append('businessRegistration', files.businessRegistration);
        }
        if (files.financialProof) {
          formDataToSend.append('financialProof', files.financialProof);
        }

        const response = await fetch('/api/investor', {
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
            Invest in Inclusive Growth
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
                Organization Name (if applicable)
              </label>
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your organization name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Proposed Investment Amount <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="proposedInvestmentAmount"
                value={formData.proposedInvestmentAmount}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter proposed investment amount"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Areas (Select All That Apply) <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="smileCatalyst"
                    checked={formData.smileCatalyst}
                    onChange={handleInputChange}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span>SMILE Catalyst</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="smileEnabler"
                    checked={formData.smileEnabler}
                    onChange={handleInputChange}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span>SMILE Enabler</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="smileDelivery"
                    checked={formData.smileDelivery}
                    onChange={handleInputChange}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span>SMILE Delivery</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="compassionateCredit"
                    checked={formData.compassionateCredit}
                    onChange={handleInputChange}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span>Compassionate Credit</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Why do you want to invest in SMILE Store? <span className="text-red-500">*</span>
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tell us about your investment motivation"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Registration (if applicable)
              </label>
              <input
                type="file"
                name="businessRegistration"
                onChange={handleFileChange}
                accept="image/*,.pdf"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Upload business registration documents if applicable
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Financial Proof (if applicable)
              </label>
              <input
                type="file"
                name="financialProof"
                onChange={handleFileChange}
                accept="image/*,.pdf"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Upload financial documents if applicable
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