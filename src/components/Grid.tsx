import React, { FC } from 'react';
import * as styles from './Grid.css';

type GridItemProps = {
  size?: number;
  start?: number;
};

export const GridItem: FC<GridItemProps> = ({ children, size, start }) => {
  return <div className={styles.gridItem({ size, start })}>{children}</div>;
};

export const Grid: FC = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};
