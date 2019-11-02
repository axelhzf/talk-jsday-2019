import React from 'react';
import { Global, css } from '@emotion/core';
import { colors } from './colors';
import { syntaxHighlighterPrism, future } from '@mdx-deck/themes';
import { prismTheme } from './prismTheme';

export const theme = syntaxHighlighterPrism({
  ...future,
  font: `'IBM Plex Sans', Arial, sans`,
  colors: {
    background: '#ffffff',
    blue: '#0062ff',
    code: '#0062ff',
    link: '#6ea6ff',
    pre: '#0af',
    preBackground: '#000',
    text: '#171717',
    primary: '#0062ff',
    ui5: '#171717'
  },
  heading: {
    fontWeight: 400,
    color: '#171717',
    textAlign: 'center',
    marginTop: 0,
    paddingLeft: '1rem',
    paddingRight: '1rem',
    letterSpacing: 'normal',
    textDecoration: 'underline',
    textDecorationColor: colors.blue30
  },
  ul: {
    alignSelf: 'flex-start',
    marginLeft: '1rem'
  },
  h1: {
    textDecoration: 'underline',
    textDecorationColor: colors.blue30,
    textTransform: 'uppercase'
  },
  pre: {
    display: 'inline-block'
  },
  blockquote: {
    textAlign: 'left',
    borderLeft: '0.5rem solid #ccc',
    paddingLeft: '2rem'
  },
  prism: { style: prismTheme },
  Provider({ children }) {
    return (
      <>
        <ThemeGlobal />
        <>{children}</>
      </>
    );
  }
});

export function ThemeGlobal() {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,600,700&display=swap');
        @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400&display=swap');

        html {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
  );
}
