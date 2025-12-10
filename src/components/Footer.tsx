const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8 px-4 border-t-4 border-primary">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-3xl">MATIAS LANEY</span>
        <p className="font-mono text-xs uppercase tracking-widest">
          © {currentYear} • Sound Design • Barcelona • Not your average audio guy
        </p>
        <span className="sticker rotate-[8deg]">Available 2025</span>
      </div>
    </footer>
  );
};

export default Footer;
