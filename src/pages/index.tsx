import { Section } from '@/components/Section';
import { christmas } from '@/theme.css';
import React, { FC, useContext } from 'react';
import '../styles.css';
import { switchTheme, Theme, ThemeContext } from '../theme';

const App: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main>
      <button onClick={() => toggleTheme()}>
        Switch to {theme === christmas ? '🐣' : '🎄'} theme
      </button>
      <Section>A section</Section>
      <h2>Headline of type 2</h2>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
      </p>
    </main>
  );
};

export default function Home() {
  return (
    <Theme>
      <App />
    </Theme>
  );
}
