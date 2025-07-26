import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-24 bg-[#f1f1f1]">
      <div className="max-w-[1310px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Side */}
        <div className="space-y-6">
          <p className="text-[#FF6F61] font-medium text-lg uppercase tracking-wide">
            About Us
          </p>
          <h2 className="text-4xl font-bold text-[#1E3A8A] leading-snug font-raleway">
            Simplify Your Workflow <br />
            with BizBoard
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            BizBoard is your all-in-one platform for managing restaurant and office operations. From real-time data
            to seamless invoice automation — everything is integrated into one elegant dashboard.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Save time, reduce stress, and focus on what matters most: delivering outstanding service and results.
          </p>
          <button className="mt-4 inline-block bg-[#FF6F61] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#ff4e3f] transition">
            Learn More
          </button>
        </div>

        {/* Image Side */}
        <div className="w-full">
         <Image
  src="/image.png"
  alt="About BizBoard"
  width={800} // adjust based on your design
  height={500} // adjust based on your design
  className="w-full h-auto rounded-lg shadow-md"
/>
        </div>
      </div>
    </section>
    
  );
}
