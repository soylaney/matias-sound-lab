import { useState } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
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
    <section className="min-h-screen py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Section window */}
        <div className="bevel-frame">
          {/* Title bar */}
          <div className="window-titlebar">
            <span>contact.html</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 bevel-frame" />
              <div className="w-3 h-3 bevel-frame" />
              <div className="w-3 h-3 bevel-frame" />
            </div>
          </div>

          <div className="p-6">
            {/* Section header */}
            <div className="mb-8 text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                Get In Touch
              </h2>
              <p className="text-sm text-muted-foreground">
                Inquiries for projects and collaborations
              </p>
              <div className="retro-divider max-w-xs mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Contact info */}
              <div className="space-y-6">
                <div className="bevel-frame-inset p-4 animate-fade-in">
                  <h3 className="text-sm uppercase tracking-wide text-primary mb-4">Direct Contact</h3>
                  
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="py-2">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            <span className="text-xs text-muted-foreground">Email:</span>
                          </div>
                        </td>
                        <td className="py-2">
                          <a href="mailto:hello@matiaslaney.com" className="retro-link text-sm">
                            hello@matiaslaney.com
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-secondary" />
                            <span className="text-xs text-muted-foreground">Location:</span>
                          </div>
                        </td>
                        <td className="py-2">
                          <span className="text-sm text-foreground">New York City, USA</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bevel-frame-inset p-4 animate-fade-in stagger-1">
                  <h3 className="text-sm uppercase tracking-wide text-accent mb-4">Online Profiles</h3>
                  
                  <div className="space-y-2">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ArrowUpRight className="w-3 h-3" />
                        <span className="retro-link">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bevel-frame-inset p-4 animate-fade-in stagger-2">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Availability:</strong> Currently accepting 
                    select projects for 2025. For urgent inquiries, please indicate in your message.
                  </p>
                </div>
              </div>

              {/* Contact form */}
              <div className="bevel-frame-inset p-4 animate-fade-in stagger-2">
                <h3 className="text-sm uppercase tracking-wide text-primary mb-4">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="retro-input w-full"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-muted-foreground block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="retro-input w-full"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-muted-foreground block mb-1">
                      Project Type *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="retro-input w-full"
                    >
                      <option value="">-- Select --</option>
                      <option value="commercial">Commercial / Advertising</option>
                      <option value="film">Film / Television</option>
                      <option value="documentary">Documentary</option>
                      <option value="soundart">Sound Art / Installation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-muted-foreground block mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="retro-input w-full resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="retro-button-primary w-full"
                  >
                    {isSubmitting ? "Sending..." : "[ Submit Form ]"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
