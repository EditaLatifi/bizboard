// components/BizOverview.tsx

"use client";

import Link from "next/link";

export default function BizOverview() {
  return (
    <section className="w-full bg-white mt-16">
      <div className="max-w-[1310px] mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: TEXT */}
        <div>
          <p className="text-sm font-semibold text-gray-500 mb-2">
            All-in-one management platform
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
            Run your business <span className="text-[#0ea5e9]">smarter</span> — not harder.
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            BizBoard helps you manage staff, schedules, communication, and tasks —
            all from one unified dashboard. Built for restaurants and modern offices.
          </p>

          <Link
            href="/signup"
            className="mt-4 inline-block bg-[#FF6F61] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#ff4e3f] transition"
          >
            Try for Free
          </Link>
        </div>

        {/* RIGHT: VIDEO */}
        <div className="flex justify-center md:justify-end">
          <video
            src="/bizboard-demo.mp4"
            autoPlay
            muted
            loop
            className="w-full max-w-xl rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
