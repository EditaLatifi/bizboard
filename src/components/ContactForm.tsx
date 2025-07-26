"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, MessageCircle, Phone } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (!name || !email || !message) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setSubmitted(true);

    // TODO: send form to backend
    setTimeout(() => {
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <motion.section
      className="py-24 bg-gradient-to-br from-white via-[#f9fafb] to-[#f1f5f9]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[1310px] mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-[#1E3A8A]">Contact Us</h2>
          <p className="text-gray-700 text-lg">
            We’d love to hear from you. Whether you have a question about features, pricing, or just want to say hi.
          </p>
          <div className="space-y-4 text-gray-700 text-md">
            <p className="flex items-center gap-2"><Mail className="w-5 h-5 text-[#1E3A8A]" /> hello@bizboard.com</p>
            <p className="flex items-center gap-2"><Phone className="w-5 h-5 text-[#1E3A8A]" /> +1 (800) 123-4567</p>
            <p className="flex items-center gap-2"><MessageCircle className="w-5 h-5 text-[#1E3A8A]" /> New York, USA</p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl space-y-6 w-full"
        >
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-700 font-medium mb-1">Your Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="John Doe"
                className="pl-10 w-full p-3 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-700 font-medium mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="you@example.com"
                className="pl-10 w-full p-3 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
              />
            </div>
          </div>

          {/* Subject Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Subject</label>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full p-3 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            >
              <option value="">Select a subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Pricing">Pricing</option>
              <option value="Support">Support</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-black font-medium mb-1 text-gray-700">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us a little about what you're looking for..."
              className="w-full p-3 border border-gray-300 text-gray-700 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            />
          </div>

          {/* Error / Success */}
          {error && <p className="text-red-600 text-sm">{error}</p>}
          {submitted && !error && (
            <p className="text-green-600 text-sm">✅ Message sent successfully!</p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#FF6F61] hover:bg-[#ff4c3e] text-white py-3 rounded-md font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
