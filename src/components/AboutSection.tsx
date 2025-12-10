import { Award, Headphones, Calendar, MapPin } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: <Calendar className="w-4 h-4" />, value: "15+", label: "Years Experience" },
    { icon: <Award className="w-4 h-4" />, value: "50+", label: "Awards" },
    { icon: <Headphones className="w-4 h-4" />, value: "200+", label: "Projects" },
    { icon: <MapPin className="w-4 h-4" />, value: "NYC", label: "Based In" },
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
    <section className="min-h-screen py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        {/* Section window */}
        <div className="bevel-frame">
          {/* Title bar */}
          <div className="window-titlebar">
            <span>about.html</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 bevel-frame" />
              <div className="w-3 h-3 bevel-frame" />
              <div className="w-3 h-3 bevel-frame" />
            </div>
          </div>

          <div className="p-6">
            {/* Section header */}
            <div className="mb-8 text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                About Me
              </h2>
              <div className="retro-divider max-w-xs mx-auto" />
            </div>

            {/* Two column layout using table */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Main bio */}
              <div className="md:col-span-2 bevel-frame-inset p-6 animate-fade-in">
                <h3 className="text-sm uppercase tracking-wide text-primary mb-4">Biography</h3>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
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

              {/* Stats sidebar */}
              <div className="bevel-frame-inset p-4 animate-fade-in stagger-1">
                <h3 className="text-sm uppercase tracking-wide text-secondary mb-4">Quick Stats</h3>
                <table className="w-full">
                  <tbody>
                    {stats.map((stat) => (
                      <tr key={stat.label} className="border-b border-border/30 last:border-0">
                        <td className="py-3">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            {stat.icon}
                            <span className="text-xs">{stat.label}</span>
                          </div>
                        </td>
                        <td className="py-3 text-right">
                          <span className="font-serif text-lg text-foreground">{stat.value}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Skills section */}
            <div className="mt-8 bevel-frame-inset p-6 animate-fade-in stagger-2">
              <h3 className="text-sm uppercase tracking-wide text-accent mb-4">Tools & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 border border-border bg-card/50 text-foreground hover:border-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Clients section */}
            <div className="mt-8 bevel-frame-inset p-6 animate-fade-in stagger-3">
              <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Selected Clients</h3>
              <div className="flex flex-wrap gap-4">
                {clients.map((client) => (
                  <span
                    key={client}
                    className="font-serif text-lg text-muted-foreground/60 hover:text-foreground transition-colors"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>

            {/* Last updated */}
            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
