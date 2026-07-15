import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { en } from './en';
import { he } from './he';
import type { Language, Translations } from './types';

const translations: Record<Language, Translations> = { he, en };

type LanguageContextValue = {
  language: Language;
  t: Translations;
  dir: 'rtl' | 'ltr';
  localizePath: (path: string) => string;
  switchLanguage: () => void;
  stripLanguagePrefix: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectLanguage(pathname: string): Language {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'he';
}

export function stripLanguagePrefix(path: string): string {
  if (path === '/en') return '/';
  if (path.startsWith('/en/')) return path.slice(3) || '/';
  return path;
}

export function localizePath(path: string, language: Language): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const basePath = stripLanguagePrefix(normalized);

  if (language === 'en') {
    return basePath === '/' ? '/en' : `/en${basePath}`;
  }

  return basePath;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const language = detectLanguage(location.pathname);
  const dir = language === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    t: translations[language],
    dir,
    localizePath: (path: string) => localizePath(path, language),
    switchLanguage: () => {
      const nextLanguage: Language = language === 'he' ? 'en' : 'he';
      const nextPath = localizePath(stripLanguagePrefix(location.pathname), nextLanguage);
      navigate(nextPath);
    },
    stripLanguagePrefix,
  }), [language, dir, location.pathname, navigate]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

export { translations };
