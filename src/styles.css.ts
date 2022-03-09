import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { Media, vars } from './theme.css';

globalFontFace('Neutra Text', {
  src: `url(/fonts/NeutraText-Book.woff) format('woff')`,
  fontStyle: 'normal',
  fontWeight: 400,
});

globalFontFace('Neutra Text', {
  src: `url(/fonts/NeutraText-BookItalic.woff) format('woff')`,
  fontStyle: 'italic',
  fontWeight: 400,
});

globalFontFace('Neutra Text', {
  src: `url(/fonts/NeutraText-Bold.woff) format('woff')`,
  fontStyle: 'normal',
  fontWeight: 700,
});

globalStyle('html,body', {
  margin: 0,
  padding: 0,
});

globalStyle('body', {
  width: '100%',
  overflowX: 'hidden',
  backgroundColor: vars.colors.background,
  color: vars.colors.text.normal,
  fontFamily: vars.font.body,
  fontWeight: 400,
  letterSpacing: '0.025em',

  fontSize: '15px',
  '@media': {
    [Media.Tablet]: {
      fontSize: '21px',
    },
  },
});

globalStyle('h1,h2,h3,h4,h5,h6', {
  fontFamily: vars.font.headline,
});
