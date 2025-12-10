import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onScrollToPortfolio: () => void;
}

const HeroSection = ({ onScrollToPortfolio }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative noise-overlay overflow-hidden">
      {/* Floating accent shapes */}
      <div className="floating-accent w-96 h-96 bg-primary top-1/4 -left-48" />
      <div className="floating-accent w-64 h-64 bg-secondary bottom-1/4 -right-32" />
      <div className="floating-accent w-48 h-48 bg-accent top-1/2 right-1/4 opacity-10" />
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      {/* Vertical side text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <p className="vertical-text font-mono text-xs tracking-[0.5em] text-muted-foreground/40 uppercase">
          Sound Design • NYC
        </p>
      </div>

      {/* Year marker */}
      <div className="absolute right-8 bottom-32 hidden lg:block">
        <p className="font-mono text-xs text-muted-foreground/40 tracking-widest">EST. 2015</p>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Artistic pre-title */}
        <p className="font-serif text-lg md:text-xl text-muted-foreground/60 italic mb-4 animate-fade-in">
          The Art of
        </p>
        
        {/* Title */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-4 animate-fade-in tracking-tight leading-none">
          Matias
          <br />
          <span className="text-primary glow-text">Laney</span>
        </h1>
        
        {/* Subtitle with artistic treatment */}
        <div className="relative inline-block mb-12 animate-fade-in stagger-1">
          <p className="font-serif text-2xl md:text-3xl text-foreground/80 italic tracking-wide">
            Sound Designer
          </p>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Description */}
        <p className="font-mono text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-16 leading-relaxed animate-fade-in stagger-2">
          Crafting immersive audio experiences for film, television, advertising, 
          and contemporary art installations.
        </p>

        {/* Categories - artsy layout */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-20 animate-fade-in stagger-3">
          <span className="font-serif text-lg italic text-primary/80 hover:text-primary transition-colors cursor-default">Commercials</span>
          <span className="font-serif text-lg italic text-secondary/80 hover:text-secondary transition-colors cursor-default">Films</span>
          <span className="font-serif text-lg italic text-accent/80 hover:text-accent transition-colors cursor-default">Documentaries</span>
          <span className="font-serif text-lg italic text-foreground/60 hover:text-foreground transition-colors cursor-default">Sound Art</span>
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-500"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
