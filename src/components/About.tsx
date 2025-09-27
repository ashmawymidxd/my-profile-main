import { GraduationCap, Code, Target } from 'lucide-react';
import { useI18n } from '@/contexts/I18nContext';

const About = () => {
  const { translations } = useI18n();
  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {translations.about.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Description */}
          <div className="glass-card p-8 lg:p-12 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">{translations.about.educationTitle}</h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {translations.about.educationDesc1}
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {translations.about.educationDesc2}
            </p>
          </div>

          {/* Right Column - Mission & Skills */}
          <div className="space-y-8">
            {/* Mission Card */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{translations.about.missionTitle}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {translations.about.missionDesc}
              </p>
            </div>

            {/* Expertise Card */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-glow/10 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary-glow" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{translations.about.expertiseTitle}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {translations.about.expertiseDesc}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center glass-card p-4">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">{translations.about.yearsExperience}</div>
              </div>
              <div className="text-center glass-card p-4">
                <div className="text-2xl font-bold text-primary">75+</div>
                <div className="text-sm text-muted-foreground">{translations.about.projectsBuilt}</div>
              </div>
              <div className="text-center glass-card p-4">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">{translations.about.clientSatisfaction}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;