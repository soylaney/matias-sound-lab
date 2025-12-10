import { useState } from "react";
import { Play, Pause, Film, Tv, FileVideo, Palette, Volume2 } from "lucide-react";

type Category = "all" | "commercials" | "films" | "documentaries" | "soundart";

interface Project {
  id: number;
  title: string;
  category: Category;
  client: string;
  year: number;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nike - Just Sound It",
    category: "commercials",
    client: "Nike Inc.",
    year: 2024,
    description: "Full sound design for global campaign featuring immersive athletic soundscapes",
    tags: ["Foley", "Mix", "Sound Design"],
  },
  {
    id: 2,
    title: "The Last Echo",
    category: "films",
    client: "A24 Films",
    year: 2023,
    description: "Feature film sound design - psychological thriller with layered ambient textures",
    tags: ["Feature Film", "Ambient", "Dialogue Edit"],
  },
  {
    id: 3,
    title: "Ocean Depths",
    category: "documentaries",
    client: "National Geographic",
    year: 2024,
    description: "Underwater documentary exploring marine life through innovative sound capture",
    tags: ["Field Recording", "Nature", "Mix"],
  },
  {
    id: 4,
    title: "Resonance Chamber",
    category: "soundart",
    client: "MoMA PS1",
    year: 2023,
    description: "Interactive installation exploring spatial audio in gallery environments",
    tags: ["Installation", "Interactive", "Spatial Audio"],
  },
  {
    id: 5,
    title: "Coca-Cola Refresh",
    category: "commercials",
    client: "Coca-Cola",
    year: 2024,
    description: "Signature sound branding and commercial audio for summer campaign",
    tags: ["Brand Sound", "Jingle", "Mix"],
  },
  {
    id: 6,
    title: "Neon Nights",
    category: "films",
    client: "Paramount Pictures",
    year: 2023,
    description: "Sci-fi feature with synthesized soundscapes and futuristic audio design",
    tags: ["Synth", "SFX", "Feature Film"],
  },
  {
    id: 7,
    title: "Vanishing Voices",
    category: "documentaries",
    client: "HBO Documentary",
    year: 2024,
    description: "Documentary preserving endangered languages through immersive audio",
    tags: ["Voice", "Cultural", "Field Recording"],
  },
  {
    id: 8,
    title: "Frequency Drift",
    category: "soundart",
    client: "Tate Modern",
    year: 2024,
    description: "Generative audio sculpture responding to visitor movement",
    tags: ["Generative", "Sculpture", "Interactive"],
  },
];

const categories: { value: Category; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "ALL WORKS", icon: <Volume2 className="w-4 h-4" /> },
  { value: "commercials", label: "COMMERCIALS", icon: <Tv className="w-4 h-4" /> },
  { value: "films", label: "FILMS", icon: <Film className="w-4 h-4" /> },
  { value: "documentaries", label: "DOCS", icon: <FileVideo className="w-4 h-4" /> },
  { value: "soundart", label: "SOUND ART", icon: <Palette className="w-4 h-4" /> },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const getCategoryColor = (category: Category) => {
    switch (category) {
      case "commercials": return "text-primary neon-text-cyan";
      case "films": return "text-secondary neon-text-pink";
      case "documentaries": return "text-accent neon-text-green";
      case "soundart": return "text-neon-yellow text-glow";
      default: return "text-foreground";
    }
  };

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-background relative">
      {/* Section header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-border" />
          <span className="font-pixel text-sm text-muted-foreground">{"<<<"}</span>
          <h2 className="font-arcade text-xl md:text-2xl text-primary neon-text-cyan">
            PORTFOLIO
          </h2>
          <span className="font-pixel text-sm text-muted-foreground">{">>>"}</span>
          <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-border" />
        </div>
        <p className="font-pixel text-lg text-muted-foreground">
          SELECT A CATEGORY TO FILTER WORKS
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`retro-button flex items-center gap-2 text-xs ${
              activeCategory === cat.value 
                ? "!text-primary !border-primary" 
                : ""
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="retro-card group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`font-pixel text-xs ${getCategoryColor(project.category)}`}>
                    [{project.category.toUpperCase()}]
                  </span>
                  <h3 className="font-arcade text-sm md:text-base text-foreground mt-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <span className="font-pixel text-sm text-muted-foreground">
                  {project.year}
                </span>
              </div>

              {/* Waveform visualization */}
              <div className="bg-muted/50 p-4 mb-4 border border-border">
                <div className="flex items-center gap-1 h-12">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 bg-primary transition-all duration-200 waveform-bar ${
                        playingId === project.id ? "" : "!animate-none"
                      }`}
                      style={{
                        height: `${Math.random() * 100}%`,
                        animationDelay: `${i * 50}ms`,
                        opacity: hoveredId === project.id || playingId === project.id ? 1 : 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Play button and client */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => togglePlay(project.id)}
                  className="retro-button flex items-center gap-2 text-xs"
                >
                  {playingId === project.id ? (
                    <>
                      <Pause className="w-4 h-4" /> PAUSE
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" /> PLAY DEMO
                    </>
                  )}
                </button>
                <span className="font-pixel text-sm text-muted-foreground">
                  {project.client}
                </span>
              </div>

              {/* Description */}
              <p className="font-pixel text-sm text-muted-foreground mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-pixel text-xs px-2 py-1 bg-muted text-muted-foreground border border-border"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative divider */}
      <div className="text-center mt-16 font-pixel text-muted-foreground">
        {"═".repeat(20)} END OF PORTFOLIO {"═".repeat(20)}
      </div>
    </section>
  );
};

export default PortfolioSection;
