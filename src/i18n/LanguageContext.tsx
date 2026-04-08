import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { Locale, LocalizedString, isLocalizedString } from './types';
import { translations } from './translations/index';

interface LanguageContextType {
  language: Locale;
  setLanguage: (lang: Locale) => void;
  toggleLanguage: () => void;
  t: (keyOrLocalized: string | LocalizedString) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Locale>(() => {
    const saved = localStorage.getItem('lang');
    return (saved === 'zh' || saved === 'en') ? saved : 'zh';
  });

  const setLanguage = useCallback((lang: Locale) => {
    setLanguageState(lang);
    localStorage.setItem('lang', lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  }, [language, setLanguage]);

  // 同步 document 属性
  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.setAttribute('data-lang', language);
  }, [language]);

  const t = useCallback((keyOrLocalized: string | LocalizedString): string => {
    if (isLocalizedString(keyOrLocalized)) {
      return keyOrLocalized[language];
    }
    const dict = translations[language] as Record<string, string>;
    return dict[keyOrLocalized] || keyOrLocalized;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
