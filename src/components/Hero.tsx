"use client";

import { useState } from "react";
import Image from "next/image";
import loginIllustration from "../../public/image.png"; // Make sure this is correct

export default function HeroLogin() {
  const [activeTab, setActiveTab] = useState<"restaurant" | "office">("restaurant");

  return (
    <section className="relative bg-gradient-to-br from-[#f1f5f9] via-white to-[#f9fafb] py-24 min-h-screen overflow-hidden">
      <div className="max-w-[1310px] mx-auto px-4 relative z-10">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#1E1E1E]">
          Welcome to <span className="text-[#1E3A8A]">BizBoard</span>
        </h1>

        {/* Tab Selection */}
        <div className="flex justify-center gap-6 mb-10">
          {["restaurant", "office"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "restaurant" | "office")}
              className={`px-6 py-2 rounded-full border text-lg font-semibold transition duration-200
                ${
                  activeTab === tab
                    ? tab === "restaurant"
                      ? "bg-[#1E3A8A] text-white border-[#1E3A8A]"
                      : "bg-[#FF6F61] text-white border-[#FF6F61]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {tab === "restaurant" ? "Restaurant Login" : "Office Login"}
            </button>
          ))}
        </div>

        {/* Login Card */}
        <div
          className="bg-white shadow-2xl rounded-xl p-10 max-w-[600px] mx-auto w-full animate-fade-up"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          <form className="space-y-6">
            <h2
              className={`text-2xl font-bold tracking-tight ${
                activeTab === "restaurant" ? "text-[#1E3A8A]" : "text-[#FF6F61]"
              }`}
            >
              {activeTab === "restaurant" ? "Restaurant Login" : "Office Login"}
            </h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            />
            <button
              type="submit"
              className={`w-full py-3 rounded-md text-white font-semibold transition shadow-md
                ${
                  activeTab === "restaurant"
                    ? "bg-[#1E3A8A] hover:bg-[#172d6d]"
                    : "bg-[#FF6F61] hover:bg-[#e95c50]"
                }`}
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Illustration */}
      <div className="absolute right-10 bottom-0 w-[480px] hidden md:block opacity-95">
        <Image
          src={loginIllustration}
          alt="Login Illustration"
          className="object-contain"
        />
      </div>

     
    </section>

    
  );
}
