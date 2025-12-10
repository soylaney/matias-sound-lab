import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onScrollToPortfolio: () => void;
}

const HeroSection = ({ onScrollToPortfolio }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-24 scanlines">
      {/* Main content window */}
      <div className="w-full max-w-3xl mx-auto px-4">
        {/* Window frame */}
        <div className="bevel-frame">
          {/* Title bar */}
          <div className="window-titlebar">
            <span>welcome.html</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 bevel-frame" />
              <div className="w-3 h-3 bevel-frame" />
              <div className="w-3 h-3 bevel-frame" />
            </div>
          </div>
          
          {/* Content area */}
          <div className="p-8 md:p-12 bevel-frame-inset m-2">
            {/* Centered content */}
            <div className="text-center space-y-8">
              {/* Welcome text */}
              <p className="text-sm text-muted-foreground uppercase tracking-widest animate-fade-in">
                Welcome to the portfolio of
              </p>
              
              {/* Name */}
              <h1 className="font-serif text-4xl md:text-6xl text-foreground animate-fade-in stagger-1">
                Matias Laney
              </h1>
              
              {/* Divider */}
              <div className="retro-divider max-w-xs mx-auto" />
              
              {/* Title */}
              <p className="text-xl md:text-2xl text-primary animate-fade-in stagger-2">
                Sound Designer
              </p>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed animate-fade-in stagger-3">
                Crafting audio experiences for film, television, advertising, 
                and contemporary art installations since 2009.
              </p>

              {/* Categories as table */}
              <div className="animate-fade-in stagger-4">
                <table className="mx-auto border-collapse border border-border">
                  <tbody>
                    <tr>
                      <td className="retro-cell text-sm text-primary">Commercials</td>
                      <td className="retro-cell text-sm text-secondary">Films</td>
                      <td className="retro-cell text-sm text-accent">Documentaries</td>
                      <td className="retro-cell text-sm text-retro-green">Sound Art</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* CTA Button */}
              <div className="pt-4 animate-fade-in stagger-4">
                <button 
                  onClick={onScrollToPortfolio}
                  className="retro-button-primary"
                >
                  [ Enter Portfolio ]
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hit counter style element */}
        <div className="mt-6 text-center">
          <div className="inline-block bevel-frame-inset px-4 py-2">
            <span className="text-xs text-muted-foreground">
              You are visitor #<span className="text-primary">12,847</span> since 1999
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={onScrollToPortfolio}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
