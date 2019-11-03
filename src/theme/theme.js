import React from 'react';
import { Global, css } from '@emotion/core';
import { syntaxHighlighterPrism, future } from '@mdx-deck/themes';
import { prismTheme } from './prismTheme';
import { Analytics } from '../components/Analytics';

export const theme = syntaxHighlighterPrism({
  ...future,
  font: `"SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;`,
  colors: {
    background: '#FCF5F3',
    blue: '#0062ff',
    code: '#333',
    link: '#FF7D4D',
    pre: '#0af',
    preBackground: '#000',
    text: '#111',
    primary: '#FF7D4D',
    ui5: '#171717'
  },
  heading: {
    fontWeight: 600,
    color: '#111',
    textAlign: 'left',
    marginTop: 0,
    paddingLeft: '1rem',
    paddingRight: '1rem'
  },
  ul: {
    alignSelf: 'flex-start',
    marginLeft: '1rem'
  },
  h1: {
    textDecoration: 'underline',
    textDecorationColor: '#FF7D4D',
    textTransform: 'none'
  },
  h2: {
    maxWidth: '90%'
  },
  pre: {
    display: 'inline-block'
  },
  p: {
    textAlign: 'left',
    paddingLeft: '1rem',
    paddingRight: '1rem'
  },
  em: {
    color: '#333'
  },
  blockquote: {
    textAlign: 'left',
    borderLeft: '0.5rem solid #ccc',
    paddingLeft: '2rem'
  },
  Slide: {
    padding: '10vh 10vw',
    alignItems: 'flex-start'
  },
  Root: {
    width: '100%'
  },
  prism: { style: prismTheme },
  Provider({ children }) {
    return (
      <>
        <ThemeGlobal />
        <>{children}</>
        <Analytics/>
      </>
    );
  }
});

export function ThemeGlobal() {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400&display=swap');
        html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        em {
          color: #555;
        }

        strong {
          text-decoration: underline;
          text-decoration-color: #ff7d4d;
        }

        :not(pre) > code {
          display: inline-block;
          background: #fde9e1;
          padding: 2px 3px;
          margin: 4px 0;
          border-radius: 8px;
        }

        div[role='group'] {
          width: 100%;
        }
      `}
    />
  );
}
