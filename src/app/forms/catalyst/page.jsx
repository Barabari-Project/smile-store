"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function CatalystForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    age: "",
    disabilityStatus: "Prefer Not to Disclose",
    shopLocation: "",
    hasRetailExperience: false,
    motivation: "",
    preferredContactMethod: "Email",
    termsAccepted: false,
  });

  const [files, setFiles] = useState({
    idProof: null,
    addressProof: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files: uploadedFiles } = e.target;
    if (uploadedFiles?.[0]) {
      setFiles((prev) => ({
        ...prev,
        [name]: uploadedFiles[0],
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      age: "",
      disabilityStatus: "Prefer Not to Disclose",
      shopLocation: "",
      hasRetailExperience: false,
      motivation: "",
      preferredContactMethod: "Email",
      termsAccepted: false,
    });
    setFiles({
      idProof: null,
      addressProof: null,
    });
    // Reset file input fields
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach((input) => {
      input.value = "";
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submitPromise = new Promise(async (resolve, reject) => {
      try {
        const formDataToSend = new FormData();

        // Append all text fields
        Object.keys(formData).forEach((key) => {
          formDataToSend.append(key, String(formData[key]));
        });

        // Append files
        if (files.idProof) formDataToSend.append("idProof", files.idProof);
        if (files.addressProof)
          formDataToSend.append("addressProof", files.addressProof);

        const response = await fetch("/api/catalyst", {
          method: "POST",
          body: formDataToSend,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Something went wrong");
        }

        resetForm();
        resolve("Application submitted successfully!");
      } catch (err) {
        reject(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setIsSubmitting(false);
      }
    });

    toast.promise(submitPromise, {
      loading: "Submitting application...",
      success: (message) => message,
      error: (err) => `Error: ${err}`,
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Empowering Micro Enterpreneurs
          </h2>

          <div className="space-y-4">
            {/* Personal Information */}
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
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your complete address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Age <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                min="18"
                max="100"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your age"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Disability Status (Optional)
              </label>
              <select
                name="disabilityStatus"
                value={formData.disabilityStatus}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Prefer Not to Disclose">
                  Prefer Not to Disclose
                </option>
                <option value="Visual">Visual</option>
                <option value="Physical">Physical</option>
                <option value="Hearing">Hearing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Business Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Proposed Shop Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="shopLocation"
                value={formData.shopLocation}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter proposed shop location"
              />
            </div>

            <div className="flex items-center space-x-2 py-2">
              <input
                type="checkbox"
                name="hasRetailExperience"
                checked={formData.hasRetailExperience}
                onChange={handleInputChange}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="text-sm text-gray-700">
                I have previous retail experience
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Why do you want to join the SMILE Catalyst program?{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tell us about your motivation to join the program"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Contact Method <span className="text-red-500">*</span>
              </label>
              <select
                name="preferredContactMethod"
                value={formData.preferredContactMethod}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
              </select>
            </div>

            {/* Document Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ID Proof (PDF Format)<span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="idProof"
                onChange={handleFileChange}
                required
                accept="application/pdf"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Upload a valid government ID (Passport, Driver's License,
                Aadhaar, etc.) in PDF format.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address Proof (PDF Format) <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="addressProof"
                onChange={handleFileChange}
                required
                accept="application/pdf"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Upload a recent utility bill or rental agreement in PDF format.
              </p>
            </div>

            {/* Terms and Conditions */}
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
                I agree to the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  terms and conditions
                </a>{" "}
                and confirm that all information provided is accurate
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-md
              hover:opacity-90 transition-opacity duration-200 font-semibold
              ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
