import { ComplexStyleRule, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const grid = style({
  display: 'grid',
  gridTemplateColumns: `repeat(12, minmax(0, 100px))`,
  gridColumnGap: '20px',
});

export const gridItem = recipe({
  variants: {
    size: {
      1: { gridColumn: `auto/span 1` },
      2: { gridColumn: `auto/span 2` },
      3: { gridColumn: `auto/span 3` },
      4: { gridColumn: `auto/span 4` },
      5: { gridColumn: `auto/span 5` },
      6: { gridColumn: `auto/span 6` },
      7: { gridColumn: `auto/span 7` },
      8: { gridColumn: `auto/span 8` },
      9: { gridColumn: `auto/span 9` },
      10: { gridColumn: `auto/span 10` },
      11: { gridColumn: `auto/span 11` },
      12: { gridColumn: `auto/span 12` },
    },
  },
  defaultVariants: {
    size: 12,
  },
});
