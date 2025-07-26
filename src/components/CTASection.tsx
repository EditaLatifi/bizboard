import { Rocket, CheckCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-[#1E3A8A] text-white py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#FF6F61]/50 blur-[120px] rounded-full z-0" />

      {/* Radial texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent z-0" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        {/* Label */}
        <p className="text-[#FF6F61] uppercase text-sm font-semibold tracking-wide mb-4">
          Let’s Make It Happen
        </p>

        {/* Icon */}
        <div className="mb-6 inline-flex items-center justify-center bg-white/10 p-4 rounded-full">
          <Rocket className="text-white w-8 h-8 animate-pulse" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight">
          Empower Your Business with a <br></br>Smarter Dashboard
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Discover how BizBoard transforms your daily workflow — from operations to collaboration — in one beautiful place.
        </p>

        {/* Benefits */}
        <div className="flex justify-center gap-4 flex-wrap mb-8 text-sm md:text-base text-white/70">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#22c55e]" />
            Tailored onboarding
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#22c55e]" />
            One-on-one support
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#22c55e]" />
            Built for teams like yours
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-white text-[#1E3A8A] text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition hover:scale-105">
          Talk to Our Team
        </button>

        {/* Microcopy */}
        <p className="text-xs text-white/60 mt-4">
          Get a live walkthrough. We will show you how BizBoard fits your business.
        </p>
      </div>
    </section>
  );
}

