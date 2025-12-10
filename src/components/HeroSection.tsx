interface HeroSectionProps {
  onScrollToPortfolio: () => void;
}

const HeroSection = ({ onScrollToPortfolio }: HeroSectionProps) => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      {/* Giant stacked typography */}
      <div className="pt-32 px-4">
        <div className="relative">
          {/* Main title - chaotic stack */}
          <h1 className="font-display text-massive leading-[0.75] tracking-tight">
            <span className="block text-foreground rotate-text" style={{ marginLeft: '-2%' }}>
              SOUND
            </span>
            <span className="block text-primary rotate-text" style={{ animationDelay: '0.1s', marginLeft: '5%' }}>
              IS
            </span>
            <span className="block text-foreground rotate-text" style={{ animationDelay: '0.2s', marginLeft: '-1%' }}>
              NOT
            </span>
            <span className="block text-secondary rotate-text" style={{ animationDelay: '0.3s', marginLeft: '8%' }}>
              NOISE
            </span>
          </h1>

          {/* Overlapping elements */}
          <div className="absolute top-[10%] right-[5%] sticker animate-in delay-4">
            BCN BASED
          </div>
          <div className="absolute top-[35%] right-[15%] stamp text-foreground animate-in delay-5">
            15+ YEARS
          </div>
          <div className="absolute bottom-[20%] left-[60%] bg-accent text-accent-foreground px-6 py-3 font-mono text-sm uppercase rotate-[-6deg] animate-in delay-6">
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
