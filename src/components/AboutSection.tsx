const AboutSection = () => {
  const clients = ["HELLMANS", "KFC", "TOYOTA", "BRAHMA", "PATAGONIA"];

  return (
    <section className="py-16 px-4 bg-secondary text-secondary-foreground border-t-4 border-foreground relative overflow-hidden">
      {/* Background chaos */}
      <div className="absolute top-[10%] right-[5%] font-display text-[30vw] text-foreground/5 leading-none pointer-events-none">
        ?!
      </div>

      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-sm uppercase tracking-widest text-secondary-foreground/60 mb-2">
          [ Info ]
        </p>
        <h2 className="font-display text-huge text-secondary-foreground">
          ABOUT
        </h2>
      </div>

      {/* Two columns */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
        {/* Left - manifesto */}
        <div>
          <div className="space-y-6 mb-12">
            <p className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95]">
              I MAKE SOUNDS 
              <span className="bg-foreground text-background px-2 mx-1">THAT HIT.</span>
            </p>
          </div>

          <div className="space-y-4 font-mono text-sm leading-relaxed text-secondary-foreground/80">
            <p>
              Working from Barcelona, chasing the sounds that make you rewind twice. 
              Part scientist, part mad composer—always hunting for that perfect noise.
            </p>
          </div>
        </div>

        {/* Right - stats & clients */}
        <div className="space-y-12">
          {/* Stats - brutal cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border-4 border-secondary-foreground p-4 bg-primary text-primary-foreground text-center brutal-hover">
              <p className="font-display text-5xl">15+</p>
              <p className="font-mono text-xs uppercase">Years</p>
            </div>
            <div className="border-4 border-secondary-foreground p-4 bg-accent text-accent-foreground text-center brutal-hover">
              <p className="font-display text-5xl">200+</p>
              <p className="font-mono text-xs uppercase">Projects</p>
            </div>
          </div>

          {/* Clients */}
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-secondary-foreground/60 mb-4">
              [ Worked with ]
            </p>
            <div className="flex flex-wrap gap-2">
              {clients.map((client) => (
                <span
                  key={client}
                  className="border-2 border-secondary-foreground/40 px-3 py-1 font-mono text-sm hover:border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary transition-all"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Big quote */}
      <div className="mt-24 pt-12 border-t-4 border-secondary-foreground/20">
        <p className="font-display text-3xl md:text-5xl lg:text-6xl text-secondary-foreground/90 max-w-5xl">
          "THE BEST SOUND DESIGN DOESN'T SAY 'LISTEN TO ME.' IT SAYS 
          <span className="bg-primary text-primary-foreground px-2 mx-1">FEEL THIS.</span>"
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
