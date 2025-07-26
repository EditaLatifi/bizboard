"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AboutUsPage() {
  const team = [
    {
      name: "Elena Novak",
      role: "Co-Founder & Product Lead",
      img: "/founder1.jpg",
    },
    {
      name: "David Horák",
      role: "Co-Founder & Growth",
      img: "/founder2.jpg",
    },
  ];

  const timeline = [
    { year: "2022", event: "BizBoard idea was born." },
    { year: "2023", event: "Beta launched with 50+ users." },
    { year: "2024", event: "Public release + growing fast!" },
  ];

  const testimonials = [
    {
      quote: "BizBoard helped us cut down time managing clients by 60%!",
      name: "Sara L.",
      role: "Freelance Designer",
    },
    {
      quote: "It’s the cleanest, easiest dashboard I’ve used in years.",
      name: "Martin K.",
      role: "Café Owner",
    },
    {
      quote: "Finally something that just works for our small business.",
      name: "Jana P.",
      role: "Studio Manager",
    },
  ];

  return (
    <main className="bg-white text-[#1E3A8A]">
      {/* Hero */}
      <section className="py-40 px-6 bg-gradient-to-b from-white to-[#f9fafb] text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="z-10 relative"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Built for Real Businesses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At BizBoard, we create tools that help small teams scale big ideas — with clarity and confidence.
          </p>
        </motion.div>

        <Sparkles className="absolute text-[#FF6F61]/20 w-40 h-40 top-[-50px] left-[-30px] rotate-45" />
      </section>

      {/* Why Section */}
      <section className="py-20 px-6 bg-[#FF6F61]/[0.05]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Why We Started BizBoard
          </motion.h2>
          <p className="text-gray-700 leading-relaxed text-md">
            We saw countless small business owners overwhelmed with spreadsheets and apps. So we created BizBoard — an all-in-one dashboard that makes business clear, connected, and actionable.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#f9fafb] p-8 rounded-3xl shadow-md border-l-4 border-[#1E3A8A]"
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              Help business owners save time, make smarter decisions, and grow with confidence — without needing a tech team or big budget.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#f9fafb] p-8 rounded-3xl shadow-md border-l-4 border-[#FF6F61]"
          >
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="text-gray-700 space-y-3 list-disc list-inside">
              <li>Simplicity over complexity</li>
              <li>Transparency and trust</li>
              <li>Empower real people</li>
              <li>Move fast, learn faster</li>
            </ul>
          </motion.div>
        </div>
      </section>

    {/* Testimonials Section */}
<section className="bg-[#f9fafb] py-24 px-6 text-center">
  <div className="max-w-4xl mx-auto mb-12">
    <h2 className="text-4xl font-bold text-[#1E3A8A]">What Our Users Say</h2>
    <p className="text-gray-600 mt-3 text-md">
      Real feedback from teams growing with BizBoard.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
    {testimonials.map((t, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        viewport={{ once: true }}
        className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-md hover:shadow-lg text-left"
      >
        <p className="text-[#1E3A8A] text-md leading-relaxed font-medium">
          “{t.quote}”
        </p>
        <div className="mt-6">
          <p className="font-semibold text-[#FF6F61]">{t.name}</p>
          <p className="text-sm text-gray-500">{t.role}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


<section className="bg-[#f9fafb] py-24 px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-[#1E3A8A] mb-16">
      Our Growth Journey
    </h2>

    <div className="relative border-l-2 border-[#1E3A8A]/20 pl-6 space-y-10">
      {timeline.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Dot Marker */}
          <div className="absolute left-[-12px] top-1 w-5 h-5 bg-[#1E3A8A] rounded-full border-4 border-white shadow-md"></div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-lg font-semibold text-[#1E3A8A]">{item.year}</h4>
            <p className="text-gray-700 mt-1">{item.event}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Team Section */}
      <section className="py-24 px-6 bg-white text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Meet the Founders
        </motion.h2>
        <p className="text-gray-600 mb-12">The builders behind BizBoard</p>

        <div className="flex flex-wrap justify-center gap-10">
          {team.map((person, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#f9fafb] rounded-xl shadow-lg p-6 w-60 text-center hover:shadow-2xl transition"
            >
              <Image
                src={person.img}
                alt={person.name}
                width={120}
                height={120}
                className="rounded-full mx-auto"
              />
              <p className="mt-4 font-semibold text-[#1E3A8A]">{person.name}</p>
              <p className="text-sm text-gray-500">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}