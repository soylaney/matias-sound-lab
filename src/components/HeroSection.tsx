interface HeroSectionProps {
  onScrollToPortfolio: () => void;
}

const HeroSection = ({ onScrollToPortfolio }: HeroSectionProps) => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background flex flex-col">
      {/* Giant stacked typography */}
      <div className="flex-1 flex items-center pt-20 sm:pt-24 md:pt-28 px-4">
        <div className="relative w-full">
          {/* Main title - responsive scaling */}
          <h1 className="font-display text-[12vw] sm:text-[11vw] md:text-[10vw] leading-[0.85] tracking-tight">
            <span className="block text-foreground rotate-text" style={{ marginLeft: '-1%' }}>
              SOUND
            </span>
            <span className="block text-primary rotate-text" style={{ animationDelay: '0.1s', marginLeft: '3%' }}>
              IS
            </span>
            <span className="block text-secondary rotate-text" style={{ animationDelay: '0.2s', marginLeft: '0%' }}>
              EVERY
            </span>
            <span className="block text-foreground rotate-text" style={{ animationDelay: '0.3s', marginLeft: '5%' }}>
              THING
            </span>
          </h1>

          {/* Overlapping elements */}
          <div className="absolute top-[5%] right-[2%] sm:top-[10%] sm:right-[5%] sticker text-xs sm:text-sm animate-in delay-4">
            BCN BASED
          </div>
          <div className="absolute bottom-[10%] right-[5%] sm:bottom-[20%] sm:left-[60%] bg-accent text-accent-foreground px-3 py-2 sm:px-6 sm:py-3 font-mono text-xs sm:text-sm uppercase rotate-[-6deg] animate-in delay-6">
            200+ Projects
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Info bar */}
        <div className="bg-background border-t-4 border-foreground px-4 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <p className="font-mono text-sm uppercase">
              <span className="text-muted-foreground">Designer:</span> Matias Laney
            </p>
            <p className="font-mono text-sm uppercase">
              <span className="text-muted-foreground">Location:</span> Barcelona
            </p>
          </div>
          <button
            onClick={onScrollToPortfolio}
            className="border-4 border-foreground bg-primary text-primary-foreground px-8 py-4 font-display text-2xl uppercase brutal-hover"
          >
            SEE THE WORK →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
