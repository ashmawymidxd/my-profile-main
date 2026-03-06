import { memo, useMemo, useState } from 'react';
import { ExternalLink, Github, Code, Database, Palette, Globe, Settings, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/contexts/I18nContext';
import { motion, AnimatePresence } from 'framer-motion';

// Types
interface Project {
  title: string;
  description: string;
  url: string;
  category: string;
  tech: string[];
  color: string;
  icon: JSX.Element;
  github?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  translations: any;
}

// Project icons mapping for consistency
const ProjectIcons = {
  platform: <Database className="w-5 h-5" />,
  backend: <Code className="w-5 h-5" />,
  frontend: <Palette className="w-5 h-5" />,
  fullstack: <Code className="w-5 h-5" />,
  business: <Briefcase className="w-5 h-5" />,
  webapp: <Globe className="w-5 h-5" />,
  erp: <Settings className="w-5 h-5" />,
  default: <Code className="w-5 h-5" />
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

// Extracted Project Card Component for better performance
const ProjectCard = memo(({ project, index, translations }: ProjectCardProps) => (
  <motion.div
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    className="glass-card p-6 group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
  >
    {/* Background Gradient Effect */}
    <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
    
    {/* Project Header */}
    <div className="flex items-start justify-between mb-4 relative z-10">
      <div className={`w-12 h-12 rounded-lg bg-${project.color}/10 flex items-center justify-center text-${project.color} group-hover:scale-110 transition-transform duration-300`}>
        {project.icon}
      </div>
      <span className={`px-3 py-1 text-xs font-medium rounded-full bg-${project.color}/10 text-${project.color} border border-${project.color}/20`}>
        {project.category}
      </span>
    </div>

    {/* Project Title */}
    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-1">
      {project.title}
    </h3>

    {/* Project Description */}
    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 min-h-[60px]">
      {project.description}
    </p>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map((tech, techIndex) => (
        <span 
          key={`${project.title}-tech-${techIndex}`}
          className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-full border border-muted-foreground/20 hover:border-primary/40 hover:text-primary transition-colors"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Project Links */}
    <div className="flex gap-3">
      {project.url && (
        <Button
          size="sm"
          className={`bg-${project.color}/10 hover:bg-${project.color}/20 text-${project.color} border-${project.color}/20 hover:border-${project.color}/40`}
          variant="outline"
          asChild
        >
          <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} website`}>
            <ExternalLink className="w-4 h-4 mr-2" />
            {translations.projects?.liveDemo || 'Live Demo'}
          </a>
        </Button>
      )}
      
      {project.github && (
        <Button
          size="sm"
          variant="outline"
          className="border-muted-foreground/20 hover:border-muted-foreground/40 text-muted-foreground hover:text-foreground"
          asChild
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code`}>
            <Github className="w-4 h-4 mr-2" />
            {translations.projects?.code || 'Code'}
          </a>
        </Button>
      )}
    </div>
  </motion.div>
));

ProjectCard.displayName = 'ProjectCard';

const Projects = () => {
  const { translations, language } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  // Memoized projects data to prevent recreation on every render
  const projects = useMemo<Project[]>(() => [
    {
      title: "SFCL Platform",
      description: translations.projects?.projectDescriptions?.sfcl || '',
      url: "https://sfcl.sa",
      category: "Platform",
      tech: ["React", "Tailwind CSS", "JavaScript", "i18Next"],
      color: "primary",
      icon: ProjectIcons.platform
    },
    {
      title: "Admin SFCL",
      description: translations.projects?.projectDescriptions?.adminSfcl || '',
      url: "https://adminsfcl.net",
      category: "Backend",
      tech: ["Laravel", "Microservices", "MySQL", "API"],
      color: "accent",
      icon: ProjectIcons.backend
    },
    {
      title: "Segam - Expert Dental Care",
      description: translations.projects?.projectDescriptions?.segam || '',
      url: "https://www.sijam-mc.com/ar",
      category: "Frontend",
      tech: ["React", "Tailwind CSS", "TypeScript", "Bootstrap"],
      color: "primary-glow",
      icon: ProjectIcons.frontend
    },
    {
      title: "Sijamdashboard",
      description: translations.projects?.projectDescriptions?.segamDashboard || '',
      url: "https://sijamdashboard.com/",
      category: "Full Stack",
      tech: ["Node.js", "React", "MongoDB", "Express.js"],
      color: "primary",
      icon: ProjectIcons.fullstack
    },
    {
      title: "ALNejum Contracting",
      description: translations.projects?.projectDescriptions?.alnejum || '',
      url: "https://alnejum.com/",
      category: "Business",
      tech: ["React", "Tailwind CSS", "TypeScript"],
      color: "accent",
      icon: ProjectIcons.business
    },
    {
      title: "Schengen Visa App",
      description: translations.projects?.projectDescriptions?.schengen || '',
      url: "https://first-mahata.vercel.app/",
      category: "Web App",
      tech: ["React", "Tailwind CSS", "i18Next", "TypeScript"],
      color: "primary-glow",
      icon: ProjectIcons.webapp
    },
    {
      title: "We Care",
      description: translations.projects?.projectDescriptions?.weCare || '',
      url: "http://we-care-khaki.vercel.app/",
      category: "Web App",
      tech: ["React", "Tailwind CSS", "i18Next", "TypeScript"],
      color: "primary-glow",
      icon: ProjectIcons.webapp
    },
    {
      title: "Gommla",
      description: translations.projects?.projectDescriptions?.gommla || '',
      url: "http://gommla.net",
      category: "Full Stack",
      tech: ["Laravel", "Tailwind CSS", "i18Next", "TypeScript"],
      color: "primary-glow",
      icon: ProjectIcons.fullstack
    },
    {
      title: "Mustaqdem",
      description: translations.projects?.projectDescriptions?.mustaqdem || '',
      url: "https://mustaqdem.com/",
      category: "Full Stack",
      tech: ["Laravel", "Tailwind CSS", "Vite", "TypeScript"],
      color: "primary-glow",
      icon: ProjectIcons.fullstack
    },
    {
      title: "BARQ ERP",
      description: translations.projects?.projectDescriptions?.barq || '',
      url: "https://metricsdigital.me/",
      category: "ERP SaaS",
      tech: ["Laravel", "Tailwind CSS", "Vite", "TypeScript"],
      color: "primary-glow",
      icon: ProjectIcons.erp
    }
  ], [translations.projects?.projectDescriptions]); // Only recompute when descriptions change

  // Get unique categories from projects
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(projects.map(p => p.category))];
    return cats.sort((a, b) => a === 'All' ? -1 : a.localeCompare(b));
  }, [projects]);

  // Filter projects based on selected category
  const getFilteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter(project => project.category === selectedCategory);
  }, [projects, selectedCategory]);

  // Handle category filter
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section id="projects" className="py-16 md:py-20 px-4 md:px-6 bg-muted/20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {translations.projects?.title || 'My Projects'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {translations.projects?.subtitle || 'Explore my latest work and personal projects'}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12 max-w-full"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-primary/20 hover:border-primary/40 hover:bg-primary/10 text-muted-foreground hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getFilteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                translations={translations}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {getFilteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">
              {translations.projects?.noProjectsFound || 'No projects found in this category.'}
            </p>
          </motion.div>
        )}

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {translations.projects?.moreProjectsTitle || 'Want to see more?'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {translations.projects?.moreProjectsDesc || 'Check out my GitHub profile for more projects and contributions'}
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://github.com/ashmawymidxd" target="_blank" rel="noopener noreferrer" aria-label="View GitHub profile">
                <Github className="w-5 h-5 mr-2" />
                {translations.projects?.viewGithub || 'View on GitHub'}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Projects);