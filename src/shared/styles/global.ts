import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  button, a {
    cursor: pointer;
  }
  body {
    margin: 0;
    height: 100vh;
    width: 100vw;
    padding: 0;
    font-family: sans-serif !important;
    font-weight: 400;
    font-style: normal;
    transition: all 0.50s linear;
  }
`;
