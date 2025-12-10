import { Award, Headphones, Calendar, MapPin } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: <Calendar className="w-6 h-6" />, value: "15+", label: "YEARS EXP" },
    { icon: <Award className="w-6 h-6" />, value: "50+", label: "AWARDS" },
    { icon: <Headphones className="w-6 h-6" />, value: "200+", label: "PROJECTS" },
    { icon: <MapPin className="w-6 h-6" />, value: "NYC", label: "BASED" },
  ];

  const skills = [
    "Pro Tools", "Ableton Live", "Logic Pro", "Sound Forge",
    "Foley Recording", "Field Recording", "5.1/7.1 Mixing",
    "Dolby Atmos", "ADR", "Sound Effects Design"
  ];

  const clients = [
    "Nike", "Coca-Cola", "A24", "HBO", "Netflix", 
    "National Geographic", "Apple", "Sony", "Warner Bros", "MoMA"
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-card/50 relative grid-bg">
      <div className="container mx-auto max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-border" />
            <span className="font-pixel text-sm text-muted-foreground">{"<<<"}</span>
            <h2 className="font-arcade text-xl md:text-2xl text-secondary neon-text-pink">
              ABOUT ME
            </h2>
            <span className="font-pixel text-sm text-muted-foreground">{">>>"}</span>
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-border" />
          </div>
        </div>

        {/* Bio card */}
        <div className="retro-card mb-12 animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-destructive" />
            <div className="w-3 h-3 bg-neon-yellow" />
            <div className="w-3 h-3 bg-accent" />
            <span className="font-pixel text-xs text-muted-foreground ml-2">
              about_matias.txt
            </span>
          </div>
          
          <div className="font-pixel text-lg leading-relaxed text-foreground">
            <p className="mb-4">
              <span className="text-primary">{">"}</span> Hello, world! I'm <span className="text-primary neon-text-cyan">Matias Laney</span>, 
              a sound designer based in New York City with over 15 years of experience 
              crafting audio for visual media.
            </p>
            <p className="mb-4">
              <span className="text-secondary">{">"}</span> My journey began in underground music scenes, 
              where I learned that <span className="text-secondary neon-text-pink">sound can transform reality</span>. 
              Today, I bring that experimental spirit to commercial and artistic projects alike.
            </p>
            <p>
              <span className="text-accent">{">"}</span> Whether it's the subtle ambiance of a documentary, 
              the explosive soundscapes of a blockbuster, or the innovative textures of a gallery installation, 
              I approach each project as a unique <span className="text-accent neon-text-green">sonic universe</span> waiting to be discovered.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="retro-card text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-2 flex justify-center">{stat.icon}</div>
              <div className="font-arcade text-lg md:text-xl text-foreground mb-1">{stat.value}</div>
              <div className="font-pixel text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="retro-card mb-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h3 className="font-arcade text-sm text-accent neon-text-green mb-4">
            {">>>"} SKILLS & TOOLS
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-pixel text-sm px-3 py-2 bg-muted text-foreground border-2 border-border hover:border-accent hover:text-accent transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Clients */}
        <div className="retro-card animate-fade-in" style={{ animationDelay: "300ms" }}>
          <h3 className="font-arcade text-sm text-neon-yellow text-glow mb-4">
            {">>>"} CLIENTS
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {clients.map((client) => (
              <span
                key={client}
                className="font-pixel text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                [{client}]
              </span>
            ))}
          </div>
        </div>

        {/* ASCII art decoration */}
        <div className="text-center mt-12 font-pixel text-xs text-muted-foreground opacity-50">
          <pre className="inline-block text-left">
{`    ♪ ♫ ♪ ♫ ♪
   /|     |\\
  / |     | \\
 /  | ))) |  \\
    |_____|
    SOUND ON`}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
