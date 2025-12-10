import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Message sent",
      description: "I'll be in touch within 48 hours.",
    });
    setFormData({ name: "", email: "", project: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const links = [
    { label: "IMDb", url: "#" },
    { label: "LinkedIn", url: "#" },
    { label: "SoundCloud", url: "#" },
    { label: "Vimeo", url: "#" },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-background relative grain">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 animate-in">
            Contact
          </p>
          <h2 className="font-serif text-6xl md:text-8xl italic text-foreground animate-in delay-1">
            Let's talk
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div className="space-y-12">
            <div className="animate-in delay-2">
              <p className="font-serif text-2xl md:text-3xl italic text-foreground mb-8">
                Have a project that needs sonic identity? 
                An unconventional idea? A vision?
              </p>
              <p className="font-mono text-sm text-muted-foreground">
                I'm selective about projects—looking for collaborators 
                who value craft and aren't afraid to push boundaries.
              </p>
            </div>

            <div className="space-y-6 animate-in delay-3">
              <a 
                href="mailto:hello@matiaslaney.com" 
                className="link-experimental font-serif text-3xl md:text-4xl italic text-foreground inline-block"
              >
                hello@matiaslaney.com
              </a>
              <p className="font-mono text-sm text-muted-foreground">
                New York City, USA
              </p>
            </div>

            <div className="flex flex-wrap gap-6 animate-in delay-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-border animate-in delay-5">
              <p className="font-mono text-xs text-muted-foreground">
                Currently accepting select projects for 2025.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-8 animate-in delay-3">
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-4">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-raw font-serif text-xl italic"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-4">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-raw font-serif text-xl italic"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-4">
                Project type
              </label>
              <select
                name="project"
                value={formData.project}
                onChange={handleChange}
                required
                className="input-raw font-serif text-xl italic bg-transparent"
              >
                <option value="" className="bg-background">Select</option>
                <option value="film" className="bg-background">Film / TV</option>
                <option value="commercial" className="bg-background">Commercial</option>
                <option value="documentary" className="bg-background">Documentary</option>
                <option value="art" className="bg-background">Sound Art / Installation</option>
                <option value="other" className="bg-background">Something else</option>
              </select>
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-4">
                Tell me about it
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="input-raw font-serif text-xl italic resize-none"
                placeholder="What are we making?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full py-6 bg-foreground text-background font-mono text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send it
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
