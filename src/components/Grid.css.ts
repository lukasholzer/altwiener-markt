import { ComplexStyleRule, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const grid = style({
  display: 'grid',
  gridTemplateColumns: `repeat(12, minmax(0, 100px))`,
  gridColumnGap: '20px',
});

export const gridItem = recipe({
  variants: {
    size: [...Array(12).keys()].reduce(
      (prev, cur) => ({
        ...prev,
        [cur + 1]: { gridColumn: `auto/span ${cur + 1}` },
      }),
      {} as Record<number, ComplexStyleRule>,
    ),
    start: [...Array(12).keys()].reduce(
      (prev, cur) => ({
        ...prev,
        [cur + 1]: { gridColumnStart: cur + 1 },
      }),
      {} as Record<number, ComplexStyleRule>,
    ),
  },
  defaultVariants: {
    size: 12,
  },
});
