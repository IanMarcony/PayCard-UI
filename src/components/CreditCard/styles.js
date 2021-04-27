import styled from "styled-components";

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

  @media (max-width: 850px) {
    width: calc(548.73px * 0.5);
    height: calc(261.72px * 0.5);
    border-radius: 10px;
  }

  @media (max-width: 450px) {
    width: calc(548.73px * 0.3);
    height: calc(261.72px * 0.3);
    border-radius: 3px;
  }
`;

export const BrandCard = styled.div`
  display: flex;
  #red-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #d53333;
    @media (max-width: 850px) {
      width: calc(32px * 0.5);
      height: calc(32px * 0.5);
    }
    @media (max-width: 450px) {
      width: calc(32px * 0.3);
      height: calc(32px * 0.3);
    }
  }

  #yellow-circle {
    position: relative;
    left: -15px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(234, 153, 33, 0.75);
    @media (max-width: 850px) {
      width: calc(32px * 0.5);
      height: calc(32px * 0.5);
      left: -10px;
    }

    @media (max-width: 450px) {
      width: calc(32px * 0.3);
      height: calc(32px * 0.3);
      left: -5px;
    }
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
  @media (max-width: 850px) {
    margin-top: 10px;

    h1 {
      font-size: 12px;
    }

    > div {
      margin-top: 0px;

      #group {
        > div {
          margin-top: 0px;
          width: 6px;
          height: 6px;

          & + div {
            margin-left: 5px;
          }
        }
      }
      #group + #group {
        margin-left: 20px;
      }
    }
  }

  @media (max-width: 450px) {
    margin-top: 1px;

    h1 {
      font-size: 8.5px;
    }

    > div {
      #group {
        > div {
          width: 3.5px;
          height: 3.5px;

          & + div {
            margin-left: 1px;
          }
        }
      }
      #group + #group {
        margin-left: 10px;
      }
    }
  }
`;

export const CVVNumberCard = styled.div`
  margin-left: 80px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 850px) {
    margin-left: 20px;
    font-size: 14px;
    margin-top: 0px;
  }

  @media (max-width: 450px) {
    margin-left: 8px;
    font-size: 9px;
  }
`;

export const MoreInfoCard = styled.div`
  width: max-content;
  padding-top: 10px;
  padding-left: 70%;
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    padding-top: 5px;

    h1,
    span {
      font-size: 10px;
    }
  }
  @media (max-width: 450px) {
    padding-top: 1px;

    h1,
    span {
      font-size: 4px;
    }
  }
`;

export const NameCard = styled.h1`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;

  @media (max-width: 850px) {
    font-size: 15px;
    line-height: 0px;
  }

  @media (max-width: 450px) {
    font-size: 9px;
  }
`;
