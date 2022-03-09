import React, { useState } from 'react';

import { Section } from '@/components/Section';

import '../styles.css';
import { easter, christmas } from '../theme.css';

export default function Home() {
  const [isChristmas, setIsChristmas] = useState(false);
  return (
    <main className={isChristmas ? christmas : easter}>
      <button onClick={() => setIsChristmas(!isChristmas)}>
        Switch to {isChristmas ? '🐣' : '🎄'} theme
      </button>
      <Section>A section</Section>
      <h2>Headline of type 2</h2>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
      </p>
    </main>
  );
}
