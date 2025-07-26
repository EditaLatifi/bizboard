"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, trimmed]);
    setInput("");
    // 👉 Send to backend here if needed
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    // Show notification after 3s
    const timer = setTimeout(() => setShowNotification(true), 2000);

    // Auto-hide after 7s
    const autoHide = setTimeout(() => setShowNotification(false), 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoHide);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Notification */}
   {/* Notification */}
{showNotification && !isOpen && (
  <div
    className="absolute right-0 bottom-15 bg-white shadow-xl rounded-lg p-4 border border-gray-200 text-sm text-gray-800 max-w-xs w-[260px] animate-fade-slide cursor-pointer"
    onClick={() => {
      toggleChat();
      setShowNotification(false);
    }}
  >
    Want to run smarter? <strong>BizAgent</strong> helps you do more with less.
  </div>
)}


      {/* Chat Box */}
      {isOpen ? (
        <div className="bg-white shadow-2xl rounded-xl w-80 h-96 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-[#1E3A8A] text-white p-4 font-semibold flex justify-between items-center">
            <span>Need Help?</span>
            <button onClick={toggleChat} className="text-sm hover:opacity-75">✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-[#f9fafb] text-sm">
            {messages.length === 0 ? (
              <div className="text-gray-500">
                👋 Hi! You can ask me:
                <ul className="list-disc ml-4 mt-2 space-y-1 text-gray-600">
                  <li>How does BizBoard work?</li>
                  <li>Where can I sign up?</li>
                  <li>Can I change my subscription later?</li>
                  <li>How to contact support?</li>
                </ul>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-2 rounded shadow-sm">
                  {msg}
                </div>
              ))
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t flex items-center gap-2">
            <input
              className="flex-1 border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="bg-[#FF6F61] text-white px-3 py-1.5 rounded hover:bg-[#e65d50] transition"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-[#1E3A8A] text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
          onClick={toggleChat}
          aria-label="Open chat"
        >
          💬
        </button>
      )}
    </div>
  );
}
