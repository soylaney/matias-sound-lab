import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onNavigate: (section: string) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => handleNav("home")} className="group">
            <span className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
              Matias Laney
            </span>
          </button>

          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNav(item.section)}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground hover:text-primary transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-border py-8 animate-fade-up">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button key={item.section} onClick={() => handleNav(item.section)} className="font-body text-lg text-muted-foreground hover:text-foreground transition-colors text-left">
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

export default Navigation;
