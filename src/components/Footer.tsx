const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display text-lg font-semibold text-foreground">Matias Laney</span>
          <p className="font-body text-sm text-muted-foreground">© {currentYear} All rights reserved</p>
          <p className="font-body text-sm text-muted-foreground">New York City</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
