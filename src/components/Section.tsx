import React, { FC, HTMLProps } from 'react';
import * as styles from './Section.css';

export const Section: FC<HTMLProps<HTMLElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={[styles.section, className].join(' ')} {...props}>
      {children}
    </section>
  );
};
