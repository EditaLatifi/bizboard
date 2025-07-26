"use client";

import React from "react";

const services = [
  {
    title: "Agentforce",
    description: "Build and customize autonomous AI agents to support your employees and customers 24/7.",
    link: "#",
    bgColor: "bg-purple-600",
    Icon: () => (
     <svg
  width="64"
  height="64"
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="title"
  role="img"
>
  <title>SaaS Cloud Gear Icon</title>
  
  <path
    d="M48 34.5H46.5C44.8 34.5 43.3 33.6 42.9 31.9C42.5 32.1 41.9 32.2 41.3 32.2C39.3 32.2 37.7 30.6 37.7 28.6C37.7 26.6 39.3 25 41.3 25C41.7 25 42 25.1 42.3 25.3C42.7 23.8 44 22.7 45.5 22.7C47.4 22.7 48.9 24.2 48.9 26.1C48.9 26.4 48.8 26.7 48.7 27C50 27.3 51 28.5 51 30C51 32 49.5 34.5 48 34.5Z"
    fill="#1E3A8A"
  />
  
  <circle cx="32" cy="38" r="8" stroke="#1E3A8A" stroke-width="2"/>
  
  <line x1="32" y1="30" x2="32" y2="34" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="32" y1="42" x2="32" y2="46" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="24" y1="38" x2="28" y2="38" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="36" y1="38" x2="40" y2="38" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="26.3" y1="31.3" x2="29.1" y2="34.1" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="34.9" y1="42.7" x2="37.7" y2="45.5" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="26.3" y1="44.7" x2="29.1" y2="41.9" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="34.9" y1="33.3" x2="37.7" y2="30.5" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
</svg>

    ),
  },
  {
    title: "Small Business",
    description: "Help small businesses sell smarter and support faster in a single app.",
    link: "#",
    bgColor: "bg-sky-500",
    Icon: () => (
      <svg
  width="64"
  height="64"
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="title"
  role="img"
>
  <title>SaaS Cloud Gear Icon</title>
  
  <path
    d="M48 34.5H46.5C44.8 34.5 43.3 33.6 42.9 31.9C42.5 32.1 41.9 32.2 41.3 32.2C39.3 32.2 37.7 30.6 37.7 28.6C37.7 26.6 39.3 25 41.3 25C41.7 25 42 25.1 42.3 25.3C42.7 23.8 44 22.7 45.5 22.7C47.4 22.7 48.9 24.2 48.9 26.1C48.9 26.4 48.8 26.7 48.7 27C50 27.3 51 28.5 51 30C51 32 49.5 34.5 48 34.5Z"
    fill="#1E3A8A"
  />
  
  <circle cx="32" cy="38" r="8" stroke="#1E3A8A" stroke-width="2"/>
  
  <line x1="32" y1="30" x2="32" y2="34" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="32" y1="42" x2="32" y2="46" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="24" y1="38" x2="28" y2="38" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="36" y1="38" x2="40" y2="38" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="26.3" y1="31.3" x2="29.1" y2="34.1" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="34.9" y1="42.7" x2="37.7" y2="45.5" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="26.3" y1="44.7" x2="29.1" y2="41.9" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="34.9" y1="33.3" x2="37.7" y2="30.5" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
</svg>

    ),
  },
  {
    title: "Sales",
    description: "Connect teams, close more deals, and simplify your sales process.",
    link: "#",
    bgColor: "bg-teal-600",
    Icon: () => (
    <svg
  width="64"
  height="64"
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="title"
  role="img"
>
  <title>SaaS Cloud Gear Icon</title>
  
  <path
    d="M48 34.5H46.5C44.8 34.5 43.3 33.6 42.9 31.9C42.5 32.1 41.9 32.2 41.3 32.2C39.3 32.2 37.7 30.6 37.7 28.6C37.7 26.6 39.3 25 41.3 25C41.7 25 42 25.1 42.3 25.3C42.7 23.8 44 22.7 45.5 22.7C47.4 22.7 48.9 24.2 48.9 26.1C48.9 26.4 48.8 26.7 48.7 27C50 27.3 51 28.5 51 30C51 32 49.5 34.5 48 34.5Z"
    fill="#1E3A8A"
  />
  
  <circle cx="32" cy="38" r="8" stroke="#1E3A8A" stroke-width="2"/>
  
  <line x1="32" y1="30" x2="32" y2="34" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="32" y1="42" x2="32" y2="46" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="24" y1="38" x2="28" y2="38" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="36" y1="38" x2="40" y2="38" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="26.3" y1="31.3" x2="29.1" y2="34.1" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="34.9" y1="42.7" x2="37.7" y2="45.5" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="26.3" y1="44.7" x2="29.1" y2="41.9" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="34.9" y1="33.3" x2="37.7" y2="30.5" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
</svg>

    ),
  },
  {
    title: "Service",
    description: "Manage customer support cases faster across every channel.",
    link: "#",
    bgColor: "bg-pink-600",
    Icon: () => (
     <svg
  width="64"
  height="64"
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="title"
  role="img"
>
  <title>SaaS Cloud Gear Icon</title>
  
  <path
    d="M48 34.5H46.5C44.8 34.5 43.3 33.6 42.9 31.9C42.5 32.1 41.9 32.2 41.3 32.2C39.3 32.2 37.7 30.6 37.7 28.6C37.7 26.6 39.3 25 41.3 25C41.7 25 42 25.1 42.3 25.3C42.7 23.8 44 22.7 45.5 22.7C47.4 22.7 48.9 24.2 48.9 26.1C48.9 26.4 48.8 26.7 48.7 27C50 27.3 51 28.5 51 30C51 32 49.5 34.5 48 34.5Z"
    fill="#1E3A8A"
  />
  
  <circle cx="32" cy="38" r="8" stroke="#1E3A8A" stroke-width="2"/>
  
  <line x1="32" y1="30" x2="32" y2="34" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="32" y1="42" x2="32" y2="46" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="24" y1="38" x2="28" y2="38" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="36" y1="38" x2="40" y2="38" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="26.3" y1="31.3" x2="29.1" y2="34.1" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="34.9" y1="42.7" x2="37.7" y2="45.5" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="26.3" y1="44.7" x2="29.1" y2="41.9" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="34.9" y1="33.3" x2="37.7" y2="30.5" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
</svg>

    ),
  },
  {
    title: "Marketing",
    description: "Easily build, personalize, and optimize campaigns and journeys.",
    link: "#",
    bgColor: "bg-orange-500",
    Icon: () => (
      <svg
  width="64"
  height="64"
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="title"
  role="img"
>
  <title>SaaS Cloud Gear Icon</title>
  
  <path
    d="M48 34.5H46.5C44.8 34.5 43.3 33.6 42.9 31.9C42.5 32.1 41.9 32.2 41.3 32.2C39.3 32.2 37.7 30.6 37.7 28.6C37.7 26.6 39.3 25 41.3 25C41.7 25 42 25.1 42.3 25.3C42.7 23.8 44 22.7 45.5 22.7C47.4 22.7 48.9 24.2 48.9 26.1C48.9 26.4 48.8 26.7 48.7 27C50 27.3 51 28.5 51 30C51 32 49.5 34.5 48 34.5Z"
    fill="#1E3A8A"
  />
  
  <circle cx="32" cy="38" r="8" stroke="#1E3A8A" stroke-width="2"/>
  
  <line x1="32" y1="30" x2="32" y2="34" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="32" y1="42" x2="32" y2="46" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="24" y1="38" x2="28" y2="38" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="36" y1="38" x2="40" y2="38" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="26.3" y1="31.3" x2="29.1" y2="34.1" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="34.9" y1="42.7" x2="37.7" y2="45.5" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="26.3" y1="44.7" x2="29.1" y2="41.9" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="34.9" y1="33.3" x2="37.7" y2="30.5" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
</svg>

    ),
  },
  {
    title: "Commerce",
    description: "Engage buyers online and in-store with B2C and B2B commerce.",
    link: "#",
    bgColor: "bg-green-600",
    Icon: () => (
    <svg
  width="64"
  height="64"
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="title"
  role="img"
>
  <title>SaaS Cloud Gear Icon</title>
  
  <path
    d="M48 34.5H46.5C44.8 34.5 43.3 33.6 42.9 31.9C42.5 32.1 41.9 32.2 41.3 32.2C39.3 32.2 37.7 30.6 37.7 28.6C37.7 26.6 39.3 25 41.3 25C41.7 25 42 25.1 42.3 25.3C42.7 23.8 44 22.7 45.5 22.7C47.4 22.7 48.9 24.2 48.9 26.1C48.9 26.4 48.8 26.7 48.7 27C50 27.3 51 28.5 51 30C51 32 49.5 34.5 48 34.5Z"
    fill="#1E3A8A"
  />
  
  <circle cx="32" cy="38" r="8" stroke="#1E3A8A" stroke-width="2"/>
  
  <line x1="32" y1="30" x2="32" y2="34" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="32" y1="42" x2="32" y2="46" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="24" y1="38" x2="28" y2="38" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="36" y1="38" x2="40" y2="38" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="26.3" y1="31.3" x2="29.1" y2="34.1" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="34.9" y1="42.7" x2="37.7" y2="45.5" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="26.3" y1="44.7" x2="29.1" y2="41.9" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="34.9" y1="33.3" x2="37.7" y2="30.5" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
</svg>

    ),
  },
  {
    title: "Artificial Intelligence",
    description: "Bring predictive and generative AI experiences to any workflow, user, department, or industry.",
    link: "#",
    bgColor: "bg-blue-700",
    Icon: () => (
     <svg
  width="64"
  height="64"
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="title"
  role="img"
>
  <title>SaaS Cloud Gear Icon</title>
  
  <path
    d="M48 34.5H46.5C44.8 34.5 43.3 33.6 42.9 31.9C42.5 32.1 41.9 32.2 41.3 32.2C39.3 32.2 37.7 30.6 37.7 28.6C37.7 26.6 39.3 25 41.3 25C41.7 25 42 25.1 42.3 25.3C42.7 23.8 44 22.7 45.5 22.7C47.4 22.7 48.9 24.2 48.9 26.1C48.9 26.4 48.8 26.7 48.7 27C50 27.3 51 28.5 51 30C51 32 49.5 34.5 48 34.5Z"
    fill="#1E3A8A"
  />
  
  <circle cx="32" cy="38" r="8" stroke="#1E3A8A" stroke-width="2"/>
  
  <line x1="32" y1="30" x2="32" y2="34" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="32" y1="42" x2="32" y2="46" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="24" y1="38" x2="28" y2="38" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="36" y1="38" x2="40" y2="38" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="26.3" y1="31.3" x2="29.1" y2="34.1" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="34.9" y1="42.7" x2="37.7" y2="45.5" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="26.3" y1="44.7" x2="29.1" y2="41.9" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="34.9" y1="33.3" x2="37.7" y2="30.5" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
</svg>

    ),
  },
  {
    title: "Data Cloud",
    description: "Unify all your data to power personalized engagement.",
    link: "#",
    bgColor: "bg-indigo-600",
    Icon: () => (
     <svg
  width="64"
  height="64"
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="title"
  role="img"
>
  <title>SaaS Cloud Gear Icon</title>
  
  <path
    d="M48 34.5H46.5C44.8 34.5 43.3 33.6 42.9 31.9C42.5 32.1 41.9 32.2 41.3 32.2C39.3 32.2 37.7 30.6 37.7 28.6C37.7 26.6 39.3 25 41.3 25C41.7 25 42 25.1 42.3 25.3C42.7 23.8 44 22.7 45.5 22.7C47.4 22.7 48.9 24.2 48.9 26.1C48.9 26.4 48.8 26.7 48.7 27C50 27.3 51 28.5 51 30C51 32 49.5 34.5 48 34.5Z"
    fill="#1E3A8A"
  />
  
  <circle cx="32" cy="38" r="8" stroke="#1E3A8A" stroke-width="2"/>
  
  <line x1="32" y1="30" x2="32" y2="34" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="32" y1="42" x2="32" y2="46" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="24" y1="38" x2="28" y2="38" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="36" y1="38" x2="40" y2="38" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="26.3" y1="31.3" x2="29.1" y2="34.1" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="34.9" y1="42.7" x2="37.7" y2="45.5" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="26.3" y1="44.7" x2="29.1" y2="41.9" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
  <line x1="34.9" y1="33.3" x2="37.7" y2="30.5" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round"/>
</svg>

    ),
  },
];

export default function FeaturesGrid() {
  return (
   <section className="py-20 bg-white max-w-[1310px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-raleway text-[#1E3A8A] leading-tight mb-2">
    Get data, analytics, CRM apps, and agents.<br />
    All on one deeply integrated platform.
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-[1200px] mx-auto">
    {services.map(({ title, description, link, bgColor, Icon }) => (
      <a
        key={title}
        href={link}
        className="relative bg-white rounded-xl shadow-lg p-8 text-left cursor-pointer hover:shadow-2xl transition transform hover:-translate-y-1 overflow-visible"
        aria-label={`Explore ${title}`}
      >
        {/* Corner color shape moved outside content box */}
        <div
          className={`absolute bottom-[-16px] right-[-16px] w-20 h-20 ${bgColor} rounded-tr-xl rounded-bl-xl opacity-30 shadow-lg`}
          aria-hidden="true"
        ></div>

        <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-6">
          <Icon />
        </div>
        <h3 className="text-[#1E3A8A] font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <span className="mt-4 inline-block text-[#1E3A8A] font-medium underline relative z-10">
          Explore {title}
        </span>
      </a>
    ))}
  </div>
</section>

  );
}
