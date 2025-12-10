import { useState } from "react";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";
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

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent",
      description: "Thank you for reaching out. I'll respond within 48 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { label: "IMDb", url: "#" },
    { label: "LinkedIn", url: "#" },
    { label: "SoundCloud", url: "#" },
    { label: "Vimeo", url: "#" },
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-background relative">
      {/* Ambient backgrounds */}
      <div className="ambient-bg w-[300px] h-[300px] bg-accent bottom-0 right-1/4" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <p className="font-body text-sm text-primary mb-4 tracking-wide animate-fade-in">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in stagger-1">
            Let's create
            <br />
            something
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact info */}
          <div className="space-y-12">
            <div className="animate-fade-in stagger-2">
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                Direct
              </h3>
              
              <div className="space-y-4">
                <a href="mailto:hello@matiaslaney.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center bg-muted/30 border border-border group-hover:border-primary/50 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-body text-foreground group-hover:text-primary transition-colors duration-300">
                    hello@matiaslaney.com
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-muted/30 border border-border">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="font-body text-foreground">
                    New York City, USA
                  </span>
                </div>
              </div>
            </div>

            <div className="animate-fade-in stagger-3">
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                Profiles
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>

            <div className="animate-fade-in stagger-4">
              <p className="font-body text-muted-foreground leading-relaxed">
                Currently accepting select projects for 2025. 
                For urgent inquiries, please indicate in your message.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="card-minimal animate-fade-in stagger-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-minimal"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-minimal"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                  Project Type
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-minimal"
                >
                  <option value="">Select category</option>
                  <option value="commercial">Commercial / Advertising</option>
                  <option value="film">Film / Television</option>
                  <option value="documentary">Documentary</option>
                  <option value="soundart">Sound Art / Installation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-minimal resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
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
