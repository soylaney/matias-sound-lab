import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  onScrollToPortfolio: () => void;
}

const HeroSection = ({ onScrollToPortfolio }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Ambient backgrounds */}
      <div className="ambient-bg w-[600px] h-[600px] bg-primary top-0 -right-48" />
      <div className="ambient-bg w-[500px] h-[500px] bg-secondary bottom-0 -left-48" />
      
      {/* Main content */}
      <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          {/* Pre-title */}
          <p className="font-body text-sm text-muted-foreground mb-6 animate-fade-in tracking-wide">
            Sound Designer — New York City
          </p>
          
          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 animate-fade-in stagger-1 leading-[0.95]">
            Crafting sonic
            <br />
            <span className="accent-gradient">experiences</span>
            <br />
            that resonate
          </h1>
          
          {/* Description */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed animate-fade-in stagger-2">
            Award-winning sound design for film, commercials, documentaries, 
            and immersive installations. Collaborating with visionary directors, 
            agencies, and brands worldwide.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-6 animate-fade-in stagger-3">
            <button 
              onClick={onScrollToPortfolio}
              className="btn-primary"
            >
              View Work
            </button>
            <button 
              onClick={onScrollToPortfolio}
              className="btn-outline"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-24 pt-12 border-t border-border/50 animate-fade-in stagger-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            <div>
              <p className="font-display text-4xl font-bold text-foreground mb-1">15+</p>
              <p className="font-body text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-foreground mb-1">200+</p>
              <p className="font-body text-sm text-muted-foreground">Projects</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-foreground mb-1">50+</p>
              <p className="font-body text-sm text-muted-foreground">Awards</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-primary mb-1">NYC</p>
              <p className="font-body text-sm text-muted-foreground">Based</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={onScrollToPortfolio}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-fade-in stagger-5"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
