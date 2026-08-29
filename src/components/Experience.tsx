import { useState, useEffect, useRef } from 'react';
import {
  Briefcase,
  Calendar,
  ExternalLink,
  ArrowRight,
  ChevronDown,
  MapPin,
  Sparkles,
  Building2,
  MailIcon,
  Palette,
  Code2,
  TrendingUp,
} from 'lucide-react';
import { useI18n } from '@/contexts/I18nContext';

const Experience = () => {
  const { translations } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIconByType = (type: string) => {
    const typeLower = type?.toLowerCase() || '';
    if (typeLower.includes('MailIcon') || typeLower.includes('reserve') || typeLower.includes('officer')) {
      return MailIcon;
    }
    if (typeLower.includes('design') || typeLower.includes('graphic')) {
      return Palette;
    }
    if (typeLower.includes('full') || typeLower.includes('stack') || typeLower.includes('developer')) {
      return Code2;
    }
    return Briefcase;
  };

  const getColorConfig = (color: string) => {
    const configs: Record<string, { bg: string; text: string; border: string; gradient: string; iconBg: string }> = {
      primary: {
        bg: 'bg-primary/10',
        text: 'text-primary',
        border: 'border-primary/20',
        gradient: 'from-primary to-cyan-500',
        iconBg: 'from-primary/20 to-cyan-500/20',
      },
      accent: {
        bg: 'bg-accent/10',
        text: 'text-accent',
        border: 'border-accent/20',
        gradient: 'from-accent to-orange-500',
        iconBg: 'from-accent/20 to-orange-500/20',
      },
      'primary-glow': {
        bg: 'bg-purple-500/10',
        text: 'text-purple-500',
        border: 'border-purple-500/20',
        gradient: 'from-purple-500 to-pink-500',
        iconBg: 'from-purple-500/20 to-pink-500/20',
      },
    };
    return configs[color] || configs.primary;
  };

  const experiences = [
    {
      title: translations.experience.jobs.reserveOfficer.title,
      period: translations.experience.jobs.reserveOfficer.period,
      description: translations.experience.jobs.reserveOfficer.description,
      type: translations.experience.jobs.reserveOfficer.type,
      color: 'accent',
      location: 'Egypt',
    },
    {
      title: translations.experience.jobs.fullStack.title,
      period: translations.experience.jobs.fullStack.period,
      description: translations.experience.jobs.fullStack.description,
      type: translations.experience.jobs.fullStack.type,
      color: 'primary',
      location: 'Remote',
    },
    {
      title: translations.experience.jobs.webDeveloper.title,
      period: translations.experience.jobs.webDeveloper.period,
      description: translations.experience.jobs.webDeveloper.description,
      type: translations.experience.jobs.webDeveloper.type,
      color: 'accent',
      location: 'Egypt',
    },
    {
      title: translations.experience.jobs.graphicDesigner.title,
      period: translations.experience.jobs.graphicDesigner.period,
      description: translations.experience.jobs.graphicDesigner.description,
      type: translations.experience.jobs.graphicDesigner.type,
      color: 'primary-glow',
      location: 'Freelance',
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-6 md:py-12 px-4 md:px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-primary/10 mb-6">
            <TrendingUp className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              Career Journey
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {translations.experience.title}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {translations.experience.subtitle}
          </p>

          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Animated Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
            <div
              className={`w-full h-full bg-gradient-to-b from-primary via-accent to-primary-glow transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                maskImage: isVisible
                  ? 'linear-gradient(to bottom, black 0%, black 100%)'
                  : 'linear-gradient(to bottom, black 0%, transparent 0%)',
                WebkitMaskImage: isVisible
                  ? 'linear-gradient(to bottom, black 0%, black 100%)'
                  : 'linear-gradient(to bottom, black 0%, transparent 0%)',
                transitionProperty: 'mask-image, -webkit-mask-image, opacity',
              }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-16 md:space-y-20">
            {experiences.map((exp, index) => {
              const Icon = getIconByType(exp.type);
              const colors = getColorConfig(exp.color);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 z-20">
                    <div
                      className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${colors.iconBg} border-2 border-background shadow-lg flex items-center justify-center transition-all duration-300 ${
                        activeIndex === index
                          ? 'scale-110 shadow-xl'
                          : 'scale-100'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                      {activeIndex === index && (
                        <div
                          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colors.gradient} opacity-20 animate-ping`}
                          style={{ animationDuration: '2s' }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                      isEven ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'
                    }`}
                  >
                    <div
                      className={`glass-card p-6 lg:p-8 border ${colors.border}/30 hover:border-${exp.color}/50 transition-all duration-500 group relative overflow-hidden cursor-default ${
                        activeIndex === index ? 'shadow-xl' : 'shadow-md hover:shadow-lg'
                      }`}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      {/* Background gradient on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />

                      <div className="relative">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4 mb-5">
                          <span
                            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border}/50`}
                          >
                            <Building2 className="w-3 h-3" />
                            {exp.type}
                          </span>

                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </div>
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-xl lg:text-2xl font-bold text-foreground mb-3 transition-colors duration-300 group-hover:${colors.text}`}
                        >
                          {exp.title}
                        </h3>

                        {/* Period */}
                        <div className="flex items-center gap-2 text-muted-foreground mb-5">
                          <Calendar className="w-4 h-4 text-primary/60" />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                          {exp.description}
                        </p>

                        {/* Learn More - Always visible on mobile, hover on desktop */}
                        <div className="mt-6 pt-5 border-t border-border/50">
                          <div
                            className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 ${colors.text} group-hover:gap-3`}
                          >
                            {translations.experience.learnMore}
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`mt-24 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative max-w-3xl mx-auto">
            <div className="glass-card p-8 lg:p-12 border border-primary/10 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-glow/10 to-transparent rounded-tr-full" />

              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl border border-primary/10 mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {translations.experience.readyTitle}
                </h3>

                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  {translations.experience.readyDesc}
                </p>

                <button
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02]"
                >
                  {translations.experience.getInTouch}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;