import { useState } from "react";
import { Mail, MapPin, Send, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "MESSAGE SENT!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { label: "IMDB", url: "#" },
    { label: "LINKEDIN", url: "#" },
    { label: "SOUNDCLOUD", url: "#" },
    { label: "VIMEO", url: "#" },
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-background relative starfield">
      <div className="absolute inset-0 scanlines pointer-events-none opacity-50" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-border" />
            <span className="font-pixel text-sm text-muted-foreground">{"<<<"}</span>
            <h2 className="font-arcade text-xl md:text-2xl text-accent neon-text-green">
              CONTACT
            </h2>
            <span className="font-pixel text-sm text-muted-foreground">{">>>"}</span>
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-border" />
          </div>
          <p className="font-pixel text-lg text-muted-foreground">
            LET'S CREATE SOMETHING AMAZING TOGETHER
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="retro-card animate-fade-in">
              <h3 className="font-arcade text-sm text-primary neon-text-cyan mb-4">
                {">>>"} GET IN TOUCH
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-pixel text-lg text-foreground">
                    hello@matiaslaney.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="font-pixel text-lg text-foreground">
                    New York City, USA
                  </span>
                </div>
              </div>
            </div>

            <div className="retro-card animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h3 className="font-arcade text-sm text-secondary neon-text-pink mb-4">
                {">>>"} FOLLOW ME
              </h3>
              
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="retro-button flex items-center justify-center gap-2 text-xs"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>

            {/* Guestbook teaser */}
            <div className="retro-card animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="text-center">
                <span className="font-pixel text-sm text-neon-yellow blink">★</span>
                <span className="font-pixel text-sm text-muted-foreground mx-2">
                  SIGN MY GUESTBOOK
                </span>
                <span className="font-pixel text-sm text-neon-yellow blink">★</span>
                <p className="font-pixel text-xs text-muted-foreground mt-2">
                  (coming soon...)
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="retro-card animate-fade-in" style={{ animationDelay: "150ms" }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-destructive" />
              <div className="w-3 h-3 bg-neon-yellow" />
              <div className="w-3 h-3 bg-accent" />
              <span className="font-pixel text-xs text-muted-foreground ml-2">
                new_message.exe
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-pixel text-sm text-muted-foreground block mb-2">
                  {">"} YOUR NAME:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted border-2 border-border p-3 font-pixel text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label className="font-pixel text-sm text-muted-foreground block mb-2">
                  {">"} YOUR EMAIL:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted border-2 border-border p-3 font-pixel text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="font-pixel text-sm text-muted-foreground block mb-2">
                  {">"} PROJECT TYPE:
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted border-2 border-border p-3 font-pixel text-foreground focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select a category...</option>
                  <option value="commercial">Commercial / Advertising</option>
                  <option value="film">Film / TV</option>
                  <option value="documentary">Documentary</option>
                  <option value="soundart">Sound Art / Installation</option>
                  <option value="other">Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="font-pixel text-sm text-muted-foreground block mb-2">
                  {">"} YOUR MESSAGE:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-muted border-2 border-border p-3 font-pixel text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="retro-button w-full flex items-center justify-center gap-2 text-base py-4"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">◐</span> SENDING...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> SEND MESSAGE
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
