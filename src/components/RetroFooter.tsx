const RetroFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bevel-frame">
      <div className="p-6">
        <div className="container mx-auto max-w-4xl">
          {/* Main footer content */}
          <div className="text-center space-y-4">
            {/* Divider */}
            <div className="retro-divider" />
            
            {/* Logo/Name */}
            <p className="font-serif text-lg text-foreground">
              Matias Laney
            </p>
            
            {/* Tagline */}
            <p className="text-xs text-muted-foreground">
              Sound Designer • New York City
            </p>

            {/* Nav links */}
            <div className="flex justify-center gap-4 text-xs">
              <span className="retro-link">Home</span>
              <span className="text-border">|</span>
              <span className="retro-link">Work</span>
              <span className="text-border">|</span>
              <span className="retro-link">About</span>
              <span className="text-border">|</span>
              <span className="retro-link">Contact</span>
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground pt-4">
              © {currentYear} Matias Laney. All rights reserved.
            </p>

            {/* Classic 90s badges */}
            <div className="flex justify-center gap-4 pt-2">
              <div className="bevel-frame px-2 py-1">
                <span className="text-[10px] text-muted-foreground">Best viewed at 1024x768</span>
              </div>
              <div className="bevel-frame px-2 py-1">
                <span className="text-[10px] text-muted-foreground">Made with ♪</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom status bar */}
      <div className="status-bar text-center text-muted-foreground">
        Site optimized for Netscape Navigator 4.0+ and Internet Explorer 5.0+
      </div>
    </footer>
  );
};

export default RetroFooter;
