'use client';
export default function Newsletter() {
  return (
    <section className="bg-[#f1f1f1] py-24">
      <div className="max-w-[1310px] mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Left Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-raleway text-[#1E3A8A] leading-tight">
            Stay Ahead with <span className="text-[#FF6F61]">BizBoard</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 font-raleway">
            Get exclusive updates, insights, and smarter tools to run your business better — straight to your inbox.
          </p>
        </div>

        {/* Right Form */}
        <form className="bg-white p-6 md:p-10 rounded-2xl shadow-xl w-full">
          <div className="relative w-full mb-6">
            <input
              type="email"
              id="email"
              required
              className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg text-gray-900 placeholder-transparent focus:outline-none focus:border-[#1E3A8A]"
              placeholder="Email address"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
            >
              Email address
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF6F61] to-[#ff856c] hover:from-[#e65d50] hover:to-[#ff7a6a] transition text-white font-semibold py-3 rounded-lg shadow-md"
          >
            Subscribe Now
          </button>
        </form>
      </div>


     
    </section>
  );
}
