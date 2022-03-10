import * as styles from './Grid.css';
import React, { FC, useState } from 'react';

export const GridItem: FC<{ size?: number }> = ({ children, size }) => {
  console.log();
  return (
    <div
      className={styles.gridItem({
        size: size as any,
      })}
    >
      {children}
    </div>
  );
};

export const Grid: FC<{}> = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};
