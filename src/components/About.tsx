import { useState, useEffect, useRef } from 'react';
import {
  GraduationCap,
  Code,
  Target,
  Award,
  TrendingUp,
  Users,
  FolderGit2,
  Sparkles,
  BookOpen,
  Rocket,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';
import { useI18n } from '@/contexts/I18nContext';

const About = () => {
  const { translations } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
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

  const stats = [
    {
      value: '3+',
      label: translations.about.yearsExperience,
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      value: '75+',
      label: translations.about.projectsBuilt,
      icon: FolderGit2,
      color: 'from-primary to-primary-glow',
    },
    {
      value: '100%',
      label: translations.about.clientSatisfaction,
      icon: Users,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const highlights = [
    { icon: CheckCircle2, text: 'Clean & Maintainable Code' },
    { icon: CheckCircle2, text: 'Responsive Design' },
    { icon: CheckCircle2, text: 'Performance Optimization' },
    { icon: CheckCircle2, text: 'API Development' },
    { icon: CheckCircle2, text: 'Database Design' },
    { icon: CheckCircle2, text: 'Cloud Deployment' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-6 md:py-12 px-4 md:px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-primary/10 mb-6">
            <BookOpen className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              Get to Know Me
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {translations.about.title}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into my journey, expertise, and what drives me as a developer
          </p>
          
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Education (5 cols) */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="glass-card p-8 lg:p-10 h-full border border-primary/5 hover:border-primary/20 transition-all duration-500 group relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl flex items-center justify-center border border-primary/10 group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-7 h-7 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {translations.about.educationTitle}
                    </h3>
                    <p className="text-sm text-muted-foreground">Academic Background</p>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {translations.about.educationDesc1}
                  </p>
                  
                  <div className="relative pl-6 border-l-2 border-primary/20">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground leading-relaxed">
                      {translations.about.educationDesc2}
                    </p>
                  </div>
                </div>

                {/* Bottom decoration */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium text-foreground">
                      Continuous Learner
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Mission, Expertise, Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Top Row - Mission & Expertise */}
            <div
              className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Mission Card */}
              <div
                className="glass-card p-8 border border-accent/5 hover:border-accent/20 transition-all duration-500 group cursor-default"
                onMouseEnter={() => setActiveCard(0)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-orange-500/20 rounded-2xl flex items-center justify-center border border-accent/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {translations.about.missionTitle}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {translations.about.missionDesc}
                </p>
              </div>

              {/* Expertise Card */}
              <div
                className="glass-card p-8 border border-primary-glow/5 hover:border-primary-glow/20 transition-all duration-500 group cursor-default"
                onMouseEnter={() => setActiveCard(1)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-glow/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-primary-glow/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-6 h-6 text-primary-glow" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {translations.about.expertiseTitle}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {translations.about.expertiseDesc}
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div
              className={`transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="glass-card p-8 border border-primary/5">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  <h3 className="text-lg font-bold text-foreground">What I Bring</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 p-3 rounded-lg bg-primary/5 border border-transparent hover:border-primary/10 transition-all duration-300 group"
                    >
                      <item.icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors flex-shrink-0" />
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div
              className={`grid grid-cols-3 gap-4 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-6 border border-transparent hover:border-primary/10 transition-all duration-500 group text-center relative overflow-hidden"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <stat.icon className={`w-5 h-5 mx-auto mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;