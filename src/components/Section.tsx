import { ThemeContext, getTheme } from '@/theme';
import React, { FC, HTMLProps, useContext, useMemo, useState } from 'react';
import * as styles from './Section.css';

export const Section: FC<HTMLProps<HTMLElement>> = ({
  children,
  className,
  ...props
}) => {
  const context = useContext(ThemeContext);
  const [dark, setDark] = useState(false);

  const theme = useMemo(
    () => getTheme(context.theme, dark),
    [context.theme, dark],
  );

  return (
    <section
      className={[styles.section, className, theme].join(' ')}
      {...props}
    >
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? 'light' : 'dark'} theme
      </button>

      {children}
    </section>
  );
};
