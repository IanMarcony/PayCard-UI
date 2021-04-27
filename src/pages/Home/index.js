import React, { useCallback, useState } from "react";

import InputMask from "react-input-mask";
import CreditCard from "../../components/CreditCard";
import lampadaIcon from "../../assets/images/lampada.svg";
import lampadaBlackIcon from "../../assets/images/lampada-black.svg";
import { useTheme } from "../../hooks/theme";
import useWindowDimensions from "../../hooks/window";

import {
  Container,
  TitleArea,
  FormCard,
  InputArea,
  SwitchThemeArea,
  LampButton,
  Ball1DarkMode,
  Ball2DarkMode,
} from "./styles";

function Home() {
  const windowDimension = useWindowDimensions();

  const [isChecked, setIsChecked] = useState(() => {
    const checked = localStorage.getItem("@paycard:checked");

    return checked === "true" ? true : false;
  });
  const { changeGlobalTheme, changeTheme, theme, toggleSelector } = useTheme();
  const handleTheme = useCallback(
    (checked) => {
      setIsChecked(checked);
      changeGlobalTheme(checked);
      changeTheme(checked);
    },
    [changeGlobalTheme, changeTheme]
  );

  const handleThemeThird = useCallback(
    (checked) => {
      setIsChecked(false);
      changeGlobalTheme(checked, true);
      changeTheme(checked, true);
    },
    [changeGlobalTheme, changeTheme]
  );

  return (
    <Container>
      {theme.hasBall && <Ball2DarkMode theme={theme} />}
      {windowDimension.width > 850 ? (
        <SwitchThemeArea>
          <input
            class="l"
            type="checkbox"
            checked={isChecked}
            onChange={(event) => handleTheme(event.target.checked)}
          />

          <button type="button" onClick={() => handleThemeThird()}></button>
        </SwitchThemeArea>
      ) : (
        <LampButton onClick={() => toggleSelector()}>
          <img
            src={theme.isLight ? lampadaBlackIcon : lampadaIcon}
            alt="Trocar Tema"
          />
        </LampButton>
      )}
      {theme.hasBall && <Ball1DarkMode theme={theme} />}

      <CreditCard />
      <TitleArea theme={theme}>
        <h1>Let's play</h1>
        <h1>It's easy</h1>
      </TitleArea>
      <FormCard theme={theme}>
        <span>
          <InputArea theme={theme}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </InputArea>
          <InputArea theme={theme}>
            <label htmlFor="card-number">Card Number</label>
            <InputMask
              id="card-number"
              mask="9999 9999 9999"
              maskPlaceholder="_"
              alwaysShowMask={true}
            />
          </InputArea>
        </span>
        <span id="second-line-form">
          <InputArea theme={theme}>
            <label htmlFor="valid-until">Valid Until</label>
            <InputMask
              id="valid-until"
              mask="99/99"
              maskPlaceholder="mm/yy"
              alwaysShowMask={true}
            />
          </InputArea>
          <InputArea id="second-line-input" theme={theme}>
            <label htmlFor="cvv">CVV</label>
            <InputMask
              id="cvv"
              mask="9999"
              maskPlaceholder="_"
              alwaysShowMask={true}
              isLight
            />
          </InputArea>
        </span>

        <button type="button">Pay Now</button>
      </FormCard>
    </Container>
  );
}

export default Home;
