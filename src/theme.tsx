import React, {
  createContext,
  FC,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { christmas, christmasDark, easter, easterDark } from './theme.css';

export const switchTheme = (currentTheme: string): string => {
  return currentTheme === christmas || currentTheme === christmasDark
    ? easter
    : christmas;
};

export const getTheme = (theme: string, isDark = false): string => {
  if (theme === easter || theme === easterDark) {
    return isDark ? easterDark : easter;
  }
  return isDark ? christmasDark : christmas;
};

export const ThemeContext = createContext({
  theme: christmas,
  toggleTheme: () => {},
});

export const Theme: FC<{}> = ({ children }) => {
  const [theme, setTheme] = useState(christmas);
  const value = useMemo(
    () => ({ theme, toggleTheme: () => setTheme(switchTheme(theme)) }),
    [theme],
  );
  return (
    <ThemeContext.Provider value={value}>
      <pre>{theme}</pre>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
