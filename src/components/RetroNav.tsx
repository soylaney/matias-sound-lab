import { useState } from "react";
import { Menu, X, Volume2 } from "lucide-react";

interface RetroNavProps {
  onNavigate: (section: string) => void;
}

const RetroNav = ({ onNavigate }: RetroNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "HOME", section: "home" },
    { label: "PORTFOLIO", section: "portfolio" },
    { label: "ABOUT", section: "about" },
    { label: "CONTACT", section: "contact" },
  ];

  const handleNav = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b-2 border-border backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNav("home")}
            className="flex items-center gap-2 group"
          >
            <Volume2 className="w-6 h-6 text-primary neon-text-cyan" />
            <span className="font-arcade text-xs text-primary neon-text-cyan group-hover:text-secondary transition-colors">
              ML_SOUND
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNav(item.section)}
                className="retro-button text-xs"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden retro-button p-2"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-border py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <button
                  key={item.section}
                  onClick={() => handleNav(item.section)}
                  className="retro-button text-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {">"} {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default RetroNav;
