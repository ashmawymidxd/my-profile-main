import { memo, useMemo, useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Palette,
  Globe,
  Settings,
  Users,
  Briefcase,
  ArrowUpRight,
  Layers,
  Zap,
  FolderOpen,
  Filter,
  Sparkles,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import { motion, AnimatePresence } from "framer-motion";

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
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  translations: any;
}

// Color configurations
const getColorConfig = (color: string) => {
  const configs: Record<
    string,
    {
      bg: string;
      text: string;
      border: string;
      gradient: string;
      iconBg: string;
      hoverBg: string;
      badgeBg: string;
      glow: string;
    }
  > = {
    primary: {
      bg: "bg-blue-500/10",
      text: "text-blue-500",
      border: "border-blue-500/20",
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "from-blue-500/20 to-cyan-500/20",
      hoverBg: "hover:bg-blue-500/10",
      badgeBg: "bg-blue-500/10",
      glow: "shadow-blue-500/20",
    },
    accent: {
      bg: "bg-orange-500/10",
      text: "text-orange-500",
      border: "border-orange-500/20",
      gradient: "from-orange-500 to-amber-500",
      iconBg: "from-orange-500/20 to-amber-500/20",
      hoverBg: "hover:bg-orange-500/10",
      badgeBg: "bg-orange-500/10",
      glow: "shadow-orange-500/20",
    },
    "primary-glow": {
      bg: "bg-purple-500/10",
      text: "text-purple-500",
      border: "border-purple-500/20",
      gradient: "from-purple-500 to-pink-500",
      iconBg: "from-purple-500/20 to-pink-500/20",
      hoverBg: "hover:bg-purple-500/10",
      badgeBg: "bg-purple-500/10",
      glow: "shadow-purple-500/20",
    },
  };
  return configs[color] || configs.primary;
};

// Project icons mapping
const ProjectIcons = {
  platform: <Database className="w-5 h-5" />,
  backend: <Code className="w-5 h-5" />,
  frontend: <Palette className="w-5 h-5" />,
  fullstack: <Layers className="w-5 h-5" />,
  business: <Briefcase className="w-5 h-5" />,
  webapp: <Globe className="w-5 h-5" />,
  erp: <Settings className="w-5 h-5" />,
  default: <Code className="w-5 h-5" />,
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

// Project Card Component
const ProjectCard = memo(({ project, index, translations }: ProjectCardProps) => {
  const colors = getColorConfig(project.color);

  return (
    <motion.div
      variants={itemVariants}
      layout
      className="group relative"
    >
      <div
        className={`glass-card p-6 lg:p-7 h-full border ${colors.border}/30 hover:border-${project.color}/50 transition-all duration-500 relative overflow-hidden hover:shadow-xl ${colors.glow}/0 hover:${colors.glow}/20`}
      >
        {/* Background gradient on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}
        />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <div className="flex items-center gap-1 px-2.5 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
              <Sparkles className="w-3 h-3 text-yellow-500" />
              <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-wider">
                Featured
              </span>
            </div>
          </div>
        )}

        <div className="relative z-10">
          {/* Project Header */}
          <div className="flex items-start justify-between mb-5">
            <div
              className={`w-12 h-12 rounded-3xl bg-gradient-to-br ${colors.iconBg} border ${colors.border}/50 flex items-center justify-center ${colors.text} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
            >
              {project.icon}
            </div>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg ${colors.badgeBg} ${colors.text} border ${colors.border}/50`}
            >
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.gradient}`} />
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3 min-h-[60px]">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 4).map((tech, techIndex) => (
              <span
                key={`${project.title}-tech-${techIndex}`}
                className="px-2.5 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-lg border border-muted-foreground/10 hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-medium bg-muted/30 text-muted-foreground/60 rounded-lg">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 pt-5">
            {/* Project Links */}
            <div className="flex items-center gap-3">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} website`}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg ${colors.badgeBg} ${colors.text} border ${colors.border}/50 hover:bg-gradient-to-r hover:${colors.hoverBg} transition-all duration-300 group/btn`}
                >
                  <Eye className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                  {translations.projects?.liveDemo || "Live Demo"}
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-muted/50 text-muted-foreground border border-muted-foreground/10 hover:border-muted-foreground/30 hover:text-foreground hover:bg-muted transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

const Projects = () => {
  const { translations, language } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Memoized projects data
  const projects = useMemo<Project[]>(
    () => [
      {
        title: "Talabate",
        description: translations.projects?.projectDescriptions?.talabate || "",
        url: "https://talabat.metricsdigital.me/en",
        category: "Platform",
        tech: ["Laravel", "Tailwind CSS", "Laravel Localized", "Livewire"],
        color: "primary-glow",
        icon: ProjectIcons.platform,
        featured: true,
      },
      {
        title: "BARQ ERP",
        description: translations.projects?.projectDescriptions?.barq || "",
        url: "https://metricsdigital.me/",
        category: "ERP SaaS",
        tech: ["Laravel", "Tailwind CSS", "Vite", "TypeScript"],
        color: "primary-glow",
        icon: ProjectIcons.erp,
        featured: true,
      },
      {
        title: "Mustaqdem",
        description: translations.projects?.projectDescriptions?.mustaqdem || "",
        url: "https://mustaqdem.com/",
        category: "Full Stack",
        tech: ["Laravel", "Tailwind CSS", "Vite", "TypeScript"],
        color: "primary-glow",
        icon: ProjectIcons.fullstack,
      },
      {
        title: "We Care",
        description: translations.projects?.projectDescriptions?.weCare || "",
        url: "http://we-care-khaki.vercel.app/",
        category: "Web App",
        tech: ["React", "Tailwind CSS", "i18Next", "TypeScript"],
        color: "primary-glow",
        icon: ProjectIcons.webapp,
      },
      {
        title: "SFCL Platform",
        description: translations.projects?.projectDescriptions?.sfcl || "",
        url: "https://sfcl.sa",
        category: "Platform",
        tech: ["React", "Tailwind CSS", "JavaScript", "i18Next"],
        color: "primary",
        icon: ProjectIcons.platform,
      },
      {
        title: "Admin SFCL",
        description: translations.projects?.projectDescriptions?.adminSfcl || "",
        url: "https://adminsfcl.net",
        category: "Backend",
        tech: ["Laravel", "Microservices", "MySQL", "API"],
        color: "accent",
        icon: ProjectIcons.backend,
      },
      {
        title: "ALNejum Contracting",
        description: translations.projects?.projectDescriptions?.alnejum || "",
        url: "https://alnejum.com/",
        category: "Business",
        tech: ["React", "Tailwind CSS", "TypeScript"],
        color: "accent",
        icon: ProjectIcons.business,
      },
      {
        title: "Schengen Visa App",
        description: translations.projects?.projectDescriptions?.schengen || "",
        url: "https://first-mahata.vercel.app/",
        category: "Web App",
        tech: ["React", "Tailwind CSS", "i18Next", "TypeScript"],
        color: "primary-glow",
        icon: ProjectIcons.webapp,
      },
      {
        title: "Gommla",
        description: translations.projects?.projectDescriptions?.gommla || "",
        url: "http://gommla.net",
        category: "Full Stack",
        tech: ["Laravel", "Tailwind CSS", "i18Next", "TypeScript"],
        color: "primary-glow",
        icon: ProjectIcons.fullstack,
      },
      {
        title: "Segam - Expert Dental Care",
        description: translations.projects?.projectDescriptions?.segam || "",
        url: "https://www.sijam-mc.com/ar",
        category: "Frontend",
        tech: ["React", "Tailwind CSS", "TypeScript", "Bootstrap"],
        color: "primary-glow",
        icon: ProjectIcons.frontend,
      },
      {
        title: "Sijamdashboard",
        description: translations.projects?.projectDescriptions?.segamDashboard || "",
        url: "https://sijamdashboard.com/",
        category: "Full Stack",
        tech: ["Node.js", "React", "MongoDB", "Express.js"],
        color: "primary",
        icon: ProjectIcons.fullstack,
      },
    ],
    [translations.projects?.projectDescriptions]
  );

  // Get unique categories with counts
  const categories = useMemo(() => {
    const catMap = new Map<string, number>();
    projects.forEach((p) => {
      catMap.set(p.category, (catMap.get(p.category) || 0) + 1);
    });

    const cats = [
      { name: "All", count: projects.length },
      ...Array.from(catMap.entries()).map(([name, count]) => ({ name, count })),
    ];

    return cats;
  }, [projects]);

  // Filter projects
  const getFilteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((project) => project.category === selectedCategory);
  }, [projects, selectedCategory]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-6 md:py-12 px-4 md:px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-primary/10 mb-6">
            <FolderOpen className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              Portfolio
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {translations.projects?.title || "My Projects"}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {translations.projects?.subtitle || "Explore my latest work and personal projects"}
          </p>

          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-medium">Filter by category</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => handleCategoryClick(cat.name)}
                  className={`group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-3xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-primary-glow text-white shadow-lg shadow-primary/25"
                      : "bg-white/50 dark:bg-white/5 border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground hover:bg-white dark:hover:bg-white/10"
                  }`}
                >
                  {cat.name}
                  <span
                    className={`inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-full text-xs font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                  >
                    {cat.count}
                  </span>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary to-primary-glow -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">{getFilteredProjects.length}</span>{" "}
            {getFilteredProjects.length === 1 ? "project" : "projects"}
          </p>

          {selectedCategory !== "All" && (
            <button
              onClick={() => handleCategoryClick("All")}
              className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Clear filter ×
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 bg-muted/50 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <FolderOpen className="w-10 h-10 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-lg font-medium">
              {translations.projects?.noProjectsFound || "No projects found in this category."}
            </p>
            <button
              onClick={() => handleCategoryClick("All")}
              className="mt-4 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View all projects →
            </button>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20"
        >
          <div className="relative max-w-3xl mx-auto">
            <div className="glass-card p-8 lg:p-12 border border-primary/10 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-gray-800/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-gray-600/10 to-transparent rounded-tr-full" />

              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-700/30 to-gray-900/30 rounded-3xl border border-gray-600/20 mb-6">
                  <Github className="w-8 h-8 text-foreground" />
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {translations.projects?.moreProjectsTitle || "Want to see more?"}
                </h3>

                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  {translations.projects?.moreProjectsDesc ||
                    "Check out my GitHub profile for more projects, contributions, and open-source work"}
                </p>

                <Button
                  size="lg"
                  className="group inline-flex items-center gap-2 bg-foreground hover:bg-foreground/90 text-background px-8 py-3.5 rounded-3xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-foreground/20 hover:scale-[1.02]"
                  asChild
                >
                  <a
                    href="https://github.com/ashmawymidxd"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View GitHub profile"
                  >
                    <Github className="w-5 h-5" />
                    {translations.projects?.viewGithub || "View on GitHub"}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Projects);