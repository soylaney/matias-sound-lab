import { Volume2, Heart } from "lucide-react";

const RetroFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t-2 border-border py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Decorative line */}
        <div className="text-center font-pixel text-muted-foreground text-xs mb-6">
          {"═".repeat(15)} ★ {"═".repeat(15)}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-primary" />
            <span className="font-arcade text-xs text-primary">ML_SOUND</span>
          </div>

          {/* Copyright */}
          <div className="font-pixel text-sm text-muted-foreground text-center">
            © {currentYear} MATIAS LANEY • ALL RIGHTS RESERVED
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 font-pixel text-xs text-muted-foreground">
            MADE WITH <Heart className="w-4 h-4 text-destructive animate-pulse" /> & SOUND
          </div>
        </div>

        {/* Retro badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="retro-card !p-2">
            <span className="font-pixel text-xs text-accent">HTML5</span>
          </div>
          <div className="retro-card !p-2">
            <span className="font-pixel text-xs text-secondary">CSS3</span>
          </div>
          <div className="retro-card !p-2">
            <span className="font-pixel text-xs text-primary">REACT</span>
          </div>
          <div className="retro-card !p-2">
            <span className="font-pixel text-xs text-neon-yellow">♪ SOUND ON</span>
          </div>
        </div>

        {/* Web ring style links */}
        <div className="text-center mt-8">
          <div className="font-pixel text-xs text-muted-foreground">
            {"<<<"} <span className="text-primary hover:underline cursor-pointer">PREV</span>
            {" | "}
            <span className="text-secondary">SOUND DESIGNERS WEBRING</span>
            {" | "}
            <span className="text-primary hover:underline cursor-pointer">NEXT</span> {">>>"}
          </div>
        </div>

        {/* Tiny disclaimer */}
        <div className="text-center mt-6">
          <span className="font-pixel text-[10px] text-muted-foreground/50">
            BEST VIEWED WITH NETSCAPE NAVIGATOR 4.0 OR HIGHER • 800x600 RESOLUTION RECOMMENDED
          </span>
        </div>
      </div>
    </footer>
  );
};

export default RetroFooter;
