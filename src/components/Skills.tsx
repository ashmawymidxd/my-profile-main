import { useState, useEffect, useRef } from 'react';
import {
  Code,
  Database,
  Palette,
  Settings,
  Server,
  Layout,
  Layers,
  Wrench,
  Sparkles,
  TrendingUp,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  BookOpen,
  GraduationCap,
} from 'lucide-react';
import { useI18n } from '@/contexts/I18nContext';

const Skills = () => {
  const { translations } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<number[]>([]);
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

  useEffect(() => {
    if (isVisible) {
      const timers = technologies.map((_, index) =>
        setTimeout(() => {
          setAnimatedBars((prev) => [...prev, index]);
        }, 300 + index * 150)
      );
      return () => timers.forEach(clearTimeout);
    }
  }, [isVisible]);

  const getColorConfig = (color: string) => {
    const configs: Record<
      string,
      { bg: string; text: string; border: string; gradient: string; iconBg: string; barGradient: string }
    > = {
      primary: {
        bg: 'bg-blue-500/10',
        text: 'text-blue-500',
        border: 'border-blue-500/20',
        gradient: 'from-blue-500 to-cyan-500',
        iconBg: 'from-blue-500/20 to-cyan-500/20',
        barGradient: 'from-blue-500 to-cyan-400',
      },
      accent: {
        bg: 'bg-orange-500/10',
        text: 'text-orange-500',
        border: 'border-orange-500/20',
        gradient: 'from-orange-500 to-amber-500',
        iconBg: 'from-orange-500/20 to-amber-500/20',
        barGradient: 'from-orange-500 to-amber-400',
      },
      'primary-glow': {
        bg: 'bg-purple-500/10',
        text: 'text-purple-500',
        border: 'border-purple-500/20',
        gradient: 'from-purple-500 to-pink-500',
        iconBg: 'from-purple-500/20 to-pink-500/20',
        barGradient: 'from-purple-500 to-pink-400',
      },
    };
    return configs[color] || configs.primary;
  };

  const getIconForCategory = (title: string) => {
    const titleLower = title?.toLowerCase() || '';
    if (titleLower.includes('backend') || titleLower.includes('back')) return Server;
    if (titleLower.includes('front') || titleLower.includes('ui') || titleLower.includes('interface'))
      return Layout;
    if (titleLower.includes('database') || titleLower.includes('data')) return Database;
    if (titleLower.includes('tool') || titleLower.includes('devops')) return Wrench;
    return Layers;
  };

  const skillCategories = [
    {
      title: translations.skills.categories.backend,
      color: 'primary',
      skills: ['PHP', 'Laravel', 'Flask', 'Node.js', 'Microservices', 'API Development'],
    },
    {
      title: translations.skills.categories.frontend,
      color: 'accent',
      skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
    },
    {
      title: translations.skills.categories.databases,
      color: 'primary-glow',
      skills: ['MySQL', 'MongoDB', 'Oracle', 'Database Design', 'Query Optimization'],
    },
    {
      title: translations.skills.categories.tools,
      color: 'accent',
      skills: ['Git', 'GitHub', 'Figma', 'Photoshop', 'Illustrator', 'Adobe XD'],
    },
  ];

  const technologies = [
    { name: 'Laravel', level: 95, color: 'primary' },
    { name: 'React', level: 90, color: 'accent' },
    { name: 'PHP', level: 92, color: 'primary-glow' },
    { name: 'JavaScript', level: 88, color: 'primary' },
    { name: 'MySQL', level: 85, color: 'accent' },
    { name: 'Node.js', level: 80, color: 'primary-glow' },
  ];

  const coreStrengths = [
    { label: 'Problem Solving', value: 95 },
    { label: 'Clean Code', value: 92 },
    { label: 'Team Collaboration', value: 90 },
    { label: 'Project Management', value: 85 },
  ];

  return (
    <section id="skills" ref={sectionRef} className="relative py-6 md:py-12 px-4 md:px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-primary/10 mb-6">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {translations.skills.title}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{translations.skills.subtitle}</p>

          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((category, index) => {
            const Icon = getIconForCategory(category.title);
            const colors = getColorConfig(category.color);

            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div
                  className={`glass-card p-6 lg:p-7 h-full border ${colors.border}/30 hover:border-${category.color}/50 transition-all duration-500 relative overflow-hidden`}
                >
                  {/* Hover gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Number indicator */}
                  <div
                    className={`absolute top-4 right-4 text-6xl font-black bg-gradient-to-b ${colors.gradient} bg-clip-text text-transparent opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="relative">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.iconBg} border ${colors.border}/50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0`}
                      >
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-lg leading-tight">
                          {category.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {category.skills.length} technologies
                        </p>
                      </div>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-2.5">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center gap-3 group/skill"
                        >
                          <CheckCircle2
                            className={`w-3.5 h-3.5 ${colors.text} opacity-60 group-hover/skill:opacity-100 transition-all duration-300 flex-shrink-0`}
                          />
                          <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom accent line */}
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <div
                        className={`h-1 w-12 rounded-full bg-gradient-to-r ${colors.gradient} opacity-40 group-hover:w-full group-hover:opacity-70 transition-all duration-500`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency Levels Section */}
        <div
          className={`mb-20 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="glass-card p-8 lg:p-12 border border-primary/5 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-tr-full" />

            <div className="relative">
              {/* Header */}
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-xl flex items-center justify-center border border-primary/10">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {translations.skills.proficiencyTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground">Years of practice & refinement</p>
                </div>
              </div>

              {/* Progress Bars Grid */}
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {technologies.map((tech, index) => {
                  const colors = getColorConfig(tech.color);
                  const isAnimated = animatedBars.includes(index);

                  return (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-foreground text-sm">{tech.name}</span>
                        <span
                          className={`text-sm font-bold ${colors.text} tabular-nums transition-all duration-700 ${
                            isAnimated ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          {tech.level}%
                        </span>
                      </div>

                      <div className="w-full bg-muted/50 rounded-full h-2.5 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${colors.barGradient} transition-all duration-1000 ease-out relative ${
                            isAnimated ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{
                            width: isAnimated ? `${tech.level}%` : '0%',
                            transitionDelay: `${index * 100}ms`,
                          }}
                        >
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Core Strengths + Learning Section */}
        <div
          className={`grid lg:grid-cols-5 gap-8 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Core Strengths */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 h-full border border-primary/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center border border-green-500/10">
                  <Sparkles className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Core Strengths</h3>
              </div>

              <div className="space-y-6">
                {coreStrengths.map((strength, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{strength.label}</span>
                      <span className="text-xs font-bold text-green-500 tabular-nums">{strength.value}%</span>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${strength.value}%` : '0%',
                          transitionDelay: `${800 + index * 150}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Currently Learning */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 h-full border border-primary/5 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center border border-yellow-500/10">
                    <GraduationCap className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {translations.skills.learningTitle}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {translations.skills.learningDesc}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {translations.skills.learningItems.map((learning, index) => (
                    <div
                      key={index}
                      className="group relative"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
                      <span className="relative inline-flex items-center gap-1.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium border border-primary/10 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 cursor-default">
                        <BookOpen className="w-3 h-3" />
                        {learning}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shimmer animation keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;