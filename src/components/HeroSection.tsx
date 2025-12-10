import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onScrollToPortfolio: () => void;
}

const HeroSection = ({ onScrollToPortfolio }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative noise-overlay">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in tracking-tight">
          Matias Laney
        </h1>
        
        {/* Subtitle */}
        <p className="font-mono text-lg md:text-xl text-primary uppercase tracking-[0.3em] mb-8 animate-fade-in stagger-1 glow-text-subtle">
          Sound Designer
        </p>

        {/* Gradient line */}
        <div className="gradient-line max-w-md mx-auto mb-12 animate-fade-in stagger-2" />

        {/* Description */}
        <p className="font-mono text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in stagger-2">
          Crafting immersive audio experiences for film, television, advertising, 
          and contemporary art installations.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16 animate-fade-in stagger-3">
          <span className="font-mono text-sm uppercase tracking-widest text-primary">Commercials</span>
          <span className="font-mono text-sm text-muted-foreground/50">•</span>
          <span className="font-mono text-sm uppercase tracking-widest text-secondary">Films</span>
          <span className="font-mono text-sm text-muted-foreground/50">•</span>
          <span className="font-mono text-sm uppercase tracking-widest text-accent">Documentaries</span>
          <span className="font-mono text-sm text-muted-foreground/50">•</span>
          <span className="font-mono text-sm uppercase tracking-widest text-foreground/70">Sound Art</span>
        </div>

        {/* CTA Button */}
        <button 
          onClick={onScrollToPortfolio}
          className="pro-button animate-fade-in stagger-4"
        >
          View Selected Work
        </button>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={onScrollToPortfolio}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
