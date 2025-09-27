import { useState, useEffect } from 'react';
import { Mail, Briefcase, Linkedin, Github, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/contexts/I18nContext';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { translations } = useI18n();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-light/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/30 rounded-full blur-lg animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-primary-glow/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-40 max-w-6xl mx-auto px-4 md:px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Location & Contact Info */}
          <div className="mb-6 md:mb-8 glass-card inline-block px-4 md:px-6 py-2 md:py-3">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-foreground/80">
              <span>📍 {translations.hero.location}</span>
              <span className="flex items-center gap-1">
                <Phone size={12} className="sm:hidden" />
                <Phone size={14} className="hidden sm:block" />
                <span className="text-xs sm:text-sm">01554300351 / 01208778686</span>
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 text-glow">
            {translations.hero.name}
            <span className="text-accent block md:inline md:ml-4">{translations.hero.lastName}</span>
          </h1>

          {/* Subtitle */}
          <div className="text-lg sm:text-2xl md:text-3xl text-white/90 mb-6 md:mb-8 font-light px-4">
            {translations.hero.title}
          </div>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
            {translations.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-300 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <Button 
              size="lg" 
              className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/25"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2" />
              {translations.hero.contactMe}
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              {translations.hero.viewProjects}
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <a href="https://linkedin.com/in/ahmed-hassan-shehata" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                {translations.hero.linkedin}
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            <a 
              href="https://github.com/ashmawymidxd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://t.me/G1_ahmed_hassan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;