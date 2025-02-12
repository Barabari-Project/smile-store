"use client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function PartnersPage() {
  const router = useRouter();

  const getFormPath = (modelTitle: string) => {
    switch (modelTitle) {
      case "SMILE Catalyst":
        return "/forms/catalyst";
      case "SMILE Enabler":
        return "/forms/enabler";
      case "SMILE Delivery":
        return "/forms/deliverypartner";
      case "Compassionate Credit":
        return "/forms/compassionatecredit";
      default:
        return "/forms";
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-4xl pt-2 font-serif md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Join Us to Build an Inclusive Commerce
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl sm:text-lg md:text-3xl text-gray-600 mb-8"
          >
            Empowering Communities, Together
          </motion.p>
        </section>

        {/* Why Partner with Us Section */}
        <section className="container mx-auto px-4 py-2 mb-24">
          <h2 className="text-3xl sm:text-2xl md:text-5xl font-serif font-bold text-center mb-12">
            Why Partner with Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPartnership.map((model, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 
            hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 
            hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50
            border border-transparent hover:border-blue-200"
              >
                <div
                  className="h-12 w-12 mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 
            flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-4xl text-white">
                    {index === 0 && "🧑‍🤝‍🧑"}
                    {index === 1 && "🌱"}
                    {index === 2 && "🤝"}
                    {index === 3 && "🏘️"}
                  </span>
                </div>
                <h3
                  className="text-3xl sm:text-3xl md:text-3xl font-serif font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 
            bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700"
                >
                  {model.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-sm md:text-xl font-poppins mb-4 group-hover:text-gray-700">
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership Models Section */}
        <section className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-2xl md:text-5xl font-serif font-bold text-center mb-12">
            Be Our Partner
          </h2>

          <section className="pt-4 pb-16 relative bg-gradient-to-b from-white to-gray-50">
            <center>
              {" "}
              <img src="/approach-sstore.png"></img>
            </center>
          </section>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {partnershipModels.map((model, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] bg-white"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${model.bgColor} opacity-10`}
                />
                <div className="relative p-6 sm:p-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                    <div className="flex items-start sm:items-center gap-4">
                      <div
                        className={`h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br ${model.color}
                  flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.1)]`}
                      >
                        <span className="text-xl sm:text-3xl text-white">
                          {model.icon}
                        </span>
                      </div>
                      <h3
                        className={`text-3xl sm:text-2xl md:text-4xl font-serif font-bold bg-gradient-to-r ${model.color}
                  bg-clip-text text-transparent`}
                      >
                        {model.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => router.push(getFormPath(model.title))}
                      className={`px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r ${model.color} text-white 
                  text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity duration-300 shadow-md`}
                    >
                      {model.title === "SMILE Catalyst" && "Become a Catalyst"}
                      {model.title === "SMILE Enabler" && "Become an Enabler"}
                      {model.title === "SMILE Delivery" && "Join Delivery"}
                      {model.title === "Compassionate Credit" &&
                        "Apply for Credit"}
                    </button>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-md font-poppins mb-6">
                    {model.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span
                        className={`text-xl sm:text-2xl mr-2 bg-gradient-to-r ${model.color} bg-clip-text text-transparent`}
                      >
                        ⚡
                      </span>
                      <div>
                        <p className="font-semibold font-serif text-lg sm:text-2xl mb-1">
                          How it works
                        </p>
                        <p className="text-sm sm:text-md font-poppins text-gray-600">
                          {model.howItWorks}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <span
                        className={`text-xl sm:text-2xl mr-2 bg-gradient-to-r ${model.color} bg-clip-text text-transparent`}
                      >
                        🎯
                      </span>
                      <div>
                        <p className="font-semibold font-serif text-lg sm:text-2xl mb-1">
                          Impact
                        </p>
                        <p className="text-sm sm:text-md font-poppins text-gray-600">
                          {model.impact}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <span
                        className={`text-xl sm:text-2xl mr-2 bg-gradient-to-r ${model.color} bg-clip-text text-transparent`}
                      >
                        🤝
                      </span>
                      <div>
                        <p className="font-semibold font-serif text-lg sm:text-2xl mb-1">
                          Partner Opportunity
                        </p>
                        <p className="text-sm sm:text-md font-poppins text-gray-600">
                          {model.opportunity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New Investor Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-5xl font-serif font-bold mb-6">
            Invest in Inclusive Growth
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join us in building a more inclusive future. Invest in SMILE
            Store&apos;s mission to create sustainable impact through our
            innovative partnership models.
          </p>
          <button
            onClick={() => router.push("/forms/investor")}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl
            rounded-full hover:opacity-90 duration-300 shadow-lg
            transform hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            Become an Investor
          </button>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center">
              <span className="text-2xl mr-2">💡</span>
              <span>Multiple Investment Options</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">📈</span>
              <span>Sustainable Returns</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🌍</span>
              <span>Social Impact</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Footer />
      </main>
    </>
  );
}

const whyPartnership = [
  {
    title: "Inclusive Vision",
    description:
      "Be a part of a mission to empower persons with disabilities and marginalized communities.",
  },
  {
    title: "Sustainable Growth",
    description:
      "Combine social impact with business sustainability through proven models.",
  },
  {
    title: "Shared Values",
    description:
      "Align with a brand that prioritizes ethics, accessibility, and empowerment.",
  },
  {
    title: "Community Impact",
    description:
      "Directly contribute to building stronger, more inclusive neighborhoods.",
  },
];

const partnershipModels = [
  {
    title: "SMILE Catalyst",
    description:
      "Empowering individuals with disabilities to become entrepreneurs, the Catalyst Model supports micro-shops operated by individuals within their local communities.",
    howItWorks: "Operates on a subscription-based model",
    impact:
      "Promotes entrepreneurship among persons with disabilities, providing them a stable livelihood while serving essential groceries to their neighborhoods",
    opportunity:
      "Enable these micro-entrepreneurs by offering support through funding, logistics, and mentorship",
    icon: "🚀",
    color: "from-pink-500 to-rose-600",
    hoverColor: "group-hover:from-pink-600 group-hover:to-rose-700",
    bgColor: "from-pink-50 to-rose-50",
  },
  {
    title: "SMILE Enabler",
    description:
      "Designed to bring inclusive retail spaces to every neighborhood, the Enabler Model focuses on small stores operating in 300–400 sq. ft. spaces.",
    howItWorks:
      "Runs on a Franchise-Owned, Company-Operated (FOCO) model to ensure quality and consistency",
    impact:
      "Enhances accessibility for marginalized communities and creates a supportive ecosystem for local customers",
    opportunity:
      "Invest in creating inclusive retail outlets while we manage operations and drive impactful community engagement",
    icon: "🏪",
    color: "from-amber-500 to-yellow-600",
    hoverColor: "group-hover:from-amber-600 group-hover:to-yellow-700",
    bgColor: "from-amber-50 to-yellow-50",
  },
  {
    title: "SMILE Delivery",
    description:
      "Empowering individuals to bridge the last-mile delivery gap, the SMILE Delivery Model is a key enabler of our promise to serve everyone.",
    howItWorks:
      "Delivery partners facilitate timely and efficient grocery deliveries to elderly, differently-abled individuals, and low-income families",
    impact:
      "Creates job opportunities and ensures essential groceries reach underserved households",
    opportunity:
      "Help us expand our delivery network and create more jobs for underrepresented individuals",
    icon: "🚚",
    color: "from-green-500 to-emerald-600",
    hoverColor: "group-hover:from-green-600 group-hover:to-emerald-700",
    bgColor: "from-green-50 to-emerald-50",
  },
  {
    title: "Compassionate Credit",
    description:
      "Supporting families during tough times, the Compassionate Credit Program offers short-term credit solutions for grocery purchases.",
    howItWorks:
      "Provides financial assistance to customers, enabling them to meet their essential needs with dignity",
    impact:
      "Supports low-income households in times of need while fostering a sustainable repayment culture",
    opportunity:
      "Collaborate to scale this initiative through funding and innovative credit solutions",
    icon: "💳",
    color: "from-red-500 to-orange-600",
    hoverColor: "group-hover:from-red-600 group-hover:to-orange-700",
    bgColor: "from-red-50 to-orange-50",
  },
];
