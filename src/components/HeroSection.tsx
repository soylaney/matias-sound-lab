import { ArrowDownRight } from "lucide-react";

interface HeroSectionProps {
  onScrollToPortfolio: () => void;
}

const HeroSection = ({ onScrollToPortfolio }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden grain">
      {/* Main content */}
      <div className="flex-1 flex flex-col justify-end px-6 lg:px-12 pb-12">
        {/* Giant title */}
        <div className="mb-12">
          <h1 className="font-serif text-[15vw] md:text-[12vw] leading-[0.85] tracking-tight animate-in">
            <span className="block text-foreground">Sound</span>
            <span className="block italic text-stroke">Design</span>
          </h1>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-t border-border pt-8">
          <div className="space-y-4 animate-in delay-2">
            <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              Matias Laney
            </p>
            <p className="font-serif text-2xl md:text-3xl italic text-foreground max-w-md">
              Crafting sonic worlds for those who dare to listen differently.
            </p>
          </div>

          <div className="flex items-end gap-12 animate-in delay-3">
            <div>
              <p className="font-mono text-xs text-muted-foreground mb-2">Based in</p>
              <p className="font-serif text-xl italic">NYC</p>
            </div>
            <div>
              <p className="font-mono text-xs text-muted-foreground mb-2">Since</p>
              <p className="font-serif text-xl italic">2009</p>
            </div>
            <button
              onClick={onScrollToPortfolio}
              className="group flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors"
            >
              <span>Enter</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="marquee border-t border-b border-border py-4 bg-primary text-primary-foreground">
        <div className="marquee-content">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="font-mono text-sm uppercase tracking-widest mx-8 whitespace-nowrap">
              Film • Commercials • Documentary • Sound Art • Installation • Experience Design •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
