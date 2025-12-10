const RetroFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="font-display text-lg font-semibold text-foreground">
            Matias Laney
          </span>

          {/* Copyright */}
          <p className="font-mono text-sm text-muted-foreground">
            © {currentYear} All rights reserved
          </p>

          {/* Location */}
          <p className="font-mono text-sm text-muted-foreground">
            New York City
          </p>
        </div>
      </div>
    </footer>
  );
};

export default RetroFooter;
