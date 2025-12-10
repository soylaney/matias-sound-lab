import { useState } from "react";
import { Menu, X } from "lucide-react";

interface RetroNavProps {
  onNavigate: (section: string) => void;
}

const RetroNav = ({ onNavigate }: RetroNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Work", section: "portfolio" },
    { label: "About", section: "about" },
    { label: "Contact", section: "contact" },
  ];

  const handleNav = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav bar with beveled frame */}
      <div className="bevel-frame">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <button 
              onClick={() => handleNav("home")}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bevel-frame-inset flex items-center justify-center">
                <span className="text-primary font-bold text-xs">ML</span>
              </div>
              <span className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                Matias Laney
              </span>
            </button>

            {/* Desktop Nav - table style links */}
            <div className="hidden md:flex items-center">
              <div className="flex border border-border">
                {navItems.map((item, index) => (
                  <button
                    key={item.section}
                    onClick={() => handleNav(item.section)}
                    className={`px-6 py-2 text-sm uppercase tracking-wide text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all ${
                      index !== navItems.length - 1 ? "border-r border-border" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden retro-button p-2"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Status bar beneath nav */}
      <div className="status-bar hidden md:flex items-center justify-between text-muted-foreground">
        <span>Sound Designer • NYC</span>
        <span>Film | Commercial | Documentary | Sound Art</span>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bevel-frame border-t-0">
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNav(item.section)}
                className="block w-full text-left px-4 py-3 text-sm uppercase tracking-wide text-muted-foreground hover:text-primary hover:bg-muted/50 border border-border transition-all"
              >
                » {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default RetroNav;
