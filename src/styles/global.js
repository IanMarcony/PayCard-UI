import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #E5E5E5;
    /* -webkit-font-smoothing: antialiased; */
    color: #000;
    font: 16px 400 'Roboto', sans-serif;
  }

  h1,h2,h3,h4,h5{
    font-weight: 700;
  }


  button, a{
    cursor: pointer;

  }

`;
