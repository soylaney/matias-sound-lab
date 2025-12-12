import { useState } from "react";
import { X } from "lucide-react";

interface NavigationProps {
  onNavigate: (section: string) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed corner elements */}
      <div className="fixed top-4 left-4 z-50">
        <button 
          onClick={() => handleNav("home")}
          className="font-display text-4xl text-foreground hover:text-primary transition-colors"
        >
          ML*
        </button>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 border-4 border-foreground bg-background px-4 py-2 font-mono text-sm uppercase tracking-widest brutal-hover"
      >
        {isOpen ? <X className="w-5 h-5" /> : "Menu"}
      </button>

      {/* Chaotic fullscreen menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-primary overflow-hidden">
          {/* Scattered nav items */}
          <button
            onClick={() => handleNav("portfolio")}
            className="absolute top-[15%] left-[10%] font-display text-[15vw] text-primary-foreground hover:text-foreground transition-colors rotate-[-8deg]"
          >
            WORK
          </button>
          <button
            onClick={() => handleNav("about")}
            className="absolute top-[38%] right-[10%] sm:right-[15%] font-display text-[14vw] sm:text-[12vw] text-primary-foreground hover:text-foreground transition-colors rotate-[5deg]"
          >
            ABOUT
          </button>
          <button
            onClick={() => handleNav("contact")}
            className="absolute bottom-[8%] sm:bottom-[12%] left-[5%] sm:left-[20%] font-display text-[16vw] sm:text-[18vw] text-primary-foreground hover:text-foreground transition-colors rotate-[-3deg]"
          >
            SAY HI
          </button>
          
          {/* Random decorative elements */}
          <div className="absolute top-[60%] left-[5%] font-mono text-xs text-primary-foreground/50 rotate-90">
            SOUND DESIGNER BCN
          </div>
          <div className="absolute bottom-[40%] right-[15%] border-4 border-primary-foreground w-24 h-24 rotate-12" />
          <div className="absolute top-[25%] right-[30%] w-16 h-16 bg-foreground rotate-45" />
        </div>
      )}

      {/* Side text */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-center whitespace-nowrap">
          Sound Designer — Est. 2009
        </p>
      </div>
    </>
  );
};

export default Navigation;
