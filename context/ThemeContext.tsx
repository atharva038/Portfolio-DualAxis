'use client';

import { createContext, useContext, useSyncExternalStore, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

let themeListeners: Array<() => void> = [];

function emitThemeChange() {
  for (const listener of themeListeners) {
    listener();
  }
}

function subscribeTheme(listener: () => void) {
  themeListeners.push(listener);
  return () => {
    themeListeners = themeListeners.filter((l) => l !== listener);
  };
}

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved === 'light' || saved === 'dark') return saved;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  } catch {
    return 'light';
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore<Theme>(subscribeTheme, getStoredTheme, () => 'light');
  const [overrideTheme, setOverrideTheme] = useState<Theme | null>(null);

  const activeTheme: Theme = overrideTheme || theme;

  useEffect(() => {
    if (activeTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', activeTheme);
    } catch {
      // ignore
    }
  }, [activeTheme]);

  const toggleTheme = () => {
    const next = activeTheme === 'light' ? 'dark' : 'light';
    setOverrideTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // ignore
    }
    emitThemeChange();
  };

  return (
    <ThemeContext.Provider value={{ theme: activeTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
