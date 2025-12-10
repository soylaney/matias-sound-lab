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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNav("home")}
            className="group"
          >
            <span className="font-display text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              Matias Laney
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNav(item.section)}
                className="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-6 animate-fade-in">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleNav(item.section)}
                  className="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {item.label}
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
