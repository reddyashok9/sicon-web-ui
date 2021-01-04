import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Mulish', sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
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
  .loginContainer {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #F7F8FC;
    width: 100vw;
    height: 100vw;
  }
  .loginBox {
    margin: 0px auto;
    width: 450px;
    background-color: #fff;
    text-align: center;
    padding: 20px 60px;
    position: absolute;
    top: calc(50vh - 250px);
    left: calc(50vw - 225px);
  }
  .loginHeaderText {
    margin: 10px 0;
  }
  .textfield {
    margin: 10px 0;
  }
`;
