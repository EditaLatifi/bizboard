'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What is BizBoard?",
    answer: "BizBoard is a smart platform that delivers business tools, insights, and updates to help you run and grow your business efficiently."
  },
  {
    question: "How often will I receive updates?",
    answer: "You'll get updates once a week — no spam, just valuable tips, tools, and news."
  },
  {
    question: "Can I unsubscribe anytime?",
    answer: "Yes, you can unsubscribe with a single click at the bottom of any email we send."
  },
  {
    question: "Is my email address safe?",
    answer: "Absolutely. We never share your data and follow strict privacy practices."
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] font-raleway mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-10 font-raleway text-lg">
          Everything you need to know about our newsletter and BizBoard platform.
        </p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 shadow-sm transition duration-200 hover:shadow-md bg-[#f9f9f9]"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between w-full text-left text-[#1E3A8A] font-semibold text-lg"
              >
                {faq.question}
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-700 text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
