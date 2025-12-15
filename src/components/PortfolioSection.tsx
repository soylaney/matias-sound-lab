import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

type Category = "all" | "advertising" | "film" | "art" | "music" | "theater";

interface Project {
  id: number;
  title: string;
  category: Category;
  client: string;
  year: number | string;
  tagline: string;
  role: string;
  note?: string;
  mediaType: "audio" | "video";
  mediaUrl: string;
}

const projects: Project[] = [
  // ADVERTISING & CAMPAIGNS
  { id: 1, title: "NEW YORK", category: "advertising", client: "Café Bustelo / BBH USA", year: "", tagline: "NYC in every sip", role: "Sound Design & Mixing", mediaType: "video", mediaUrl: "" },
  { id: 2, title: "HURACÁN", category: "advertising", client: "Reinserta / Grey México", year: "", tagline: "Social impact - Hurricane Otis", role: "Sound Designer", note: "Social impact campaign on Hurricane Otis in Acapulco", mediaType: "video", mediaUrl: "" },
  { id: 4, title: "TEAM YAPE", category: "advertising", client: "Yape / 121 Latam", year: "", tagline: "Sports team launch", role: "Sound Design & Mixing", mediaType: "video", mediaUrl: "" },
  { id: 5, title: "ASMR", category: "advertising", client: "KFC / Linda TV", year: "", tagline: "Crunchy sound textures", role: "Sound Design & Mixing", mediaType: "video", mediaUrl: "" },
  { id: 6, title: "VIVE MÁS SALUDABLE", category: "advertising", client: "Disney / Linda TV", year: "", tagline: "Live Healthier", role: "Sound Design & Mixing", mediaType: "video", mediaUrl: "" },
  { id: 7, title: "SENDERO SUR", category: "advertising", client: "Cerveza Patagonia / R/GA", year: "", tagline: "Southern trails", role: "Sound Design & Mixing", mediaType: "video", mediaUrl: "" },
  { id: 8, title: "EL SABOR IRRESISTIBLE", category: "advertising", client: "Hellmann's / Linda TV", year: "", tagline: "Irresistible Taste", role: "Sound Design & Mixing", mediaType: "video", mediaUrl: "" },
  { id: 9, title: "UN VERANO PARA BRAHMEARLA", category: "advertising", client: "Cerveza Brahma / Mutato BA", year: "", tagline: "Summer vibes", role: "Sound Design & Mixing", mediaType: "video", mediaUrl: "" },
  
  // FILM & DOCUMENTARY
  { id: 10, title: "SOBRE NADAR", category: "film", client: "Feature Film", year: "", tagline: "BEST SOUND Award Winner", role: "Sound Design & Mixing", note: "Festival Nacional de Cine Winner", mediaType: "video", mediaUrl: "" },
  { id: 11, title: "DIARIO ÍGNEO", category: "film", client: "Documentary Short", year: "", tagline: "Cumbre Vieja eruption", role: "Sound Designer", note: "La Palma volcano documentary", mediaType: "video", mediaUrl: "" },
  { id: 12, title: "TINTA", category: "film", client: "Short Film", year: "", tagline: "Visual storytelling", role: "Sound Design & Mixing", mediaType: "video", mediaUrl: "" },
  
  // COLLABORATIVE ART
  { id: 13, title: "EL ÚLTIMO HOMBRE DE EPECUÉN", category: "art", client: "PAGANA CASA DE ARTE", year: "", tagline: "Multimedia exhibition", role: "Sound Design & Soundscapes", note: "With Carolina Bonfanti Mele", mediaType: "audio", mediaUrl: "" },
  { id: 14, title: "LA GALERÍA Y SUS VISITADORES", category: "art", client: "Jacques Martínez Gallery", year: "", tagline: "Participatory art", role: "Sound Art Installation", mediaType: "audio", mediaUrl: "" },
  { id: 15, title: "DE CÓMO LAS BESTIARIAS EXISTEN", category: "art", client: "Jacques Martínez Gallery", year: "", tagline: "Exhibition", role: "Sound Art", note: "Sound installation for Carolina Bonfanti Mele made with Victoria Barca's composition", mediaType: "audio", mediaUrl: "" },
  { id: 16, title: "FR-BB COLLECTIVE", category: "art", client: "Collective", year: "", tagline: "Experimental collaboration", role: "Participating Artist", mediaType: "audio", mediaUrl: "" },
  
  // MUSIC & RECORD PRODUCTION
  { id: 17, title: "ARCHIPIÉLAGOS", category: "music", client: "Album", year: "", tagline: "Full album production", role: "Recording, Mixing, Co-production", mediaType: "audio", mediaUrl: "" },
  
  // THEATER
  { id: 18, title: "NO (TAN) HAMLET", category: "theater", client: "Theater", year: "", tagline: "Live orchestra", role: "Sound Engineer, Editor, Musician", mediaType: "audio", mediaUrl: "" },
  { id: 19, title: "GRAN CHACO", category: "theater", client: "Scenic Documentary", year: "", tagline: "Documentary theater", role: "Sound Design", mediaType: "audio", mediaUrl: "" },
  { id: 20, title: "HOLYFOOD", category: "theater", client: "Theater", year: "", tagline: "Theatrical sound", role: "Sound Design", mediaType: "audio", mediaUrl: "" },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "ALL" },
  { value: "advertising", label: "ADS" },
  { value: "film", label: "FILM" },
  { value: "art", label: "ART" },
  { value: "music", label: "MUSIC" },
  { value: "theater", label: "THEATER" },
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
                <div className="flex items-start justify-end mb-4">
                  <span className="font-mono text-xs uppercase text-muted-foreground">
                    {project.client}
                  </span>
                </div>
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-2 scribble inline-block">
                  {project.title}
                </h3>
                <p className="font-mono text-sm text-muted-foreground uppercase mb-1">
                  {project.tagline}
                </p>
                <p className="font-mono text-xs text-primary uppercase">
                  {project.role}
                </p>
                {project.note && (
                  <p className="font-mono text-xs text-muted-foreground mt-2 italic">
                    {project.note}
                  </p>
                )}
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
