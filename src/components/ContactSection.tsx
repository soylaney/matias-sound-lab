import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", project: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({ title: "SENT!", description: "I'll hit you back within 48 hours." });
    setFormData({ name: "", email: "", project: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const links = [
    { label: "IMDB", url: "#" },
    { label: "LINKEDIN", url: "#" },
    { label: "SOUNDCLOUD", url: "#" },
  ];

  return (
    <section className="py-16 px-4 bg-background border-t-4 border-foreground relative overflow-hidden">
      {/* Background text */}
      <div className="absolute bottom-0 right-0 font-display text-[25vw] text-muted/50 leading-none pointer-events-none">
        HI!
      </div>

      {/* Header */}
      <div className="mb-12 relative z-10">
        <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-2">
          [ Contact ]
        </p>
        <h2 className="font-display text-huge text-foreground">
          LET'S MAKE
          <br />
          <span className="text-primary">NOISE</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
        {/* Left - info */}
        <div className="space-y-8">
          <p className="font-display text-3xl md:text-4xl text-foreground">
            Got a project that needs sonic rebellion? Hit me up.
          </p>

          <div>
            <a
              href="mailto:hello@matiaslaney.com"
              className="inline-block border-4 border-foreground bg-accent text-accent-foreground px-6 py-4 font-display text-2xl uppercase brutal-hover"
            >
              hello@matiaslaney.com
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="border-2 border-foreground px-4 py-2 font-mono text-sm uppercase flex items-center gap-2 hover:bg-foreground hover:text-background transition-all"
              >
                {link.label}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="border-l-4 border-primary pl-4">
            <p className="font-mono text-sm text-muted-foreground">
              Based in Barcelona • Working globally<br />
              Accepting select projects for 2025
            </p>
          </div>
        </div>

        {/* Right - form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="font-mono text-sm uppercase tracking-widest text-muted-foreground block mb-2">
              Your name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-punk"
              placeholder="Who are you?"
            />
          </div>

          <div>
            <label className="font-mono text-sm uppercase tracking-widest text-muted-foreground block mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-punk"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="font-mono text-sm uppercase tracking-widest text-muted-foreground block mb-2">
              What kind of project?
            </label>
            <select
              name="project"
              value={formData.project}
              onChange={handleChange}
              required
              className="input-punk bg-transparent"
            >
              <option value="">Pick one</option>
              <option value="film">Film / TV</option>
              <option value="commercial">Commercial</option>
              <option value="documentary">Documentary</option>
              <option value="art">Sound Art</option>
              <option value="other">Something weird</option>
            </select>
          </div>

          <div>
            <label className="font-mono text-sm uppercase tracking-widest text-muted-foreground block mb-2">
              Tell me about it
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="input-punk resize-none"
              placeholder="What are we breaking?"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full border-4 border-foreground bg-primary text-primary-foreground py-6 font-display text-3xl uppercase brutal-hover disabled:opacity-50 flex items-center justify-center gap-4"
          >
            {isSubmitting ? "SENDING..." : (
              <>
                SEND IT <Send className="w-6 h-6" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
