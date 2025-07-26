"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import heroImage from "../../public/image.png"; // Replace with real image or GIF

const phrases = ["Restaurants", "Offices", "Startups", "Bistros", "Cafes"];

export default function BigHeroFinal() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#F9FAFB] text-[#1E1E1E] flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Callout Bubble */}
      <div className="absolute top-8 left-8 bg-white px-4 py-2 rounded-full shadow text-sm font-medium text-[#1E3A8A] animate-bounce-slow z-10">
        👋 New to BizBoard?
      </div>

      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          {/* Tagline */}
          <p className="text-sm uppercase tracking-wide text-[#1E3A8A] font-medium mb-4">
            Business Management Made Simple
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-clash leading-tight mb-6 tracking-tight">
            The Smarter Dashboard<br />
            for{" "}
            <span className="inline-block animate-fade-in text-[#1E3A8A]">
              {phrases[index]}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10">
            Stop juggling tools.<br />
            Start running your business smarter — <br />
            with one dashboard that does it all.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-[#1E3A8A] text-white px-7 py-3 rounded-lg text-lg font-semibold shadow hover:scale-105 transition">
              Try BizBoard Free
            </button>
            <button className="border border-[#1E3A8A] text-[#1E3A8A] px-7 py-3 rounded-lg text-lg font-semibold hover:bg-[#e0e7ff] transition">
              Watch 60s Demo
            </button>
          </div>
        </div>

        {/* Hero Image */}
       <div className="w-[380px] sm:w-[520px] md:w-[560px] lg:w-[600px] transform hover:scale-105 transition duration-500 ease-in-out">
  <Image
    src={heroImage}
    alt="BizBoard dashboard preview"
    className="rounded-2xl shadow-2xl w-full h-auto"
    priority
  />
</div>
      </div>

      {/* Floating Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#1E3A8A]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-80px] w-[250px] h-[250px] bg-[#FF6F61]/10 rounded-full blur-2xl animate-pulse" />
    </section>
  );
}
