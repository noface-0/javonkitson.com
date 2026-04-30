import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';

export type Theme = 'light' | 'ink' | 'pastel';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = 'jk-theme';
const VALID: Theme[] = ['light', 'ink', 'pastel'];

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('light');
  const [autoTheme, setAutoTheme] = useState<boolean>(true);

  // Initial: stored choice → OS preference → light
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored && VALID.includes(stored as Theme)) {
      setThemeState(stored as Theme);
      setAutoTheme(false);
      return;
    }
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      setThemeState('ink');
    }
  }, []);

  // Follow OS while on auto
  useEffect(() => {
    if (!autoTheme || typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => setThemeState(mq.matches ? 'ink' : 'light');
    mq.addEventListener?.('change', apply);
    return () => mq.removeEventListener?.('change', apply);
  }, [autoTheme]);

  // Mirror to body[data-theme]
  useEffect(() => {
    if (typeof document !== 'undefined') document.body.dataset.theme = theme;
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setAutoTheme(false);
    setThemeState(next);
    if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY, next);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
