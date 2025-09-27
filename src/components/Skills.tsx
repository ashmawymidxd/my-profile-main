import { Code, Database, Palette, Settings } from 'lucide-react';
import { useI18n } from '@/contexts/I18nContext';

const Skills = () => {
  const { translations } = useI18n();
  
  const skillCategories = [
    {
      title: translations.skills.categories.backend,
      icon: <Database className="w-6 h-6" />,
      color: "primary",
      skills: ["PHP", "Laravel", "Flask", "Node.js", "Microservices", "API Development"]
    },
    {
      title: translations.skills.categories.frontend, 
      icon: <Code className="w-6 h-6" />,
      color: "accent",
      skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "Responsive Design"]
    },
    {
      title: translations.skills.categories.databases,
      icon: <Settings className="w-6 h-6" />,
      color: "primary-glow",
      skills: ["MySQL", "MongoDB", "Oracle", "Database Design", "Query Optimization"]
    },
    {
      title: translations.skills.categories.tools,
      icon: <Palette className="w-6 h-6" />,
      color: "accent",
      skills: ["Git", "GitHub", "Figma", "Photoshop", "Illustrator", "Adobe XD"]
    }
  ];

  const technologies = [
    { name: "Laravel", level: 95, color: "primary" },
    { name: "React", level: 90, color: "accent" },
    { name: "PHP", level: 92, color: "primary-glow" },
    { name: "JavaScript", level: 88, color: "primary" },
    { name: "MySQL", level: 85, color: "accent" },
    { name: "Node.js", level: 80, color: "primary-glow" }
  ];

  return (
    <section id="skills" className="py-16 md:py-20 px-4 md:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {translations.skills.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {translations.skills.subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 group hover:shadow-lg transition-all duration-300">
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-${category.color}/10 flex items-center justify-center text-${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-${category.color}/60`}></div>
                    <span className="text-sm text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            {translations.skills.proficiencyTitle}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{tech.name}</span>
                  <span className="text-sm text-muted-foreground">{tech.level}%</span>
                </div>
                
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r from-${tech.color} to-${tech.color}-glow transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${tech.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications / Learning */}
        <div className="mt-12 text-center">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">{translations.skills.learningTitle}</h3>
            <p className="text-muted-foreground mb-6">
              {translations.skills.learningDesc}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-full">
              {translations.skills.learningItems.map((learning, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {learning}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;