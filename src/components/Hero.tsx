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
  ArrowDown,
  Calendar,
  Coffee,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import cvFile from "@/assets/cv/Ahmed_Hassan_Full_Stack_CV.pdf";
import darkProfileImage from "@/assets/profile/profile.png";
import lightProfileImage from "@/assets/profile/profile.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { translations } = useI18n();

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+201554300351";
    const message = translations.hero.contactSlug;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
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
    { icon: Github, label: "GitHub", href: "https://github.com/ashmawymidxd" },
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
    { label: "Projects", value: "50+", icon: Code2 },
    { label: "Experience", value: "5+ Years", icon: Calendar },
    { label: "Clients", value: "30+", icon: Briefcase },
  ];

  const techStack = [
    "PHP",
    "Laravel",
    "Flask",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Oracle",
    "MongoDB",
    "MYSQL",
    "Redis",
    "Tailwind CSS",
    "Microservices",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 md:pt-28 px-4 md:px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Gradient orbs */}
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content (3 cols) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Status Badge */}
            <div
              className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-primary/20 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-foreground/80">
                Available for work
              </span>
              <span className="w-px h-4 bg-border" />
              <span className="flex items-center gap-1.5 text-sm text-primary font-medium">
                <Zap className="w-3.5 h-3.5" />
                Full Stack
              </span>
            </div>

            {/* Main Heading */}
            <div
              className={`space-y-3 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight">
                {translations.hero.name}{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                    {translations.hero.lastName}
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M2 8C50 2 150 2 198 8"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="text-primary/40"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                {translations.hero.title}
              </p>
            </div>

            {/* Description */}
            <p
              className={`text-base md:text-lg text-muted-foreground/80 max-w-2xl leading-relaxed transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {translations.hero.description}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-white rounded-3xl shadow-lg shadow-primary/25 dark:shadow-primary/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" />
                {translations.hero.contactMe}
                <ArrowDown className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-y-0.5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group border-border/50 text-foreground hover:bg-accent/5 hover:border-primary/40 rounded-3xl font-medium bg-white/50 dark:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
                onClick={handleDownloadCV}
              >
                <Download className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-0.5" />
                {translations.hero.download}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group border-green-500/30 text-green-600 dark:text-green-400 hover:bg-green-500/5 hover:border-green-500/50 rounded-3xl font-medium bg-green-500/5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                WhatsApp
              </Button>
            </div>

            {/* Stats Section */}
            <div
              className={`grid grid-cols-3 gap-4 transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative group text-center p-4 rounded-3xl glass-card border border-transparent hover:border-primary/20 transition-all duration-300"
                >
                  <stat.icon className="w-4 h-4 text-primary/60 mx-auto mb-2 transition-transform group-hover:scale-110" />
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Info & Social Links */}
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                {translations.hero.location}
              </div>

              <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                01554300351
              </div>

              <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />

              <div className="flex items-center gap-1">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image (2 cols) */}
          <div
            className={`lg:col-span-2 relative flex justify-center items-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div
              className="relative"
              style={{
                transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
              }}
            >
              {/* Outer glow ring */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 blur-2xl animate-pulse" />

              {/* Decorative dots ring */}
              <div className="absolute -inset-6 rounded-full opacity-20">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary animate-[spin_30s_linear_infinite]" />
              </div>

              {/* Main image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem]">
                {/* Rotating border gradient */}
                <div className="absolute inset-[-3px] rounded-full bg-gradient-to-r from-primary via-primary-glow to-primary animate-[spin_8s_linear_infinite] p-[3px]">
                  <div className="w-full h-full rounded-full bg-background" />
                </div>

                {/* Image with mask */}
                <div className="absolute inset-[3px] rounded-full overflow-hidden shadow-2xl shadow-primary/20">
                  {/* Dark mode image */}
                  <img
                    src={darkProfileImage}
                    alt={translations.hero.name}
                    className="hidden dark:block w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Light mode image */}
                  <img
                    src={lightProfileImage}
                    alt={translations.hero.name}
                    className="block dark:hidden w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Elements */}
              {/* Top Badge - Tech Stack */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                <div className="glass-card px-5 py-2.5 shadow-xl border border-primary/10">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                      Full Stack Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Badge - Experience */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10">
                <div className="glass-card px-5 py-2.5 shadow-xl border border-primary/10">
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-yellow-500" />
                    <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                      5+ Years Experience
                    </span>
                  </div>
                </div>
              </div>

              {/* Left Badge - Projects */}
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 z-10 hidden md:block">
                <div className="glass-card p-3 shadow-xl border border-primary/10">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Right Badge - Coffee */}
              <div className="absolute top-1/2 -right-6 -translate-y-1/2 z-10 hidden md:block">
                <div className="glass-card p-3 shadow-xl border border-primary/10">
                  <Coffee className="w-5 h-5 text-primary-glow" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Bar */}
        <div
          className={`mt-16 lg:mt-20 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="glass-card rounded-3xl p-6 border border-primary/10">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="font-medium">Tech Stack</span>
              </div>

              <div className="w-px h-8 bg-border hidden sm:block" />

              <div className="flex flex-wrap justify-center gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 text-xs font-medium text-foreground/80 bg-primary/5 border border-primary/10 rounded-full hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
