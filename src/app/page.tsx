import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import CTASection from "../components/CTASection";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import FeaturesGrid from "../components/FeaturesGrid";
import ChatWidget from '../components/ChatWidget';
import Faqs from "@/components/Faqs";
import BizOverview from "@/components/BizOverview";
export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <CTASection />
      <Testimonials />
      <BizOverview/>
      <FeaturesGrid />
      {/* Ensure Newsletter is imported and used */}
      <Newsletter /> {/* Add here before Footer */}
      <ChatWidget />
      <Faqs />

    </>
  );
}
