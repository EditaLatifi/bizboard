"use client";
import { Rocket, CheckCircle } from "lucide-react";

import Image from "next/image";
export default function ProductsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#E0ECFF] to-[#F9FAFB] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] leading-tight">
              All-in-One Business Platform
            </h1>
            <p className="text-gray-700 text-lg mt-4">
              BizBoard helps you run smarter: track insights, automate workflows, and grow faster — all in one place.
            </p>
            <button className="mt-6 bg-[#FF6F61] hover:bg-[#e65d50] text-white px-6 py-3 rounded-lg shadow transition">
              Get Started Free
            </button>
          </div>
        <div className="relative w-[600px] h-[400px]">
  <Image
    src="/image.png"
    alt="..."
    fill
    className="object-cover rounded-xl"
  />
</div>

        </div>
      </section>

<section className="py-20 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl text-center font-bold text-[#1E3A8A] mb-8">
      Why BizBoard works smarter.
    </h2>

    <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#ccc] scrollbar-track-transparent">
      {/* Card 1 */}
      <div className="min-w-[280px] max-w-sm bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#FF6F61] rounded-t-2xl"></div>
        <h3 className="text-[#1E3A8A] font-semibold text-lg mt-4 mb-2">Self-Service Experience</h3>
        <p className="text-sm text-gray-600 mb-4">
          Drive efficiency and improve experiences by empowering customers to find answers on their own terms.
        </p>
        <a href="#" className="text-[#1E3A8A] font-medium underline">Learn more</a>
      </div>

      {/* Card 2 */}
      <div className="min-w-[280px] max-w-sm bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#FF6F61] rounded-t-2xl"></div>
        <h3 className="text-[#1E3A8A] font-semibold text-lg mt-4 mb-2">Digital Engagement</h3>
        <p className="text-sm text-gray-600 mb-4">
          Deliver personalized experiences across every service channel to increase customer satisfaction.
        </p>
        <a href="#" className="text-[#1E3A8A] font-medium underline">Learn more</a>
      </div>

      {/* Card 3 */}
      <div className="min-w-[280px] max-w-sm bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#FF6F61] rounded-t-2xl"></div>
        <h3 className="text-[#1E3A8A] font-semibold text-lg mt-4 mb-2">Voice</h3>
        <p className="text-sm text-gray-600 mb-4">
          Speed up call resolution and increase customer satisfaction by uniting cloud telephony and CRM.
        </p>
        <a href="#" className="text-[#1E3A8A] font-medium underline">Learn more</a>
      </div>

      {/* Add more cards here if needed */}
    </div>
  </div>
</section>

<section id="discover" className="py-20 bg-[#F9FAFB]">
  <div className="max-w-6xl mx-auto">
    {/* Tab Header with Color Strip */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-[#1E3A8A]">Discover what’s new in BizBoard</h2>
      <div className="flex justify-center mt-6">
        <div className="inline-flex rounded-full px-4 py-1 space-x-6 text-black text-[16px] font-medium">
          <span className="border-b-2 border-black pb-1">Innovation</span>
          <span className="hover:opacity-90 cursor-pointer">Content</span>
          <span className="hover:opacity-90 cursor-pointer">Events</span>
          <span className="hover:opacity-90 cursor-pointer">Reports</span>
        </div>
      </div>
    </div>

    {/* Card Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-left">
<Image
  src="/image.png"
  alt="Field Service"
  width={600} // ⬅️ adjust as needed
  height={400} // ⬅️ adjust as needed
  className="rounded-lg mb-4 w-full h-auto"
/>
        <h3 className="text-[#1E3A8A] font-bold text-xl mb-2">BizBoard Self-Service</h3>
        <p className="text-gray-700 text-sm mb-4">
          Boost resolution rates and reduce costs using smart AI help centers, 24/7 assistants, and automation flows.
        </p>
        <a href="#" className="text-[#1E3A8A] font-medium underline">Learn more</a>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-left">
<Image
  src="/image.png"
  alt="Field Service"
  width={600} // ⬅️ adjust as needed
  height={400} // ⬅️ adjust as needed
  className="rounded-lg mb-4 w-full h-auto"
/>
        <h3 className="text-[#1E3A8A] font-bold text-xl mb-2">Field Team Support</h3>
        <p className="text-gray-700 text-sm mb-4">
          Manage field operations, dispatch tasks, and sync updates in real time with built-in dashboards and templates.
        </p>
        <a href="#" className="text-[#1E3A8A] font-medium underline">Learn more</a>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-left">
<Image
  src="/image.png"
  alt="Field Service"
  width={600} // ⬅️ adjust as needed
  height={400} // ⬅️ adjust as needed
  className="rounded-lg mb-4 w-full h-auto"
/>
        <h3 className="text-[#1E3A8A] font-bold text-xl mb-2">AI Assistant for Service</h3>
        <p className="text-gray-700 text-sm mb-4">
          Use AI to handle support tickets, respond to common questions, and deliver personalized help backed by CRM data.
        </p>
        <a href="#" className="text-[#1E3A8A] font-medium underline">Learn more</a>
      </div>
    </div>
  </div>
</section>

      {/* Use Cases */}
     <section className="py-28 px-6 bg-gradient-to-b from-[#f9fafb] to-white">
  <div className="max-w-4xl mx-auto text-center mb-20">
    <h2 className="text-4xl font-bold text-[#1E3A8A]">
      Made for All Business Types
    </h2>
    <p className="text-gray-600 text-lg mt-6">
      BizBoard adapts to every industry, role, and team — without the complexity.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
    {/* Card 1 */}
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
      <div className="flex items-center justify-center mb-5">
        <div className="w-16 h-16 text-3xl rounded-full bg-[#FF6F61] text-white flex items-center justify-center shadow-md">
          🛠️
        </div>
      </div>
      <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Service Providers</h3>
      <p className="text-gray-600 text-sm">
        Schedule jobs, send invoices, and automate admin work — all in one place.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
      <div className="flex items-center justify-center mb-5">
        <div className="w-16 h-16 text-3xl rounded-full bg-[#FF6F61] text-white flex items-center justify-center shadow-md">
          🎨
        </div>
      </div>
      <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Agencies & Freelancers</h3>
      <p className="text-gray-600 text-sm">
        Keep track of clients, deadlines, and feedback without spreadsheets.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
      <div className="flex items-center justify-center mb-5">
        <div className="w-16 h-16 text-3xl rounded-full bg-[#FF6F61] text-white flex items-center justify-center shadow-md">
          🛒
        </div>
      </div>
      <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Retail & Ecommerce</h3>
      <p className="text-gray-600 text-sm">
        Manage stock, orders, and performance with smart dashboards and tools.
      </p>
    </div>
  </div>
</section>


      {/* Final CTA */}
       <section className="relative bg-[#1E3A8A] text-white py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#FF6F61]/50 blur-[120px] rounded-full z-0" />

      {/* Radial texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent z-0" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        {/* Label */}
        <p className="text-[#FF6F61] uppercase text-sm font-semibold tracking-wide mb-4">
          Let’s Make It Happen
        </p>

        {/* Icon */}
        <div className="mb-6 inline-flex items-center justify-center bg-white/10 p-4 rounded-full">
          <Rocket className="text-white w-8 h-8 animate-pulse" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight">
          Empower Your Business with a <br></br>Smarter Dashboard
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Discover how BizBoard transforms your daily workflow — from operations to collaboration — in one beautiful place.
        </p>

        {/* Benefits */}
        <div className="flex justify-center gap-4 flex-wrap mb-8 text-sm md:text-base text-white/70">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#22c55e]" />
            Tailored onboarding
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#22c55e]" />
            One-on-one support
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#22c55e]" />
            Built for teams like yours
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-white text-[#1E3A8A] text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition hover:scale-105">
          Talk to Our Team
        </button>

        {/* Microcopy */}
        <p className="text-xs text-white/60 mt-4">
          Get a live walkthrough. We'll show you how BizBoard fits your business.
        </p>
      </div>
    </section>
    </main>
  );
}

