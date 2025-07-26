"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, trimmed]);
    setInput("");
    // 👉 Here you can send the message to a backend / ChatGPT
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
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
