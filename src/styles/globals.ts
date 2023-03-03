import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /************ Custom Font ************/
  @font-face {
    font-family: Centra;
    src: url('/assets/font/CentraNo2-Bold.ttf');
    font-weight: 700;
  }
  @font-face {
    font-family: Centra;
    src: url('/assets/font/CentraNo2-Medium.ttf');
    font-weight: 500;
  }
  @font-face {
    font-family: Centra;
    src: url('/assets/font/CentraNo2-Book.ttf');
    font-weight: 400;
  }

  /************ Default Css ************/
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 75px;
  }

  body {
    font-weight: 400;
    overflow-x: hidden;
    position: relative;
    background-color: #121212 !important;
    color: #fff !important;
    font-family: 'Centra', sans-serif !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    line-height: normal;
  }

  p,
  a,
  li,
  button,
  ul {
    margin: 0;
    padding: 0;
    line-height: normal;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  img {
    width: 100%;
    height: auto;
  }

  button {
    border: 0;
    background-color: transparent;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }

  @media (min-width: 1700px) {
    main .container {
      max-width: 100%;
      padding: 0 150px;
    }
  }

  p.success {
    color: green;
  }

  p.danger {
    color: red;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;
