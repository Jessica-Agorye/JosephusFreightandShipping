import Navbar from "../components/Nav";
import HeroSection from "../sections/HeroSection";
import AboutUs from "../sections/AboutUs";
import Services from "../sections/Services";
import WhyChooseUs from "../sections/WhyUs";
import FAQSection from "../sections/FAQ";
import Footer from "../sections/Footer";

const ScreenPage = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <HeroSection />
      <div className="mt-16"></div>
      <AboutUs />
      <div className="mt-16"></div>
      <Services />
      <div className="mt-16"></div>
      <WhyChooseUs />
      <div className="mt-16"></div>
      <FAQSection />
      <Footer />
    </div>
  );
};

export default ScreenPage;
