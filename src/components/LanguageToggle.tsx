import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/contexts/I18nContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useI18n();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="glass-card p-2 border-border/30 hover:border-border/50 min-w-[60px]"
      title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
    >
      <Languages className="w-4 h-4 text-foreground mr-1" />
      <span className="text-sm font-medium">
        {language === 'en' ? 'العربية' : 'EN'}
      </span>
    </Button>
  );
};

export default LanguageToggle;