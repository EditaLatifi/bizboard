export default function CTASection({ target }: { target: "restaurant" | "office" }) {
  const isRestaurant = target === "restaurant";

  const bgColor = isRestaurant
    ? "bg-gradient-to-r from-[#1E3A8A] to-[#1E3A8A]"
    : "bg-gradient-to-r from-[#FF6F61] to-[#FF6F61]";

  const label = isRestaurant ? "Run a Restaurant?" : "Manage an Office?";
  const text = isRestaurant
    ? "Simplify kitchen workflows, track orders, and manage invoices with ease."
    : "Coordinate teams, automate billing, and manage office operations effortlessly.";

  return (
    <section className={`${bgColor} text-white py-20`}>
      <div className="max-w-[1310px] mx-auto px-6 text-center rounded-xl ">
        <h2 className="text-4xl md:text-5xl font-bold font-raleway mb-4">{label}</h2>
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">{text}</p>
        <button className="mt-8 px-8 py-3 bg-white text-[#1E1E1E] font-semibold rounded-full transition hover:bg-gray-100 hover:scale-105 shadow-md">
          Get Started
        </button>
      </div>
    </section>
  );
}
