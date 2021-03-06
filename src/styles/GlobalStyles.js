import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --bgColor: #EAF2F8;
    --fontColor: #17202A;
    --secundary: #AED6F1;
    --contrast: #2874A6;
    --blackOpacity: #0000004D;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--bgColor);
    color: var(--fontColor);
    text-align: center;
  }
`
