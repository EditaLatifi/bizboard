"use client";
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
          <div className="md:w-1/2">
            <Image src="/image.png" alt="BizBoard Dashboard" className="rounded-xl shadow-xl" />
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
        <Image src="/image.png" alt="Self-Service" className="rounded-lg mb-4 w-full" />
        <h3 className="text-[#1E3A8A] font-bold text-xl mb-2">BizBoard Self-Service</h3>
        <p className="text-gray-700 text-sm mb-4">
          Boost resolution rates and reduce costs using smart AI help centers, 24/7 assistants, and automation flows.
        </p>
        <a href="#" className="text-[#1E3A8A] font-medium underline">Learn more</a>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-left">
        <Image src="/image.png" alt="Field Service" className="rounded-lg mb-4 w-full" />
        <h3 className="text-[#1E3A8A] font-bold text-xl mb-2">Field Team Support</h3>
        <p className="text-gray-700 text-sm mb-4">
          Manage field operations, dispatch tasks, and sync updates in real time with built-in dashboards and templates.
        </p>
        <a href="#" className="text-[#1E3A8A] font-medium underline">Learn more</a>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-left">
        <Image src="/image.png" alt="AI Assistant" className="rounded-lg mb-4 w-full" />
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
      <section className="bg-[#1E3A8A] py-20 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Simplify Your Business?</h2>
        <p className="text-lg mb-6">Start using BizBoard today. No setup fees. No credit card required.</p>
        <button className="bg-[#FF6F61] hover:bg-[#e65d50] px-6 py-3 rounded-lg shadow transition">
          Start Free Trial
        </button>
      </section>
    </main>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="bg-[#f9fafb] p-6 rounded-xl shadow hover:shadow-md transition text-left">
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-[#1E3A8A]">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{text}</p>
    </div>
  );
}

// Use Case Component
function UseCase({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
      <div className="text-3xl mb-2">{emoji}</div>
      <h4 className="font-semibold text-[#1E3A8A]">{title}</h4>
      <p className="text-gray-600 text-sm mt-1">{desc}</p>
    </div>
  );
}
