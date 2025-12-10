const AboutSection = () => {
  const clients = [
    "Nike", "A24", "HBO", "Netflix", "Nat Geo", 
    "Apple", "Sony", "MoMA", "Coca-Cola", "Paramount"
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-card relative grain">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 animate-in">
            Info
          </p>
          <h2 className="font-serif text-6xl md:text-8xl italic text-foreground animate-in delay-1">
            About
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Bio */}
          <div className="space-y-8 animate-in delay-2">
            <p className="font-serif text-3xl md:text-4xl italic leading-snug text-foreground">
              I believe sound is the invisible architecture of emotion.
            </p>
            <div className="space-y-6 font-mono text-sm text-muted-foreground leading-relaxed">
              <p>
                15 years creating sonic experiences for visionary directors, 
                agencies, and artists who understand that what you hear 
                shapes what you feel.
              </p>
              <p>
                My work lives in the space between conscious and unconscious 
                perception—where sound stops being heard and starts being felt.
              </p>
              <p>
                Based in NYC. Working globally. Open to projects that 
                challenge convention.
              </p>
            </div>
          </div>

          {/* Right - Stats & Clients */}
          <div className="space-y-16">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 animate-in delay-3">
              <div className="border-l-2 border-primary pl-6">
                <p className="font-serif text-5xl italic text-foreground mb-2">15+</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Years</p>
              </div>
              <div className="border-l-2 border-secondary pl-6">
                <p className="font-serif text-5xl italic text-foreground mb-2">200+</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Projects</p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <p className="font-serif text-5xl italic text-foreground mb-2">50+</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Awards</p>
              </div>
            </div>

            {/* Clients */}
            <div className="animate-in delay-4">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Collaborators
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {clients.map((client, i) => (
                  <span 
                    key={client} 
                    className="font-serif text-2xl italic text-foreground/40 hover:text-foreground transition-colors duration-300"
                  >
                    {client}
                    {i < clients.length - 1 && <span className="text-primary ml-6">·</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Recognition */}
            <div className="animate-in delay-5">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Recognition
              </p>
              <p className="font-mono text-sm text-muted-foreground">
                Emmy Nominations • Clio Awards • Cannes Lions • 
                D&AD • One Show • Webby Awards
              </p>
            </div>
          </div>
        </div>

        {/* Large statement */}
        <div className="mt-32 pt-16 border-t border-border animate-in delay-6">
          <p className="font-serif text-4xl md:text-6xl lg:text-7xl italic text-foreground leading-tight">
            "The best sound design is 
            <span className="text-stroke-primary"> invisible</span>—you 
            don't hear it, you <span className="text-primary">feel</span> it."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
