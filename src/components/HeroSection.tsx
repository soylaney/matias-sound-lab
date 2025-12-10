import { useEffect, useState } from "react";
import { ChevronDown, Zap } from "lucide-react";

interface HeroSectionProps {
  onScrollToPortfolio: () => void;
}

const HeroSection = ({ onScrollToPortfolio }: HeroSectionProps) => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Fake visitor counter incrementing
    const randomStart = Math.floor(Math.random() * 10000) + 50000;
    setVisitorCount(randomStart);
    
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative starfield grid-bg overflow-hidden">
      {/* Scanlines overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none" />

      {/* Marquee banner */}
      <div className="absolute top-20 left-0 right-0 overflow-hidden bg-muted/50 py-2 border-y-2 border-border">
        <div className="marquee whitespace-nowrap font-pixel text-lg text-secondary">
          ★ WELCOME TO MATIAS LANEY'S SOUND DESIGN PORTFOLIO ★ PROFESSIONAL AUDIO FOR FILM, TV & ADVERTISING ★ 
          NOW ACCEPTING NEW PROJECTS ★ AWARD-WINNING SOUND DESIGNER ★ 
        </div>
      </div>

      {/* Main content */}
      <div className="text-center px-4 z-10">
        {/* Under construction gif aesthetic */}
        <div className="flex justify-center gap-4 mb-6">
          <Zap className="w-8 h-8 text-neon-yellow animate-pulse" />
          <span className="font-arcade text-[10px] text-neon-yellow blink">NEW!</span>
          <Zap className="w-8 h-8 text-neon-yellow animate-pulse" />
        </div>

        {/* Title */}
        <h1 className="font-arcade text-2xl md:text-4xl lg:text-5xl text-primary neon-text-cyan mb-4 glitch">
          MATIAS LANEY
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[2px] w-16 md:w-32 bg-gradient-to-r from-transparent to-primary" />
          <span className="font-pixel text-2xl md:text-3xl text-secondary neon-text-pink">
            SOUND DESIGNER
          </span>
          <div className="h-[2px] w-16 md:w-32 bg-gradient-to-l from-transparent to-primary" />
        </div>

        {/* Tagline */}
        <p className="font-pixel text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Crafting immersive audio experiences for<br />
          <span className="text-accent neon-text-green">COMMERCIALS</span> • 
          <span className="text-secondary neon-text-pink"> FILMS</span> • 
          <span className="text-primary neon-text-cyan"> DOCUMENTARIES</span> • 
          <span className="text-neon-yellow text-glow"> SOUND ART</span>
        </p>

        {/* CTA Button */}
        <button 
          onClick={onScrollToPortfolio}
          className="retro-button text-lg px-8 py-4 mb-12 animate-float"
        >
          {">>>"} EXPLORE PORTFOLIO {"<<<"}
        </button>

        {/* Visitor counter */}
        <div className="retro-card inline-block">
          <div className="flex items-center gap-2">
            <span className="font-pixel text-sm text-muted-foreground">VISITORS:</span>
            <span className="font-arcade text-xs text-accent neon-text-green">
              {visitorCount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={onScrollToPortfolio}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>

      {/* Corner decorations */}
      <div className="absolute top-24 left-4 font-pixel text-xs text-muted-foreground hidden md:block">
        [BEST VIEWED WITH<br />
        SOUND ON]
      </div>
      <div className="absolute top-24 right-4 font-pixel text-xs text-muted-foreground hidden md:block text-right">
        [EST. 2024]
      </div>
    </section>
  );
};

export default HeroSection;
