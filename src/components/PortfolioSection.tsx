import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, ArrowUpRight } from "lucide-react";

type Category = "all" | "commercials" | "films" | "documentaries" | "soundart";

interface Project {
  id: number;
  title: string;
  category: Category;
  client: string;
  year: number;
  description: string;
  mediaType: "audio" | "video";
  mediaUrl: string;
  details: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Just Sound It",
    category: "commercials",
    client: "Nike",
    year: 2024,
    description: "Athletic soundscapes that move",
    mediaType: "video",
    mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    details: "Global campaign sonic identity. Layered field recordings from actual athletes with synthesized textures.",
  },
  {
    id: 2,
    title: "The Last Echo",
    category: "films",
    client: "A24",
    year: 2023,
    description: "Psychological thriller",
    mediaType: "audio",
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    details: "Custom reverb spaces representing mental deterioration. Silence as narrative device.",
  },
  {
    id: 3,
    title: "Ocean Depths",
    category: "documentaries",
    client: "Nat Geo",
    year: 2024,
    description: "200+ hours underwater",
    mediaType: "video",
    mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    details: "Pioneered hydrophone techniques. Mixed in Dolby Atmos for theatrical release.",
  },
  {
    id: 4,
    title: "Resonance Chamber",
    category: "soundart",
    client: "MoMA PS1",
    year: 2023,
    description: "8-channel installation",
    mediaType: "audio",
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    details: "Movement triggers generative composition. Physical space as instrument.",
  },
  {
    id: 5,
    title: "Refresh",
    category: "commercials",
    client: "Coca-Cola",
    year: 2024,
    description: "The sound of thirst",
    mediaType: "video",
    mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    details: "Iconic fizz and pour. Foley crafted for ASMR-level intimacy.",
  },
  {
    id: 6,
    title: "Neon Nights",
    category: "films",
    client: "Paramount",
    year: 2023,
    description: "Futuristic sonic palette",
    mediaType: "audio",
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    details: "Modular synths + processed found sounds. Every interface has unique audio DNA.",
  },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "films", label: "Film" },
  { value: "commercials", label: "Commercial" },
  { value: "documentaries", label: "Doc" },
  { value: "soundart", label: "Art" },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [mutedId, setMutedId] = useState<number | null>(null);
  const mediaRefs = useRef<{ [key: number]: HTMLVideoElement | HTMLAudioElement | null }>({});

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const handlePlayPause = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const media = mediaRefs.current[id];
    if (!media) return;

    if (playingId === id) {
      media.pause();
      setPlayingId(null);
    } else {
      if (playingId && mediaRefs.current[playingId]) {
        mediaRefs.current[playingId]?.pause();
      }
      media.play();
      setPlayingId(id);
    }
  };

  const toggleMute = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const media = mediaRefs.current[id];
    if (!media) return;
    media.muted = !media.muted;
    setMutedId(media.muted ? id : null);
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-background relative grain">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 animate-in">
            Selected Work
          </p>
          <h2 className="font-serif text-6xl md:text-8xl italic text-foreground animate-in delay-1">
            Portfolio
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 animate-in delay-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`font-mono text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-300 ${
                activeCategory === cat.value 
                  ? "bg-foreground text-background border-foreground" 
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects list */}
      <div className="space-y-1">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            className="group border-t border-border animate-in"
            style={{ animationDelay: `${(index + 3) * 100}ms` }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => {
              setHoveredId(null);
              if (playingId === project.id) {
                mediaRefs.current[project.id]?.pause();
                setPlayingId(null);
              }
            }}
          >
            <div className="py-8 lg:py-12 flex flex-col lg:flex-row lg:items-center gap-6">
              {/* Project info */}
              <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-muted-foreground w-16">
                    {project.year}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl italic text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {project.client}
                </span>
              </div>

              {/* Expanded content on hover */}
              <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                hoveredId === project.id ? "max-w-2xl opacity-100" : "max-w-0 opacity-0"
              }`}>
                <div className="flex items-center gap-6 pl-6 border-l border-primary">
                  {/* Media */}
                  <div className="relative w-48 h-28 flex-shrink-0 bg-muted overflow-hidden">
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
                      <div className="w-full h-full flex items-center justify-center bg-card">
                        <audio
                          ref={(el) => { mediaRefs.current[project.id] = el; }}
                          src={project.mediaUrl}
                          loop
                        />
                        <div className="flex items-center gap-[2px] h-12">
                          {Array.from({ length: 24 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-[2px] bg-primary transition-all ${
                                playingId === project.id ? "waveform-bar active" : ""
                              }`}
                              style={{
                                height: `${20 + Math.random() * 80}%`,
                                animationDelay: `${i * 25}ms`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Play controls */}
                    <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => handlePlayPause(project.id, e)}
                        className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground hover:scale-110 transition-transform"
                      >
                        {playingId === project.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                      </button>
                    </div>

                    {/* Mute */}
                    <button
                      onClick={(e) => toggleMute(project.id, e)}
                      className="absolute bottom-2 right-2 text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {mutedId === project.id ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Details */}
                  <div className="min-w-[200px]">
                    <p className="font-mono text-sm text-foreground mb-3">
                      {project.description}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground mb-4">
                      {project.details}
                    </p>
                    <button className="font-mono text-xs uppercase tracking-widest text-primary flex items-center gap-2 group/btn">
                      <span>View</span>
                      <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <ArrowUpRight className={`w-6 h-6 text-muted-foreground transition-all duration-300 ${
                hoveredId === project.id ? "text-primary translate-x-1 -translate-y-1" : ""
              }`} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
