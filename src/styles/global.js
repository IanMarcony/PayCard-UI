import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root{
    width: 100%;
    height: 100%;
    padding: 10px 80px;
  }

  body{
    overflow-x: hidden;
    background: ${(props) => props.theme.backgroundColor};
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme.color};
    font-family:  'Source Sans Pro',
    sans-serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5{
    font-size: 54px;
    font-weight: 700;
  }


  button, a{
    cursor: pointer;

  }

`;
