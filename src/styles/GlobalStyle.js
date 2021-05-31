import { createGlobalStyle } from 'styled-components';
import variables from './Variables';

const GlobalStyle = createGlobalStyle`
  ${variables}
  html {
    box-sizing: border-box;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    ${'' /* background-color: red; */}
  }
`;

export default GlobalStyle;
