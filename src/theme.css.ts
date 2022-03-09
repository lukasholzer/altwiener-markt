import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
  fontFace,
} from '@vanilla-extract/css';

const henrietteMedium = fontFace({
  src: `url(/fonts/Henriette-MediumItalic.woff) format('woff')`,
});

const henrietteBold = fontFace({
  src: `url(/fonts/Henriette-BoldItalic.woff) format('woff')`,
});

const root = createGlobalTheme(':root', {
  font: {
    body: `'Neutra Text', 'Helvetica Neue', 'Helvetica', sans-serif`,
    headline: henrietteBold,
  },
});

const colors = createThemeContract({
  brand: 'color-brand',
  key: 'color-key',
  background: 'color-background',
  text: {
    normal: 'color-text-normal',
  },
});

export const easter = createTheme(colors, {
  brand: '#00a9a2',
  key: '#c2aa85',
  background: '#ffffff',
  text: {
    normal: '#323232',
  },
});

export const christmas = createTheme(colors, {
  brand: `#005659`,
  key: '#c2aa85',
  background: '#ffffff',
  text: {
    normal: '#323232',
  },
});

export const vars = { ...root, colors };

export const enum Media {
  Mobile = `screen and (min-width: 510px)`,
  Tablet = `screen and (min-width: 768px)`,
  Laptop = `screen and (min-width: 1200px)`,
  Desktop = `screen and (min-width: 1440px)`,
}

//   font: {

//   }
//   $color_black                                : ;
// $color_white								: rgba(255,255,255,1.0);
// $color_gold									: rgba(194,170,133,1.0);
// $color_green								: darken(rgba(000,116,120,1.0),6%);

// // Font definitions
// $font_family_main                           : 'Neutra Text', 'Helvetica Neue', 'Helvetica', sans-serif;
// $font_family_henriette-bold-italic          : 'Henriette-Bold-Italic', 'Georgia', serif;
// $font_family_henriette-medium-italic        : 'Henriette-Medium-Italic', 'Georgia', serif;

// $font_size_base                             : 21px;
// $font_size_base_sm                          : 15px;
