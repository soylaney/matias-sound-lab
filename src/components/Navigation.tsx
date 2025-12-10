import { useState } from "react";

interface NavigationProps {
  onNavigate: (section: string) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Work", section: "portfolio", num: "01" },
    { label: "Info", section: "about", num: "02" },
    { label: "Say hi", section: "contact", num: "03" },
  ];

  const handleNav = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 lg:px-12 h-24">
          <button onClick={() => handleNav("home")} className="group">
            <span className="font-serif text-2xl italic text-foreground">
              ML
            </span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-mono text-xs uppercase tracking-widest text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Full screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-full flex flex-col justify-center px-12 lg:px-24">
          {navItems.map((item, i) => (
            <button
              key={item.section}
              onClick={() => handleNav(item.section)}
              className="group text-left py-4 border-b border-border"
              style={{ transitionDelay: isOpen ? `${i * 100}ms` : "0ms" }}
            >
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.num}
                </span>
                <span className="font-serif text-6xl md:text-8xl lg:text-9xl italic text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
