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
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default ScreenPage;
