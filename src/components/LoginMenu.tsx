// components/LoginMenu.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Building, Utensils } from 'lucide-react';
import { User } from "lucide-react";

export default function LoginMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-[#1E3A8A] font-semibold hover:underline transition"
      >
           <User className="w-5 h-5 text-[#1E3A8A]" />
 Login <ChevronDown size={18} />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-lg p-4 z-50 border">
          <h4 className="text-lg font-bold mb-3">Login</h4>
          <div className="space-y-3">
            <Link
              href="/login/restaurant"
              className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-[#FF6F61] transition"
            >
              <Utensils size={16} /> Restaurant Login
            </Link>
            <Link
              href="/login/office"
              className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-[#FF6F61] transition"
            >
              <Building size={16} /> Office Login
            </Link>
          </div>

          <hr className="my-4" />

          <p className="text-xs text-gray-500">
            Access your dashboards, staff tools, and reports.
          </p>
        </div>
      )}
    </div>
  );
}
