import { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import ScrollToTop from '@/components/ScrollToTop';
import { I18nProvider, useI18n } from '@/contexts/I18nContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const IndexContent = () => {
  const { translations, isRTL } = useI18n();

  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className={`min-h-screen bg-background overflow-x-hidden ${isRTL ? 'font-arabic' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl font-bold text-primary">
              {translations.hero.name} {translations.hero.lastName}
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">{translations.nav.about}</a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">{translations.nav.experience}</a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">{translations.nav.skills}</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">{translations.nav.projects}</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">{translations.nav.contact}</a>
              <LanguageToggle />
              <ThemeToggle />
            </div>
            
            {/* Mobile Menu */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2">
                    <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                      <div className="w-full h-0.5 bg-foreground"></div>
                      <div className="w-full h-0.5 bg-foreground"></div>
                      <div className="w-full h-0.5 bg-foreground"></div>
                    </div>
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-6 mt-8">
                    <a href="#about" className="text-lg font-medium hover:text-primary transition-colors">{translations.nav.about}</a>
                    <a href="#experience" className="text-lg font-medium hover:text-primary transition-colors">{translations.nav.experience}</a>
                    <a href="#skills" className="text-lg font-medium hover:text-primary transition-colors">{translations.nav.skills}</a>
                    <a href="#projects" className="text-lg font-medium hover:text-primary transition-colors">{translations.nav.projects}</a>
                    <a href="#contact" className="text-lg font-medium hover:text-primary transition-colors">{translations.nav.contact}</a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 px-4 md:px-6 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground mb-4">{translations.footer.name}</div>
            <div className="text-muted-foreground mb-6">{translations.footer.title}</div>
            
            <div className="flex justify-center gap-6 mb-8">
              <a href="mailto:ahmedhassanshehata551@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">{translations.footer.email}</a>
              <a href="https://linkedin.com/in/ahmed-hassan-shehata" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{translations.footer.linkedin}</a>
              <a href="https://github.com/ashmawymidxd" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{translations.footer.github}</a>
              <a href="https://t.me/G1_ahmed_hassan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{translations.footer.telegram}</a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {translations.footer.copyright}
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

const Index = () => {
  return (
    <I18nProvider>
      <IndexContent />
    </I18nProvider>
  );
};

export default Index;
