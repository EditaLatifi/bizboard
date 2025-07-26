"use client";

import Link from "next/link";
import { Menu, X, Rocket, User } from "lucide-react";
import { useState } from "react";
import LoginMenu from "./LoginMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-md transition">
      <div className="max-w-[1310px] mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-[28px] font-bold tracking-tight">
          <span className="text-[#1E3A8A]">Biz</span>
          <span className="text-[#1E3A8A]">Board</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-[15px] font-medium">
          <Link href="/" className="text-gray-600 hover:text-[#1E3A8A] transition">Home</Link>
          <Link href="/products" className="text-gray-600 hover:text-[#1E3A8A] transition">Products</Link>
          <Link href="/pricing" className="text-gray-600 hover:text-[#1E3A8A] transition">Pricing</Link>
          <Link href="/about" className="text-gray-600 hover:text-[#1E3A8A] transition">About</Link>
          <Link href="/support" className="text-gray-600 hover:text-[#1E3A8A] transition">Support</Link>
          <Link href="/contact" className="text-gray-600 hover:text-[#1E3A8A] transition">Contact</Link>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <LoginMenu />
          <Link
            href="/start-free-trial"
            className="bg-[#FF6F61] text-white px-5 py-2 rounded-full shadow-sm hover:bg-[#ff4c3e] transition font-semibold flex items-center gap-2"
          >
            <Rocket size={16} /> Start Free Trial
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 rounded-full bg-white shadow-sm border border-gray-200 hover:bg-gray-100 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
    {isMobileMenuOpen && (
  <div className="md:hidden px-4 py-6 bg-white backdrop-blur-md border-t border-gray-200 shadow-md rounded-b-xl">
    <nav className="flex flex-col space-y-4 text-[16px] font-medium text-gray-700">
      {["Home", "Products", "Pricing", "About", "Support", "Contact"].map((text) => (
        <Link
          key={text}
          href={`/${text.toLowerCase()}`}
          onClick={() => setIsMobileMenuOpen(false)}
          className="hover:text-[#1E3A8A] transition"
        >
          {text}
        </Link>
      ))}

      <Link
        href="/login"
        className="flex items-center gap-2 text-gray-700 hover:text-[#1E3A8A] transition"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <User size={16} /> Login
      </Link>

      <Link
        href="/start-free-trial"
        className="bg-[#FF6F61] text-white text-center mt-4 px-5 py-2 rounded-full shadow-sm hover:bg-[#ff4c3e] transition font-semibold"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        🚀 Start Free Trial
      </Link>
    </nav>
  </div>
)}

    </header>
  );
}
