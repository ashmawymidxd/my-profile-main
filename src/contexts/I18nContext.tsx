import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { enTranslations } from '@/translations/en';
import { arTranslations } from '@/translations/ar';

export type Language = 'en' | 'ar';
export type Translations = typeof enTranslations;

interface I18nContextType {
  language: Language;
  translations: Translations;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const translations = language === 'ar' ? arTranslations : enTranslations;
  const isRTL = language === 'ar';

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Update document attributes when language changes
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    // Save language preference
    localStorage.setItem('language', language);
  }, [language, isRTL]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <I18nContext.Provider value={{
      language,
      translations,
      toggleLanguage,
      setLanguage: handleSetLanguage,
      isRTL
    }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};