import { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  Phone,
  Download,
  MapPin,
  Code2,
  Briefcase,
  Award,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import cvFile from "@/assets/cv/Ahmed_Hassan_Full_Stack_CV.pdf";
import profileImage from "@/assets/profile/profile.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { translations } = useI18n();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+201554300351";
    const message = translations.hero.contactSlug;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Ahmed_Hassan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ashmawymidxd",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ahmed-hassan-shehata",
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      href: "https://t.me/G1_ahmed_hassan",
    },
  ];

  const stats = [
    { label: "Projects", value: "50+" },
    { label: "Experience", value: "5+ Years" },
    { label: "Clients", value: "30+" },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground/60">
                Available for work
              </span>
              <span className="w-px h-4 bg-border mx-2" />
              <span className="flex items-center gap-1 text-sm text-foreground/60">
                <Code2 className="w-4 h-4 text-primary" />
                Full Stack
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-4">
              {translations.hero.name}{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                {translations.hero.lastName}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
              {translations.hero.title}
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
              {translations.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-white rounded-lg shadow-lg shadow-primary/20 dark:shadow-primary/30 transition-all duration-300 hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="w-4 h-4 mr-2" />
                {translations.hero.contactMe}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-accent/5 hover:border-primary/30 rounded-lg font-medium bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105"
                onClick={handleDownloadCV}
              >
                <Download className="w-4 h-4 mr-2" />
                {translations.hero.download}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-accent/5 hover:border-primary/30 rounded-lg font-medium bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {translations.hero.whatsapp}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3 max-w-2xl">
              <div className="glass-card p-4 hover:border-primary/30 transition-all duration-300">
                <MapPin className="w-4 h-4 text-primary mb-3" />
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                  Location
                </div>
                <div className="text-sm text-foreground leading-snug">
                  {translations.hero.location}
                </div>
              </div>

              <div className="glass-card p-4 hover:border-primary/30 transition-all duration-300">
                <Phone className="w-4 h-4 text-primary mb-3" />
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                  Phone
                </div>
                <div className="text-sm text-foreground leading-snug">
                  01554300351
                </div>
              </div>

              <div className="glass-card p-4 hover:border-primary/30 transition-all duration-300">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">
                  Connect
                </div>
                <div className="flex items-center gap-3">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card p-4 hover:border-primary/30 transition-all duration-300">
                <span className="block w-2 h-2 rounded-full bg-primary mb-3 mt-1 animate-pulse" />
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                  Status
                </div>
                <div className="text-sm text-foreground leading-snug">
                  Open to opportunities
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div
            className={`relative flex justify-center items-center transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Glowing background ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-glow opacity-20 blur-2xl animate-pulse" />
              
              {/* Main image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Decorative ring */}
                <div className="absolute inset-[-8px] rounded-full border-2 border-primary/20 animate-spin-slow" />
                <div className="absolute inset-[-16px] rounded-full border border-primary/10" />
                
                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-primary/20 dark:shadow-primary/30">
                  <img
                    src={profileImage}
                    alt={translations.hero.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-2 -right-2 glass-card p-3 shadow-xl">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div className="absolute -top-2 -left-2 glass-card p-3 shadow-xl">
                <Briefcase className="w-5 h-5 text-primary-glow" />
              </div>

              {/* Tech stack floating tags */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 glass-card px-4 py-1.5 shadow-lg backdrop-blur-sm">
                <span className="text-xs font-medium text-foreground">
                  React • Node • TypeScript
                </span>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 glass-card px-4 py-1.5 shadow-lg backdrop-blur-sm">
                <span className="text-xs font-medium text-foreground">
                  Full Stack Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add to your global CSS or tailwind config */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;