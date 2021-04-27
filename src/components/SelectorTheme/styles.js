import styled, { keyframes } from "styled-components";

const appearFromBottom = keyframes`
 from{ opacity: 0; bottom: -120% }
  to{ opacity: 1; bottom: 0% }

`;

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  animation: ${appearFromBottom} 1s;
  width: 100%;
  height: 40vh;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  display: flex;

  flex-direction: column;

  align-items: stretch;

  h1 {
    font-size: 24px;
    font-weight: 400;
    padding: 12px 0;
    text-align: center;
  }

  button {
    display: flex;
    text-align: start;
    align-items: center;

    padding: 0 10px;
    background: transparent;
    border: 0;
    outline: 0;
    height: 25%;

    img {
      margin-left: auto;
    }
  }
`;
