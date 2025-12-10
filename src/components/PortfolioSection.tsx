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
  role: string;
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
    title: "Refresh",
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

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Work" },
  { value: "commercials", label: "Commercials" },
  { value: "films", label: "Film" },
  { value: "documentaries", label: "Documentary" },
  { value: "soundart", label: "Sound Art" },
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
    <section className="py-32 px-6 lg:px-12 bg-background relative">
      {/* Ambient backgrounds */}
      <div className="ambient-bg w-[400px] h-[400px] bg-secondary top-1/4 -right-32" />
      <div className="ambient-bg w-[300px] h-[300px] bg-accent bottom-1/3 -left-24" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <p className="font-body text-sm text-primary mb-4 tracking-wide animate-fade-in">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in stagger-1">
            Portfolio
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl animate-fade-in stagger-2">
            A curated selection of sound design work across film, advertising, and art installations.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-16 animate-fade-in stagger-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 font-body text-sm transition-all duration-300 rounded-sm ${
                activeCategory === cat.value 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30"
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
              className={`gallery-card animate-fade-in cursor-pointer ${
                expandedId === project.id ? "lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setExpandedId(project.id)}
              onMouseLeave={() => {
                setExpandedId(null);
                if (playingId === project.id) {
                  mediaRefs.current[project.id]?.pause();
                  setPlayingId(null);
                }
              }}
            >
              <div className={`transition-all duration-500 ${
                expandedId === project.id ? "lg:flex" : ""
              }`}>
                {/* Media Section */}
                <div className={`media-container ${
                  expandedId === project.id ? "lg:w-1/2 lg:flex-shrink-0" : ""
                }`}>
                  <div className="relative aspect-video">
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
                      <div className="w-full h-full flex items-center justify-center bg-muted/20">
                        <audio
                          ref={(el) => { mediaRefs.current[project.id] = el; }}
                          src={project.mediaUrl}
                          loop
                        />
                        {/* Waveform visualization */}
                        <div className="flex items-center gap-[3px] h-20 px-6">
                          {Array.from({ length: 40 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-[3px] rounded-full bg-primary transition-all duration-150 ${
                                playingId === project.id ? "waveform-bar active" : ""
                              }`}
                              style={{
                                height: `${15 + Math.random() * 85}%`,
                                animationDelay: `${i * 30}ms`,
                                opacity: expandedId === project.id || playingId === project.id ? 1 : 0.4,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Play/Pause overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayPause(project.id);
                        }}
                        className="w-16 h-16 flex items-center justify-center bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform duration-300"
                      >
                        {playingId === project.id ? (
                          <Pause className="w-6 h-6" />
                        ) : (
                          <Play className="w-6 h-6 ml-1" />
                        )}
                      </button>
                    </div>

                    {/* Media type indicator */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                      <span className="font-body text-xs text-foreground/80 bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                        {project.mediaType === "video" ? "Video" : "Audio"}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMute(project.id);
                        }}
                        className="text-foreground/80 hover:text-foreground bg-background/60 backdrop-blur-sm p-1.5 rounded-sm transition-colors"
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
                <div className="p-8 flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <p className="font-body text-xs text-primary uppercase tracking-wider">
                      {project.client} — {project.year}
                    </p>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>

                  <p className="font-body text-sm text-muted-foreground mb-4">
                    {project.role}
                  </p>

                  <p className="font-body text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Expanded details */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedId === project.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="pt-4 border-t border-border">
                      <p className="font-body text-foreground/80 leading-relaxed mb-6">
                        {project.details}
                      </p>
                      <button className="btn-outline flex items-center gap-2 text-xs py-3 px-6">
                        <span>View Project</span>
                        <ArrowUpRight className="w-4 h-4" />
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
