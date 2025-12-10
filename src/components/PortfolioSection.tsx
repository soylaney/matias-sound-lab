import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

type Category = "all" | "commercials" | "films" | "documentaries" | "soundart";

interface Project {
  id: number;
  title: string;
  category: Category;
  client: string;
  year: number;
  tagline: string;
  mediaType: "audio" | "video";
  mediaUrl: string;
}

const projects: Project[] = [
  { id: 1, title: "JUST SOUND IT", category: "commercials", client: "Nike", year: 2024, tagline: "Athletic soundscapes that move", mediaType: "video", mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 2, title: "THE LAST ECHO", category: "films", client: "A24", year: 2023, tagline: "Silence as narrative", mediaType: "audio", mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { id: 3, title: "OCEAN DEPTHS", category: "documentaries", client: "Nat Geo", year: 2024, tagline: "200+ hours underwater", mediaType: "video", mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 4, title: "RESONANCE CHAMBER", category: "soundart", client: "MoMA PS1", year: 2023, tagline: "Space as instrument", mediaType: "audio", mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { id: 5, title: "REFRESH", category: "commercials", client: "Coca-Cola", year: 2024, tagline: "The sound of thirst", mediaType: "video", mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 6, title: "NEON NIGHTS", category: "films", client: "Paramount", year: 2023, tagline: "Synth-punk future", mediaType: "audio", mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "ALL" },
  { value: "films", label: "FILM" },
  { value: "commercials", label: "ADS" },
  { value: "documentaries", label: "DOCS" },
  { value: "soundart", label: "ART" },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [mutedId, setMutedId] = useState<number | null>(null);
  const mediaRefs = useRef<{ [key: number]: HTMLVideoElement | HTMLAudioElement | null }>({});

  const filteredProjects = activeCategory === "all" ? projects : projects.filter(p => p.category === activeCategory);

  const handlePlayPause = (id: number) => {
    const media = mediaRefs.current[id];
    if (!media) return;
    if (playingId === id) {
      media.pause();
      setPlayingId(null);
    } else {
      if (playingId && mediaRefs.current[playingId]) mediaRefs.current[playingId]?.pause();
      media.play();
      setPlayingId(id);
    }
  };

  const toggleMute = (id: number) => {
    const media = mediaRefs.current[id];
    if (!media) return;
    media.muted = !media.muted;
    setMutedId(media.muted ? id : null);
  };

  return (
    <section className="py-16 px-4 bg-card border-t-4 border-foreground">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <div>
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-2 animate-in">
            [ Work ]
          </p>
          <h2 className="font-display text-huge text-foreground animate-in delay-1">
            PORTFOLIO
          </h2>
        </div>
        
        {/* Filters as tags */}
        <div className="flex flex-wrap gap-2 animate-in delay-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 border-4 font-mono text-sm uppercase transition-all brutal-hover ${
                activeCategory === cat.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-foreground bg-background text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Project cards - chaotic grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project, i) => (
          <article
            key={project.id}
            className={`border-4 border-foreground bg-background p-0 overflow-hidden animate-in brutal-hover cursor-pointer ${
              expandedId === project.id ? "md:col-span-2" : ""
            }`}
            style={{ 
              animationDelay: `${i * 0.05}s`,
              transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (expandedId === project.id ? 0 : 0.5)}deg)` 
            }}
            onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
          >
            <div className={`flex flex-col ${expandedId === project.id ? "md:flex-row" : ""}`}>
              {/* Project header */}
              <div className={`p-6 border-b-4 border-foreground ${expandedId === project.id ? "md:border-b-0 md:border-r-4 md:w-1/2" : ""}`}>
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-xs uppercase bg-foreground text-background px-2 py-1">
                    {project.year}
                  </span>
                  <span className="font-mono text-xs uppercase text-muted-foreground">
                    {project.client}
                  </span>
                </div>
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-2 scribble inline-block">
                  {project.title}
                </h3>
                <p className="font-mono text-sm text-muted-foreground uppercase">
                  {project.tagline}
                </p>
              </div>

              {/* Media section - visible when expanded */}
              {expandedId === project.id && (
                <div className="p-6 md:w-1/2 bg-muted">
                  <div className="relative aspect-video bg-foreground mb-4">
                    {project.mediaType === "video" ? (
                      <video
                        ref={(el) => { mediaRefs.current[project.id] = el; }}
                        src={project.mediaUrl}
                        className="w-full h-full object-cover"
                        loop
                        muted={mutedId === project.id}
                        playsInline
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-foreground">
                        <audio ref={(el) => { mediaRefs.current[project.id] = el; }} src={project.mediaUrl} loop />
                        <div className="flex items-center gap-1 h-20">
                          {Array.from({ length: 30 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 bg-primary ${playingId === project.id ? "wave-bar" : ""}`}
                              style={{ 
                                height: `${20 + Math.random() * 80}%`,
                                animationDelay: `${i * 0.02}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Controls */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-2 bg-background/90">
                      <button
                        onClick={(e) => { e.stopPropagation(); handlePlayPause(project.id); }}
                        className="border-2 border-foreground p-2 bg-primary text-primary-foreground"
                      >
                        {playingId === project.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleMute(project.id); }}
                        className="border-2 border-foreground p-2"
                      >
                        {mutedId === project.id ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <button className="w-full border-4 border-foreground bg-secondary text-secondary-foreground py-3 font-display text-xl uppercase brutal-hover">
                    VIEW FULL PROJECT →
                  </button>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
