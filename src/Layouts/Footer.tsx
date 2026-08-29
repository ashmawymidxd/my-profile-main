import React from "react";
import { useI18n } from "@/contexts/I18nContext";
function Footer() {
  const { translations, isRTL } = useI18n();
  return (
    <footer className="bg-muted/30 py-12 px-4 md:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground mb-4">
            {translations.footer.name}
          </div>
          <div className="text-muted-foreground mb-6">
            {translations.footer.title}
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:ahmedhassanshehata551@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {translations.footer.email}
            </a>
            <a
              href="https://linkedin.com/in/ahmed-hassan-shehata"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {translations.footer.linkedin}
            </a>
            <a
              href="https://github.com/ashmawymidxd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {translations.footer.github}
            </a>
            <a
              href="https://t.me/G1_ahmed_hassan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {translations.footer.telegram}
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {translations.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
