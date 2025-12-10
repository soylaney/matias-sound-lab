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
    <section className="min-h-screen py-32 px-6 bg-background relative">
      <div className="container mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-20">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact
          </h2>
          <div className="gradient-line max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div className="space-y-12">
            <div className="animate-fade-in">
              <h3 className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Direct
              </h3>
              
              <div className="space-y-4">
                <a href="mailto:hello@matiaslaney.com" className="flex items-center gap-4 group">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-mono text-foreground group-hover:text-primary transition-colors duration-300">
                    hello@matiaslaney.com
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="font-mono text-foreground">
                    New York City, USA
                  </span>
                </div>
              </div>
            </div>

            <div className="animate-fade-in stagger-1">
              <h3 className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Profiles
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>

            <div className="animate-fade-in stagger-2">
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Currently accepting select projects for 2025. 
                For urgent inquiries, please indicate in your message.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="pro-card animate-fade-in stagger-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted/50 border border-border px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted/50 border border-border px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  Project Type
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted/50 border border-border px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-300"
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
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-muted/50 border border-border px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="pro-button-filled w-full flex items-center justify-center gap-3"
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
