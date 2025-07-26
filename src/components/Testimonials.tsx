"use client";

import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import avatar from "../../public/avatar.png"; 
import plane from "../../public/Asset 5.svg"; 

const testimonials = [
  {
    name: "Emily R.",
    role: "Restaurant Manager",
    message: "BizBoard saved me 10+ hours weekly on invoicing!",
  },
  {
    name: "Jake T.",
    role: "Office Admin",
    message: "Our team runs smoother since switching to BizBoard.",
  },
  {
    name: "Sara K.",
    role: "Business Owner",
    message: "I finally feel in control of my operations with BizBoard.",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 600,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "160px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <section className="max-w-[1310px] mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left Panel */}
      <div className="lg:sticky top-[100px] self-start space-y-6">
        <p className="text-[#FF6F61] text-lg font-semibold">Testimonials</p>
        <h2 className="text-4xl font-bold text-[#1E3A8A] leading-tight">
          What <span className="text-[#FF6F61]">Our Clients</span> Say
        </h2>
        <p className="text-gray-600 text-lg max-w-md">
          BizBoard helps teams simplify invoices, manage workflows, and focus on what really matters.
        </p>

        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <ArrowLeft className="w-5 h-5 text-[#1E3A8A]" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <ArrowRight className="w-5 h-5 text-[#1E3A8A]" />
          </button>
        </div>

        <Image
          src={plane}
          alt="Paper plane"
          width={220}
          height={200}
          className="mt-12 hidden lg:block"
        />
      </div>

      {/* Right Slider */}
      <div className="-mx-4">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-4">
              <div className="transition-transform duration-300 hover:scale-105">
                <div className="relative p-[2px] rounded-xl bg-gradient-to-tr from-[#1E3A8A] to-[#FF6F61] shadow-lg">
                  <div className="bg-white rounded-xl p-6 h-full flex flex-col items-center text-center space-y-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="rounded-full p-[3px] bg-gradient-to-tr from-[#1E3A8A] to-[#FF6F61]">
                        <Image
                          src={avatar}
                          alt={t.name}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-xl text-[#1E3A8A]">{t.name}</p>
                        <p className="text-sm text-gray-600">{t.role}</p>
                      </div>
                    </div>
                    <blockquote className="relative text-gray-800 text-lg font-medium max-w-xs mx-auto">
                      <Quote className="absolute top-[-20px] left-[-16px] w-6 h-6 text-[#FF6F61] opacity-40" />
                      “{t.message}”
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
