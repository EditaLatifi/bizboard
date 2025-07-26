"use client";

import { Laptop, PhoneCall, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";

const pricingTiers = [
  {
    name: "Starter",
    price: "Free",
    features: [
      "1 Dashboard",
      "Basic Reporting",
      "Email Support",
      "Limited Integrations",
    ],
    button: "Get Started",
    color: "#1E3A8A",
  },
  {
    name: "Pro",
    price: "CZK 299/mo",
    features: [
      "Unlimited Dashboards",
      "All Integrations",
      "Smart Automations",
      "Priority Support",
      "Client Access Portals",
    ],
    button: "Start Free Trial",
    color: "#FF6F61",
    highlight: true,
  },
  {
    name: "Business",
    price: "Custom",
    features: [
      "Everything in Pro",
      "Dedicated Manager",
      "Custom Workflows",
      "Team Collaboration Tools",
      "Advanced Permissions",
    ],
    button: "Contact Sales",
    color: "#1E3A8A",
  },
];

const faqs = [
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes — there are no long-term contracts. You can cancel or switch plans whenever you want.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes — all Pro plans start with a 7-day free trial. No credit card required.",
  },
  {
    question: "Is my data secure?",
    answer:
      "100%. We use modern encryption, secure backups, and industry best practices.",
  },
  {
    question: "Can I upgrade later?",
    answer: "Yes — your plan is flexible. Upgrade or downgrade any time.",
  },
];

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b pb-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-[#1E3A8A] font-semibold text-lg"
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <p className="mt-3 text-gray-600 text-sm">{answer}</p>}
    </div>
  );
}

export default function PricingPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-white py-40 px-6 text-center">
        <h1 className="text-5xl font-extrabold text-[#1E3A8A] mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Choose the right plan for your team and grow without limits.
        </p>
      </section>

      {/* Plan Summary Section */}
      <section className="py-10 px-6 bg-[#f9fafb] text-center">
        <div className="max-w-3xl mx-auto mb-4">
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">Find the Perfect Fit</h2>
          <p className="text-gray-600 text-md">
            From solopreneurs to large teams — we have got a plan built for your business needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
  <section className="bg-[#f9fafb] py-4 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
    {pricingTiers.map((tier, index) => (
      <div
        key={index}
        className={`bg-white p-10 rounded-3xl shadow-xl relative overflow-hidden ${
          tier.highlight ? "border-2 border-[#FF6F61] scale-105" : "hover:shadow-2xl"
        } transition`}
      >
        {tier.highlight && (
          <span className="absolute top-5 right-5 bg-[#FF6F61] text-white text-xs px-3 py-1 rounded-full font-medium">
            Most Popular
          </span>
        )}
        <h3 className="text-2xl font-bold mb-2" style={{ color: tier.color }}>
          {tier.name}
        </h3>
        <p className="text-4xl font-extrabold mb-6">{tier.price}</p>

        <div className="space-y-3 text-gray-700 text-sm">
          {tier.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-1 text-[#1E3A8A]" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button
          className="mt-10 w-full py-3 rounded-xl font-semibold text-white transition text-center"
          style={{
            backgroundColor: tier.color,
            boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
          }}
        >
          {tier.button}
        </button>
      </div>
    ))}
  </div>
</section>


      {/* FAQ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1E3A8A] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left">
            {faqs.map((faq, idx) => (
              <Accordion key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-[#f9fafb] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E3A8A]">Next Steps</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[{
            icon: Laptop,
            title: "Start your trial.",
            desc: "Try BizBoard for free. No credit card required. No setup hassle.",
            link: "Try for free",
          }, {
            icon: PhoneCall,
            title: "Talk to an expert.",
            desc: "Let us guide you to the best setup for your business needs.",
            link: "Request a call",
          }, {
            icon: Mail,
            title: "Stay up to date.",
            desc: "Get the latest updates, trends, and product tips straight to your inbox.",
            link: "Sign up for newsletter",
          }].map(({ icon: Icon, title, desc, link }, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left">
              <div className="bg-[#E0ECFF] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <Icon className="text-[#1E3A8A] w-5 h-5" />
              </div>
              <h3 className="text-[#1E3A8A] font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-600 text-sm mb-3">{desc}</p>
              <a href="#" className="text-[#1E3A8A] font-medium underline">{link}</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}