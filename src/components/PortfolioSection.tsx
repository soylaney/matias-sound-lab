import { useState } from "react";
import { Play, Pause } from "lucide-react";

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

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "commercials", label: "Commercials" },
  { value: "films", label: "Films" },
  { value: "documentaries", label: "Documentaries" },
  { value: "soundart", label: "Sound Art" },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [playingId, setPlayingId] = useState<number | null>(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  const getCategoryColor = (category: Category) => {
    switch (category) {
      case "commercials": return "text-primary";
      case "films": return "text-secondary";
      case "documentaries": return "text-accent";
      case "soundart": return "text-retro-green";
      default: return "text-foreground";
    }
  };

  return (
    <section className="min-h-screen py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Section window */}
        <div className="bevel-frame">
          {/* Title bar */}
          <div className="window-titlebar">
            <span>portfolio.html</span>
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
                Selected Work
              </h2>
              <p className="text-sm text-muted-foreground">
                Browse projects by category
              </p>
            </div>

            {/* Category navigation as table row */}
            <div className="mb-8 overflow-x-auto">
              <table className="mx-auto border-collapse border border-border">
                <tbody>
                  <tr>
                    {categories.map((cat) => (
                      <td key={cat.value} className="p-0">
                        <button
                          onClick={() => setActiveCategory(cat.value)}
                          className={`px-4 py-2 text-xs uppercase tracking-wide w-full transition-all ${
                            activeCategory === cat.value 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-card hover:bg-muted text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {cat.label}
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Projects table */}
            <div className="bevel-frame-inset">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="p-3 text-left text-xs uppercase tracking-wide text-muted-foreground border-b border-border">Project</th>
                    <th className="p-3 text-left text-xs uppercase tracking-wide text-muted-foreground border-b border-border hidden md:table-cell">Client</th>
                    <th className="p-3 text-left text-xs uppercase tracking-wide text-muted-foreground border-b border-border hidden md:table-cell">Year</th>
                    <th className="p-3 text-center text-xs uppercase tracking-wide text-muted-foreground border-b border-border w-20">Audio</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((project, index) => (
                    <tr 
                      key={project.id}
                      className={`hover:bg-muted/30 transition-colors animate-fade-in ${
                        index % 2 === 0 ? "bg-card/30" : ""
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <td className="p-4 border-b border-border/50">
                        <div>
                          <span className={`text-xs uppercase tracking-wide ${getCategoryColor(project.category)}`}>
                            {project.category === "soundart" ? "Sound Art" : project.category}
                          </span>
                          <h3 className="font-serif text-lg text-foreground mt-1">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1 md:hidden">
                            {project.client} • {project.year}
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            {project.description}
                          </p>
                          <p className="text-xs text-primary/70 mt-1">
                            Role: {project.role}
                          </p>
                        </div>
                      </td>
                      <td className="p-4 border-b border-border/50 hidden md:table-cell">
                        <span className="text-sm text-foreground">{project.client}</span>
                      </td>
                      <td className="p-4 border-b border-border/50 hidden md:table-cell">
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                      </td>
                      <td className="p-4 border-b border-border/50 text-center">
                        <button
                          onClick={() => togglePlay(project.id)}
                          className="retro-button p-2"
                          title={playingId === project.id ? "Pause" : "Play demo"}
                        >
                          {playingId === project.id ? (
                            <Pause className="w-4 h-4" />
                          ) : (
                            <Play className="w-4 h-4" />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer info */}
            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                Showing {filteredProjects.length} of {projects.length} projects • 
                <span className="retro-link ml-1">View full archive »</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
