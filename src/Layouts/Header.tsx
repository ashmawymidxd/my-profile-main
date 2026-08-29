import React from "react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useI18n } from '@/contexts/I18nContext';
function Header() {
  const { translations, isRTL } = useI18n();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-primary">
            {translations.hero.name} {translations.hero.lastName}
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {translations.nav.about}
            </a>
            <a
              href="#experience"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {translations.nav.experience}
            </a>
            <a
              href="#skills"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {translations.nav.skills}
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {translations.nav.projects}
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {translations.nav.contact}
            </a>
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
                  <a
                    href="#about"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {translations.nav.about}
                  </a>
                  <a
                    href="#experience"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {translations.nav.experience}
                  </a>
                  <a
                    href="#skills"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {translations.nav.skills}
                  </a>
                  <a
                    href="#projects"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {translations.nav.projects}
                  </a>
                  <a
                    href="#contact"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {translations.nav.contact}
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
