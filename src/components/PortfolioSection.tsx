import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Film, Tv, FileVideo, Palette, ExternalLink } from "lucide-react";

type Category = "all" | "commercials" | "films" | "documentaries" | "soundart";

interface Project {
  id: number;
  title: string;
  category: Category;
  client: string;
  year: number;
  description: string;
  role: string;
  mediaType: "audio" | "video";
  mediaUrl: string;
  details: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nike — Just Sound It",
    category: "commercials",
    client: "Nike Inc.",
    year: 2024,
    description: "Global campaign featuring immersive athletic soundscapes",
    role: "Sound Design & Mix",
    mediaType: "video",
    mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    details: "Created a sonic identity for Nike's global campaign, featuring layered athletic soundscapes that capture the intensity of competition. The mix incorporates field recordings from actual athletes combined with synthesized textures.",
  },
  {
    id: 2,
    title: "The Last Echo",
    category: "films",
    client: "A24 Films",
    year: 2023,
    description: "Psychological thriller with layered ambient textures",
    role: "Sound Design & Dialogue Edit",
    mediaType: "audio",
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    details: "A 90-minute psychological thriller requiring delicate balance between silence and tension. Developed custom reverb spaces to represent the protagonist's deteriorating mental state.",
  },
  {
    id: 3,
    title: "Ocean Depths",
    category: "documentaries",
    client: "National Geographic",
    year: 2024,
    description: "Underwater documentary with innovative sound capture",
    role: "Field Recording & Mix",
    mediaType: "video",
    mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    details: "Pioneered new hydrophone techniques to capture the authentic sounds of marine life. The documentary features over 200 hours of underwater recordings mixed in Dolby Atmos.",
  },
  {
    id: 4,
    title: "Resonance Chamber",
    category: "soundart",
    client: "MoMA PS1",
    year: 2023,
    description: "Interactive spatial audio installation",
    role: "Composition & Technical Design",
    mediaType: "audio",
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    details: "An immersive 8-channel installation exploring the relationship between physical movement and sonic response. Visitors trigger generative compositions through motion sensors.",
  },
  {
    id: 5,
    title: "Coca-Cola — Refresh",
    category: "commercials",
    client: "Coca-Cola",
    year: 2024,
    description: "Signature sound branding for global summer campaign",
    role: "Sound Design & Brand Audio",
    mediaType: "video",
    mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    details: "Developed the iconic 'fizz and pour' sonic signature used across all summer campaign materials. The sound design emphasizes freshness and refreshment through carefully crafted foley.",
  },
  {
    id: 6,
    title: "Neon Nights",
    category: "films",
    client: "Paramount Pictures",
    year: 2023,
    description: "Sci-fi feature with synthesized soundscapes",
    role: "Sound Design & Foley",
    mediaType: "audio",
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    details: "Created a futuristic sonic palette using modular synthesizers and processed found sounds. Every vehicle, door, and interface has a unique audio signature reflecting the film's neon-drenched aesthetic.",
  },
];

const categories: { value: Category; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All", icon: null },
  { value: "commercials", label: "Commercials", icon: <Tv className="w-4 h-4" /> },
  { value: "films", label: "Films", icon: <Film className="w-4 h-4" /> },
  { value: "documentaries", label: "Docs", icon: <FileVideo className="w-4 h-4" /> },
  { value: "soundart", label: "Sound Art", icon: <Palette className="w-4 h-4" /> },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [mutedId, setMutedId] = useState<number | null>(null);
  const mediaRefs = useRef<{ [key: number]: HTMLVideoElement | HTMLAudioElement | null }>({});

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const handlePlayPause = (id: number) => {
    const media = mediaRefs.current[id];
    if (!media) return;

    if (playingId === id) {
      media.pause();
      setPlayingId(null);
    } else {
      // Pause any currently playing media
      if (playingId && mediaRefs.current[playingId]) {
        mediaRefs.current[playingId]?.pause();
      }
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
    <section className="min-h-screen py-32 px-6 bg-background relative scanlines">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-4">
            [ Selected Work ]
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Portfolio
          </h2>
          <div className="gradient-line max-w-xs" />
        </div>

        {/* Category filters - 90s style tabs */}
        <div className="flex flex-wrap gap-1 mb-16 bevel-border p-1 bg-muted/30 w-fit">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`font-mono text-xs uppercase tracking-wider px-4 py-2 transition-all duration-200 ${
                activeCategory === cat.value 
                  ? "bg-primary text-primary-foreground bevel-border" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`expand-card animate-fade-in cursor-pointer ${
                expandedId === project.id ? "lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setExpandedId(project.id)}
              onMouseLeave={() => {
                setExpandedId(null);
                // Pause media when leaving
                if (playingId === project.id) {
                  mediaRefs.current[project.id]?.pause();
                  setPlayingId(null);
                }
              }}
            >
              <div className={`p-6 transition-all duration-500 ${
                expandedId === project.id ? "lg:flex lg:gap-8" : ""
              }`}>
                {/* Media Section */}
                <div className={`media-frame mb-6 ${
                  expandedId === project.id ? "lg:mb-0 lg:w-1/2 lg:flex-shrink-0" : ""
                }`}>
                  <div className="relative aspect-video bg-background/50 crt-glow">
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
                      <div className="w-full h-full flex items-center justify-center">
                        <audio
                          ref={(el) => { mediaRefs.current[project.id] = el; }}
                          src={project.mediaUrl}
                          loop
                        />
                        {/* Waveform visualization for audio */}
                        <div className="flex items-center gap-1 h-16 px-4">
                          {Array.from({ length: 32 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-1 bg-primary transition-all duration-150 ${
                                playingId === project.id ? "waveform-bar active" : ""
                              }`}
                              style={{
                                height: `${20 + Math.random() * 80}%`,
                                animationDelay: `${i * 40}ms`,
                                opacity: expandedId === project.id || playingId === project.id ? 1 : 0.5,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Play/Pause overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-background/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayPause(project.id);
                        }}
                        className="w-14 h-14 flex items-center justify-center bg-primary/90 text-primary-foreground hover:bg-primary transition-colors"
                      >
                        {playingId === project.id ? (
                          <Pause className="w-6 h-6" />
                        ) : (
                          <Play className="w-6 h-6 ml-1" />
                        )}
                      </button>
                    </div>

                    {/* Media controls bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-background/80 px-3 py-2 flex items-center justify-between">
                      <span className="font-mono text-xs text-primary uppercase">
                        {project.mediaType === "video" ? "▶ VIDEO" : "♪ AUDIO"}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMute(project.id);
                        }}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {mutedId === project.id ? (
                          <VolumeX className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                        {project.category === "soundart" ? "Sound Art" : project.category}
                      </p>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground bevel-border px-2 py-1 bg-muted/30">
                      {project.year}
                    </span>
                  </div>

                  {/* Client & Role */}
                  <div className="flex items-center gap-4 mb-4 font-mono text-sm">
                    <span className="text-foreground">{project.client}</span>
                    <span className="text-muted-foreground">|</span>
                    <span className="text-muted-foreground">{project.role}</span>
                  </div>

                  {/* Description */}
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Expanded details */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedId === project.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="pt-4 border-t border-border">
                      <p className="font-mono text-sm text-foreground/80 leading-relaxed mb-6">
                        {project.details}
                      </p>
                      <button className="pro-button flex items-center gap-2 text-xs">
                        <span>View Full Project</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
