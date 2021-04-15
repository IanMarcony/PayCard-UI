import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const TitleArea = styled.div`
  margin-top: 10px;

  > h1 {
    color: ${(props) => props.theme.titleArea.first};

    & + h1 {
      color: ${(props) => props.theme.titleArea.second};
      font-size: 45px;
    }
  }
`;

export const FormCard = styled.form`
  /* width: 100%; */
  max-width: 700px;
  margin-top: 280px;

  display: flex;
  flex-direction: column;
  span {
    display: flex;
  }

  span + span {
    margin-top: 10px;
  }

  > button {
    margin-top: 16px;

    width: 390px;
    height: 50px;

    font-weight: 700;

    color: ${(props) => props.theme.formCard.button.color};
    border: 0;
    border-radius: 5px;
    background-color: ${(props) => props.theme.formCard.button.backgroundColor};

    transition: opacity 400ms;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  & + div {
    margin-left: 10px;
  }

  label {
    color: ${(props) => props.theme.inputArea.label.color};
    font-size: 20px;
    margin-bottom: 5px;
  }

  input {
    width: 394.28px;
    height: 54.28px;
    background: ${(props) => props.theme.inputArea.input.backgroundColor};
    padding: 10px;

    color: ${(props) => props.theme.inputArea.input.color};

    border: 1px solid ${(props) => props.theme.inputArea.input.borderColor};
    border-radius: 5px;
  }
`;

//Switch Theme

export const SwitchThemeArea = styled.div`
  position: absolute;

  top: 5%;
  right: 2%;

  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 20px;
    height: 20px;
    margin-top: 6px;
    border: 0;

    border-radius: 50%;
    background: rgb(79, 14, 107);
    background: linear-gradient(
      45deg,
      rgba(79, 14, 107, 1) 0%,
      rgba(140, 4, 150, 1) 50%,
      rgba(196, 11, 223, 1) 100%
    );

    &:hover {
      background: ${shade(0.2, "rgb(79, 14, 107)")};
    }
  }

  > input {
    cursor: pointer;
    display: block;
    margin-bottom: 1.5em;
  }

  .l {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 0.75em;
    box-shadow: 0.125em 0.125em 0 0.125em rgba(0, 0, 0, 0.3) inset;
    color: #fdea7b;
    display: inline-flex;
    align-items: center;
    margin: auto;
    padding: 0.15em;
    width: 3em;
    height: 1.5em;
    transition: background-color 0.1s 0.3s ease-out,
      box-shadow 0.1s 0.3s ease-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .l:before,
  .l:after {
    content: "";
    display: block;
  }
  .l:before {
    background-color: #d7d7d7;
    border-radius: 50%;
    width: 1.2em;
    height: 1.2em;
    transition: background-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
    z-index: 1;
  }
  .l:after {
    background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.15) 0) 0 50% /
        50% 100%,
      repeating-linear-gradient(
          90deg,
          #bbb 0,
          #bbb,
          #bbb 20%,
          #999 20%,
          #999 40%
        )
        0 50% / 50% 100%,
      radial-gradient(circle at 50% 50%, #888 25%, transparent 26%);
    background-repeat: no-repeat;
    border: 0.25em solid transparent;
    border-left: 0.4em solid #d8d8d8;
    border-right: 0 solid transparent;
    transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
    transform: translateX(-22.5%);
    transform-origin: 25% 50%;
    width: 1.2em;
    height: 1em;
  }
  /* Checked */
  .l:checked {
    background-color: rgba(0, 0, 0, 0.45);
    box-shadow: 0.125em 0.125em 0 0.125em rgba(0, 0, 0, 0.1) inset;
  }
  .l:checked:before {
    background-color: currentColor;
    transform: translateX(125%);
  }
  .l:checked:after {
    border-left-color: currentColor;
    transform: translateX(-2.5%) rotateY(180deg);
  }
  /* Other States */
  .l:focus {
    /* Usually an anti-A11Y practice but set to remove an annoyance just for this demo */
    outline: 0;
  }
`;

//Card

export const CardArea = styled.div`
  position: absolute;
  width: 548.73px;
  height: 261.72px;
  right: 2%;
  top: 8%;

  background: ${(props) => props.theme.cardArea.backgroundColor};
  border-radius: 25px;
  transform: rotate(11.5deg);

  padding: 20px;

  color: #fff;
`;

export const BrandCard = styled.div`
  display: flex;
  #red-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #d53333;
  }

  #yellow-circle {
    position: relative;
    left: -15px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(234, 153, 33, 0.75);
  }
`;

export const CardNumberArea = styled.div`
  width: 100%;
  margin-top: 20px;

  h1 {
    font-size: 18px;
    font-weight: 400;
  }

  > div {
    display: flex;
    align-items: center;
    margin-top: 5px;

    margin-left: 15px;

    #group {
      display: flex;
      align-items: center;

      > div {
        margin-top: 10px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #fff;

        & + div {
          margin-left: 10px;
        }
      }
    }
    #group + #group {
      margin-left: 40px;
    }
  }
`;

export const CVVNumberCard = styled.div`
  margin-left: 80px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 400;
`;

export const MoreInfoCard = styled.div`
  width: max-content;
  padding-top: 10px;
  padding-left: 70%;
  display: flex;
  flex-direction: column;
`;

export const NameCard = styled.h1`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
`;

//Balls for DarkMode

export const Ball1DarkMode = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;

  top: 20%;
  right: 40%;
  border-radius: 50%;
  background: ${(props) => props.theme.ball.background};
  background: ${(props) => props.theme.ball.backgroundGradient};
`;

export const Ball2DarkMode = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;

  top: -10%;
  right: -10%;
  border-radius: 50%;
  background: ${(props) => props.theme.ball.background};
  background: ${(props) => props.theme.ball.backgroundGradient};
`;
