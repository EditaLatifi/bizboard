"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Phone,
  HelpCircle,
  CreditCard,
  Settings,
  ArrowUp,
  Info,
  Mail
} from "lucide-react";
import Image from "next/image";

export default function SupportPage() {
  const topics = [
    {
      title: "Billing & Payments",
      icon: <CreditCard className="w-6 h-6 text-[#FF6F61]" />,
      description: "Invoices, receipts, refunds, and payment settings.",
    },
    {
      title: "Using BizBoard",
      icon: <Settings className="w-6 h-6 text-[#FF6F61]" />,
      description: "Learn how to set up dashboards, manage tasks, and more.",
    },
    {
      title: "Account & Security",
      icon: <HelpCircle className="w-6 h-6 text-[#FF6F61]" />,
      description: "Change password, manage team access, 2FA setup.",
    },
  ];

  const [showChat, setShowChat] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "BizBoard is an AI agent that can answer your support questions and connect you with support experts.",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
    {
      from: "bot",
      text: "Hi there! How can I assist you today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    setShowChat(true);

    const userMessage = {
      from: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botMessage = {
        from: "bot",
        text: `Thanks for your message! Here's some help with: "${input}"`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main className="bg-white text-[#1E3A8A]">
      {!showChat ? (
        <section className="bg-gradient-to-br from-[#f1f5f9] via-white to-[#e0f2ff] py-24 px-6 text-center">
          <div className="mb-8">
            <Image src="/robot-support.png" alt="Support Bot" width={250} height={250} className="mx-auto" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            How can <span className="text-[#1E3A8A]">BizAgent</span> help?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-700 max-w-2xl mx-auto mb-10 border border-gray-300 bg-white rounded-md px-6 py-4 flex items-center justify-center"
          >
            <Info className="w-5 h-5 text-gray-400 mr-2" />
            BizBoard is your support assistant to answer questions and connect you with real humans when needed.
          </motion.p>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Search help articles or topics..."
              className="w-full py-4 px-5 pr-12 rounded-xl shadow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] text-gray-800"
            />
            <button
              onClick={handleSend}
              className="absolute right-3 top-3 bg-[#1E3A8A] hover:bg-[#153174] text-white p-2 rounded-md transition"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </section>
      ) : (
        <section className="bg-gradient-to-br from-[#f1f5f9] via-white to-[#e0f2ff] py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto w-full bg-white shadow-md rounded-xl overflow-hidden">
            <div className="bg-[#1E3A8A] text-white px-6 py-4 font-semibold text-left">
              BizBoard Assistant
            </div>
            <div className="h-[350px] overflow-y-auto px-6 py-4 space-y-4 text-left text-sm">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex flex-col ${msg.from === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`px-4 py-2 rounded-xl ${
                      msg.from === "user"
                        ? "bg-blue-100 text-[#1E3A8A]"
                        : "bg-gray-100 text-gray-800"
                    } max-w-xs`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[11px] text-gray-500 mt-1">{msg.time}</span>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="border-t border-gray-200 p-4 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
              />
              <button
                onClick={handleSend}
                className="bg-[#1E3A8A] text-white p-2 rounded-md hover:bg-[#153174]"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}
      <section className="py-24 px-6 bg-gradient-to-b from-[#f9fafb] to-white">
  <div className="max-w-4xl mx-auto text-center mb-16">
    <h2 className="text-4xl font-bold text-[#1E3A8A]">Your Support Path</h2>
    <p className="text-gray-600 mt-3 text-md">
      Step-by-step help through everything BizBoard can assist with.
    </p>
  </div>

  <div className="max-w-3xl mx-auto space-y-12 relative border-l border-[#E5E7EB]/60 pl-10">
    {topics.map((topic, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.15 }}
        viewport={{ once: true }}
        className="relative group"
      >
        {/* Number marker */}
        <div className="absolute -left-[30px] top-0 w-8 h-8 flex items-center justify-center bg-white text-[#FF6F61] font-bold border-2 border-[#FF6F61] rounded-full shadow-sm">
          {i + 1}
        </div>

        {/* Card content */}
        <div className="bg-white/80 backdrop-blur-sm border border-[#E5E7EB] rounded-2xl shadow-sm p-6 transition-all group-hover:shadow-md group-hover:border-[#FF6F61]/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#FF6F61]/10 p-3 rounded-full ring-2 ring-white ring-offset-2">
              {topic.icon}
            </div>
            <h3 className="text-lg font-semibold text-[#1E3A8A]">{topic.title}</h3>
          </div>
          <ul className="text-gray-600 text-sm leading-relaxed list-disc list-inside space-y-1">
            {topic.description.split(",").map((item, idx) => (
              <li key={idx}>{item.trim()}</li>
            ))}
          </ul>
          <button className="mt-4 text-sm text-[#1E3A8A] font-semibold flex items-center gap-1 hover:underline">
            Learn more <span className="text-[#FF6F61]">→</span>
          </button>
        </div>
      </motion.div>
    ))}
  </div>
</section>





      {/* Contact Options */}
     <section className="py-24 px-6 bg-gradient-to-b from-white to-[#f9fafb]">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-[#1E3A8A] mb-4">Still Need Help?</h2>
    <p className="text-gray-600 text-lg mb-12">
      Reach our team — real humans, ready to help with anything.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Live Chat */}
      <div className="bg-white rounded-2xl shadow-md p-6 transition hover:shadow-xl hover:scale-[1.02] text-left">
        <div className="bg-[#FF6F61]/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
          <MessageSquare className="w-6 h-6 text-[#FF6F61]" />
        </div>
        <h4 className="font-semibold text-lg mb-1 text-[#1E3A8A]">Live Chat</h4>
        <p className="text-gray-600 text-sm mb-3">Get instant help from our support team.</p>
        <button className="text-sm text-[#1E3A8A] font-medium hover:underline">Start Chat</button>
      </div>

      {/* Email */}
      <div className="bg-white rounded-2xl shadow-md p-6 transition hover:shadow-xl hover:scale-[1.02] text-left">
        <div className="bg-[#FF6F61]/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
          <Mail className="w-6 h-6 text-[#FF6F61]" />
        </div>
        <h4 className="font-semibold text-lg mb-1 text-[#1E3A8A]">Email Us</h4>
        <p className="text-gray-600 text-sm mb-3">We will respond within 24 hours.</p>
        <button className="text-sm text-[#1E3A8A] font-medium hover:underline">hello@bizboard.com</button>
      </div>

      {/* Call Booking */}
      <div className="bg-white rounded-2xl shadow-md p-6 transition hover:shadow-xl hover:scale-[1.02] text-left">
        <div className="bg-[#FF6F61]/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
          <Phone className="w-6 h-6 text-[#FF6F61]" />
        </div>
        <h4 className="font-semibold text-lg mb-1 text-[#1E3A8A]">Schedule a Call</h4>
        <p className="text-gray-600 text-sm mb-3">Pick a time that suits you best.</p>
        <button className="text-sm text-[#1E3A8A] font-medium hover:underline">Book a Slot</button>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
