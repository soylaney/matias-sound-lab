const AboutSection = () => {
  const expertise = [
    "Pro Tools", "Ableton Live", "Logic Pro", "Dolby Atmos",
    "Foley Recording", "Field Recording", "5.1/7.1 Mixing",
    "ADR", "Sound Effects Design", "Music Composition"
  ];

  const clients = [
    "Nike", "Coca-Cola", "A24", "HBO", "Netflix", 
    "National Geographic", "Apple", "Sony", "Warner Bros", "MoMA"
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-card/30 relative">
      {/* Ambient backgrounds */}
      <div className="ambient-bg w-[400px] h-[400px] bg-primary top-1/3 -left-32" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left column - Bio */}
          <div>
            <p className="font-body text-sm text-primary mb-4 tracking-wide animate-fade-in">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in stagger-1">
              Sound tells
              <br />
              the story
            </h2>
            
            <div className="space-y-6 font-body text-muted-foreground leading-relaxed animate-fade-in stagger-2">
              <p>
                I'm a sound designer based in New York City with over 15 years of experience 
                crafting audio for visual media. My journey began in underground music scenes, 
                where I learned that sound has the power to transform reality.
              </p>
              <p>
                Today, I bring that experimental spirit to commercial and artistic projects alike. 
                Whether it's the subtle ambiance of a documentary, the explosive soundscapes of 
                a blockbuster, or the innovative textures of a gallery installation, I approach 
                each project as a unique sonic universe waiting to be discovered.
              </p>
              <p>
                My work has been recognized with Emmy nominations, Clio Awards, and installations 
                at major cultural institutions worldwide.
              </p>
            </div>
          </div>

          {/* Right column - Skills & Clients */}
          <div className="space-y-16">
            {/* Expertise */}
            <div className="animate-fade-in stagger-3">
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {expertise.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-sm px-4 py-2 bg-muted/30 text-foreground/80 border border-border hover:border-primary/50 hover:text-foreground transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Clients */}
            <div className="animate-fade-in stagger-4">
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                Selected Clients
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {clients.map((client) => (
                  <span
                    key={client}
                    className="font-body text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="animate-fade-in stagger-5">
              <div className="card-minimal">
                <p className="font-body text-foreground mb-4">
                  Available for select projects in 2025
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Let's discuss how we can bring your vision to life through sound.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
