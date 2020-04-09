import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Montserrat, sans-serif;
    font-weight: 300;
    color: #fff;
    background-color: #2E2F34;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font-family: Montserrat, sans-serif;
    color: #fff;
  } 

  button {
    cursor: pointer;
  }
`;
