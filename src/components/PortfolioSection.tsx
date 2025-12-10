import { useState } from "react";
import { Play, Pause, Film, Tv, FileVideo, Palette } from "lucide-react";

type Category = "all" | "commercials" | "films" | "documentaries" | "soundart";

interface Project {
  id: number;
  title: string;
  category: Category;
  client: string;
  year: number;
  description: string;
  role: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nike — Just Sound It",
    category: "commercials",
    client: "Nike Inc.",
    year: 2024,
    description: "Global campaign featuring immersive athletic soundscapes and brand sonic identity",
    role: "Sound Design & Mix",
  },
  {
    id: 2,
    title: "The Last Echo",
    category: "films",
    client: "A24 Films",
    year: 2023,
    description: "Psychological thriller with layered ambient textures and spatial audio design",
    role: "Sound Design & Dialogue Edit",
  },
  {
    id: 3,
    title: "Ocean Depths",
    category: "documentaries",
    client: "National Geographic",
    year: 2024,
    description: "Underwater documentary exploring marine life through innovative sound capture",
    role: "Field Recording & Mix",
  },
  {
    id: 4,
    title: "Resonance Chamber",
    category: "soundart",
    client: "MoMA PS1",
    year: 2023,
    description: "Interactive installation exploring spatial audio in gallery environments",
    role: "Composition & Technical Design",
  },
  {
    id: 5,
    title: "Coca-Cola — Refresh",
    category: "commercials",
    client: "Coca-Cola",
    year: 2024,
    description: "Signature sound branding and commercial audio for global summer campaign",
    role: "Sound Design & Brand Audio",
  },
  {
    id: 6,
    title: "Neon Nights",
    category: "films",
    client: "Paramount Pictures",
    year: 2023,
    description: "Sci-fi feature with synthesized soundscapes and futuristic audio design",
    role: "Sound Design & Foley",
  },
];

const categories: { value: Category; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All", icon: null },
  { value: "commercials", label: "Commercials", icon: <Tv className="w-4 h-4" /> },
  { value: "films", label: "Films", icon: <Film className="w-4 h-4" /> },
  { value: "documentaries", label: "Documentaries", icon: <FileVideo className="w-4 h-4" /> },
  { value: "soundart", label: "Sound Art", icon: <Palette className="w-4 h-4" /> },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <section className="min-h-screen py-32 px-6 bg-background relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-20">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Portfolio
          </h2>
          <div className="gradient-line max-w-xs" />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`font-mono text-sm uppercase tracking-widest px-5 py-2.5 border transition-all duration-300 ${
                activeCategory === cat.value 
                  ? "border-primary text-primary bg-primary/5" 
                  : "border-border text-muted-foreground hover:border-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="pro-card group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                    {project.category === "soundart" ? "Sound Art" : project.category}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <span className="font-mono text-sm text-muted-foreground">
                  {project.year}
                </span>
              </div>

              {/* Waveform visualization */}
              <div className="bg-muted/30 p-4 mb-6 border border-border/50">
                <div className="flex items-center gap-0.5 h-12">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 bg-primary/40 transition-all duration-200 ${
                        playingId === project.id ? "waveform-bar active" : ""
                      }`}
                      style={{
                        height: `${20 + Math.random() * 80}%`,
                        animationDelay: `${i * 30}ms`,
                        opacity: hoveredId === project.id || playingId === project.id ? 1 : 0.4,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Play button and client */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => togglePlay(project.id)}
                  className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {playingId === project.id ? (
                    <>
                      <Pause className="w-4 h-4" /> Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" /> Play Demo
                    </>
                  )}
                </button>
                <span className="font-mono text-sm text-muted-foreground">
                  {project.client}
                </span>
              </div>

              {/* Description */}
              <p className="font-mono text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Role */}
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                {project.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
