const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-serif text-xl italic text-foreground">
          Matias Laney
        </span>
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          © {currentYear} • Sound Design • NYC
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Available for select projects
        </p>
      </div>
    </footer>
  );
};

export default Footer;
