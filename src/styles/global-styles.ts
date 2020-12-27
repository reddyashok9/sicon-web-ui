import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  main {
    display: flex;
    flex-direction: row;
    align-content: stretch;
  }
  .sideBar {
    height: 100vh;
    background-color: #05AC72;
    width: 255px;
    .logoContainer {
      padding: 30px;
    }
  }
  .mainContainer {
  }
  .MuiListItemIcon-root {
      color: #fff !important;
  }
`;
