import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { useI18n } from '@/contexts/I18nContext';

const Experience = () => {
  const { translations } = useI18n();
  
  const experiences = [
    {
      title: translations.experience.jobs.fullStack.title,
      period: translations.experience.jobs.fullStack.period,
      description: translations.experience.jobs.fullStack.description,
      type: translations.experience.jobs.fullStack.type,
      color: "primary"
    },
    {
      title: translations.experience.jobs.webDeveloper.title,
      period: translations.experience.jobs.webDeveloper.period,
      description: translations.experience.jobs.webDeveloper.description,
      type: translations.experience.jobs.webDeveloper.type,
      color: "accent"
    },
    {
      title: translations.experience.jobs.graphicDesigner.title,
      period: translations.experience.jobs.graphicDesigner.period,
      description: translations.experience.jobs.graphicDesigner.description,
      type: translations.experience.jobs.graphicDesigner.type,
      color: "primary-glow"
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20 px-4 md:px-6 bg-muted/30 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {translations.experience.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {translations.experience.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary-glow transform md:-translate-x-1/2"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30"></div>
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="glass-card p-6 hover:shadow-lg transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${exp.color}/10`}>
                          <Briefcase className={`w-6 h-6 text-${exp.color}`} />
                        </div>
                        <div>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full bg-${exp.color}/10 text-${exp.color}`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Hover Effect */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        <ExternalLink size={14} />
                        {translations.experience.learnMore}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">{translations.experience.readyTitle}</h3>
            <p className="text-muted-foreground mb-6">
              {translations.experience.readyDesc}
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              {translations.experience.getInTouch}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;