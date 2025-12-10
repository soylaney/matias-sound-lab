import { useRef } from "react";
import RetroNav from "@/components/RetroNav";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import RetroFooter from "@/components/RetroFooter";

const Index = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      home: homeRef,
      portfolio: portfolioRef,
      about: aboutRef,
      contact: contactRef,
    };

    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <RetroNav onNavigate={scrollToSection} />
      
      <div ref={homeRef}>
        <HeroSection onScrollToPortfolio={() => scrollToSection("portfolio")} />
      </div>
      
      <div ref={portfolioRef}>
        <PortfolioSection />
      </div>
      
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      
      <div ref={contactRef}>
        <ContactSection />
      </div>
      
      <RetroFooter />
    </div>
  );
};

export default Index;
