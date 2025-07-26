import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1E3A8A] text-white ">
      <div className="max-w-[1310px] mx-auto px-4 py-16 grid md:grid-cols-3 gap-10">
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-tight">BizBoard</h2>
          <p className="text-sm text-gray-300 max-w-xs">
            Your all-in-one digital manager for restaurants and office teams.
            Automate, manage, and grow — stress-free.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-[#FF6F61] transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-[#FF6F61] transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-[#FF6F61] transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-[#FF6F61] transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> hello@bizboard.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +1 (800) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> New York, USA
            </li>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div>
       <form
  action="https://gmail.us5.list-manage.com/subscribe/post?u=2d35f4b9207a557963ab68822&amp;id=8632af5f59&amp;f_id=002da6e0f0"
  method="POST"
  target="_blank"
  noValidate
  className="space-y-3"
>
  <label htmlFor="mce-EMAIL" className="block text-white text-sm font-medium">
    Email Address <span className="text-red-500">*</span>
  </label>
  <input
    type="email"
    name="EMAIL"
    id="mce-EMAIL"
    required
    placeholder="Your email"
    className="w-full px-4 py-2 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6F61]"
  />

  {/* Hidden field for bots */}
  <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
    <input
      type="text"
      name="b_2d35f4b9207a557963ab68822_8632af5f59"
      tabIndex={-1}
      defaultValue=""
    />
  </div>

  <button
    type="submit"
    className="w-full bg-[#FF6F61] hover:bg-[#e55a50] text-white py-2 rounded-md font-medium transition"
  >
    Subscribe
  </button>
</form>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-300 py-5 border-t border-white/20">
        &copy; {new Date().getFullYear()} BizBoard. All rights reserved.
      </div>
    </footer>
  );
}
