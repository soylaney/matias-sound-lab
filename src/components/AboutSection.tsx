import { Award, Headphones, Calendar, MapPin } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: <Calendar className="w-5 h-5" />, value: "15+", label: "Years" },
    { icon: <Award className="w-5 h-5" />, value: "50+", label: "Awards" },
    { icon: <Headphones className="w-5 h-5" />, value: "200+", label: "Projects" },
    { icon: <MapPin className="w-5 h-5" />, value: "NYC", label: "Based" },
  ];

  const expertise = [
    "Pro Tools", "Ableton Live", "Logic Pro", "Sound Forge",
    "Foley Recording", "Field Recording", "5.1/7.1 Mixing",
    "Dolby Atmos", "ADR", "Sound Effects Design"
  ];

  const clients = [
    "Nike", "Coca-Cola", "A24", "HBO", "Netflix", 
    "National Geographic", "Apple", "Sony", "Warner Bros", "MoMA"
  ];

  return (
    <section className="min-h-screen py-32 px-6 bg-card/30 relative noise-overlay">
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-secondary mb-4">
            Background
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            About
          </h2>
          <div className="gradient-line max-w-xs" />
        </div>

        {/* Bio */}
        <div className="mb-20 animate-fade-in">
          <div className="space-y-6 font-mono text-lg text-muted-foreground leading-relaxed">
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
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="pro-card text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-3 flex justify-center">{stat.icon}</div>
              <div className="font-display text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Expertise */}
        <div className="mb-20 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h3 className="font-mono text-sm uppercase tracking-[0.3em] text-accent mb-8">
            Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {expertise.map((skill) => (
              <span
                key={skill}
                className="font-mono text-sm px-4 py-2 bg-muted/50 text-foreground border border-border hover:border-accent transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Clients */}
        <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
          <h3 className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Selected Clients
          </h3>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {clients.map((client) => (
              <span
                key={client}
                className="font-display text-xl text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
