"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function CompassionateCreditForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    monthlyIncome: "",
    familySize: "",
    reason: "",
    references: "",
    termsAccepted: false,
  });

  const [files, setFiles] = useState({
    idProof: null,
    addressProof: null,
    incomeCertificate: null,
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
      monthlyIncome: "",
      familySize: "",
      reason: "",
      references: "",
      termsAccepted: false,
    });
    setFiles({
      idProof: null,
      addressProof: null,
      incomeCertificate: null,
    });
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

        Object.keys(formData).forEach((key) => {
          formDataToSend.append(key, String(formData[key]));
        });

        if (files.idProof) formDataToSend.append("idProof", files.idProof);
        if (files.addressProof)
          formDataToSend.append("addressProof", files.addressProof);
        if (files.incomeCertificate)
          formDataToSend.append("incomeCertificate", files.incomeCertificate);

        const response = await fetch("/api/compassionatecredit", {
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
            Supporting Families with Short-Term Credit
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
                Monthly Income Range <span className="text-red-500">*</span>
              </label>
              <select
                name="monthlyIncome"
                value={formData.monthlyIncome}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select income range</option>
                <option value="Below ₹10,000">Below ₹10,000</option>
                <option value="₹10,000–₹20,000">₹10,000–₹20,000</option>
                <option value="Above ₹20,000">Above ₹20,000</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Family Size <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="familySize"
                value={formData.familySize}
                onChange={handleInputChange}
                required
                min="1"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Number of family members"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Why are you seeking Compassionate Credit?{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Please explain your reason for seeking credit"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                References (Optional)
              </label>
              <textarea
                name="references"
                value={formData.references}
                onChange={handleInputChange}
                rows={2}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter reference details (if any)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ID Proof (PDF format) <span className="text-red-500">*</span>
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
                Address Proof (PDF format){" "}
                <span className="text-red-500">*</span>
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Income Certificate (PDF format){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="incomeCertificate"
                onChange={handleFileChange}
                required
                accept="application/pdf"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Upload salary slip, income certificate, or bank statement in PDF
                format.
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
