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
    height: 100vh;
    padding: 10px 80px;

    @media (max-width: 850px) {
    padding: 10px 20px;

  }
  }

  body{
    overflow-x: hidden;
    height: 100%;

    background: ${(props) => props.theme.backgroundColor};
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme.color};
    font-family:  'Source Sans Pro',
    sans-serif;
    font-size: 16px;
    @media (max-width: 850px) {
      height: 100vh;
  }
  }

  h1,h2,h3,h4,h5{
    font-size: 54px;
    font-weight: 700;
  }


  button, a{
    cursor: pointer;

  }

`;
