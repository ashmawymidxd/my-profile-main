import { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  Phone,
  Download,
  Star,
  Zap,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSparkling, setIsSparkling] = useState(false);
  const { translations } = useI18n();

  useEffect(() => {
    setIsVisible(true);

    // Add sparkling effect every 3 seconds
    const sparkleInterval = setInterval(() => {
      setIsSparkling(true);
      setTimeout(() => setIsSparkling(false), 1000);
    }, 3000);

    return () => clearInterval(sparkleInterval);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "01554300351";
    const message = translations.hero.contactSlug;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "../assets/cv/ahmedhassan.pdf";
    link.download = "Ahmed_Hassan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed scale-110"
        style={{
          backgroundImage: `url(${heroBackground})`,
          transform: "translateZ(0)",
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-95"></div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/15 to-pink-900/20 animate-gradient-x"></div>
      </div>

      {/* Enhanced Floating Elements with More Magic */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-light/25 rounded-full blur-xl animate-float-slow"></div>
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/40 rounded-full blur-lg animate-float"
          style={{ animationDelay: "-2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-40 h-40 bg-primary-glow/20 rounded-full blur-2xl animate-float-slow"
          style={{ animationDelay: "-4s" }}
        ></div>

        {/* New Floating Elements */}
        <div
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/10 rounded-full blur-md animate-float"
          style={{ animationDelay: "-1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-accent/25 rounded-full blur-lg animate-float-slow"
          style={{ animationDelay: "-3s" }}
        ></div>

        {/* Sparkling Stars */}
        {isSparkling && (
          <>
            <div className="absolute top-1/4 right-1/4 animate-ping">
              <Star className="w-4 h-4 text-yellow-400/60" />
            </div>
            <div
              className="absolute bottom-1/3 left-1/5 animate-ping"
              style={{ animationDelay: "0.3s" }}
            >
              <Sparkles className="w-3 h-3 text-cyan-400/60" />
            </div>
            <div
              className="absolute top-2/3 right-1/5 animate-ping"
              style={{ animationDelay: "0.6s" }}
            >
              <Zap className="w-3 h-3 text-orange-400/60" />
            </div>
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-40 max-w-6xl mx-auto px-4 md:px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          {/* Enhanced Location & Contact Info */}
          <div className="mb-6 md:mb-8 glass-card-enhanced inline-block px-4 md:px-6 py-2 md:py-3 border border-white/20 backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-foreground/90">
              <span className="flex items-center gap-1">
                <span className="text-accent">📍</span>
                {translations.hero.location}
              </span>
              <span className="flex items-center gap-1">
                <Phone size={12} className="sm:hidden" />
                <Phone size={14} className="hidden sm:block" />
                <span className="text-xs sm:text-sm">
                  01554300351 / 01208778686
                </span>
              </span>
            </div>
          </div>

          {/* Enhanced Main Heading with Gradient Text */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent bg-300% animate-gradient bg-glow-xl">
              {translations.hero.name}
            </span>
            <span className="bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent bg-300% animate-gradient block md:inline md:ml-4 bg-glow-xl">
              {translations.hero.lastName}
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <div className="text-xl sm:text-3xl md:text-4xl text-white/95 mb-6 md:mb-8 font-light px-4">
            <span className="bg-gradient-to-r from-white/90 via-accent/90 to-white/90 bg-clip-text text-transparent">
              {translations.hero.title}
            </span>
          </div>

          {/* Enhanced Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/85 max-w-4xl mx-auto mb-8 md:mb-10 leading-relaxed px-4 font-light tracking-wide">
            {translations.hero.description}
          </p>

          {/* Enhanced CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-300 ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <Button
              size="lg"
              className="bg-white/25 hover:bg-white/35 text-white backdrop-blur-lg border border-white/40 hover:border-white/60 transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:scale-105 group"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              {translations.hero.contactMe}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent hover:bg-white/15 text-white border-white/40 hover:border-white/60 backdrop-blur-lg transition-all duration-300 hover:shadow-2xl hover:shadow-accent/25 hover:scale-105 group"
              onClick={handleDownloadCV}
            >
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              {translations.hero.download}
            </Button>

            {/* WhatsApp Button */}
            <Button
              size="lg"
              variant="outline"
              className="bg-green-600/20 hover:bg-green-600/30 text-white border-green-400/40 hover:border-green-400/60 backdrop-blur-lg transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/25 hover:scale-105 group"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              {translations.hero.whatsapp}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent hover:bg-white/15 text-white border-white/40 hover:border-white/60 backdrop-blur-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/25 hover:scale-105 group"
              asChild
            >
              <a
                href="https://linkedin.com/in/ahmed-hassan-shehata"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                {translations.hero.linkedin}
              </a>
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center gap-8 mt-12">
            <a
              href="https://github.com/ashmawymidxd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-all duration-300 hover:scale-125 transform bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm"
            >
              <Github size={24} />
            </a>
            <a
              href="https://t.me/G1_ahmed_hassan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-all duration-300 hover:scale-125 transform bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm"
            >
              <MessageCircle size={24} />
            </a>
            {/* WhatsApp Social Link */}
            <button
              onClick={handleWhatsAppClick}
              className="text-white/80 hover:text-white transition-all duration-300 hover:scale-125 transform bg-green-600/20 hover:bg-green-600/30 p-3 rounded-full backdrop-blur-sm border border-green-400/30"
            >
              <MessageCircle size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <div className="w-1 h-4 bg-accent rounded-full mt-3 animate-pulse shadow-lg shadow-accent/50"></div>
        </div>
      </div>

      {/* Add these styles to your CSS */}
      <style jsx>{`
        .glass-card-enhanced {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .bg-glow-xl {
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
        }

        @keyframes gradient-x {
          0%,
          100% {
            transform: translateX(0%);
          }
          50% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
