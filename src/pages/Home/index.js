import React, { useCallback, useState } from "react";

import InputMask from "react-input-mask";
import { useTheme } from "../../hooks/theme";

import {
  Container,
  TitleArea,
  FormCard,
  InputArea,
  CardArea,
  BrandCard,
  CardNumberArea,
  MoreInfoCard,
  CVVNumberCard,
  NameCard,
  SwitchThemeArea,
  Ball1DarkMode,
  Ball2DarkMode,
} from "./styles";

function Home() {
  const [isChecked, setIsChecked] = useState(() => {
    const checked = localStorage.getItem("@paycard:checked");

    return checked === "true" ? true : false;
  });
  const { changeGlobalTheme, changeTheme, theme } = useTheme();
  const handleTheme = useCallback(
    (checked) => {
      setIsChecked(checked);
      changeGlobalTheme(checked);
      changeTheme(checked);
    },
    [changeGlobalTheme, changeTheme]
  );

  return (
    <Container>
      {theme.hasBall && <Ball2DarkMode />}
      <SwitchThemeArea>
        <input
          class="l"
          type="checkbox"
          checked={isChecked}
          onChange={(event) => handleTheme(event.target.checked)}
        />
      </SwitchThemeArea>
      {theme.hasBall && <Ball1DarkMode />}
      <CardArea theme={theme}>
        <BrandCard>
          <div id="red-circle"></div>
          <div id="yellow-circle"></div>
        </BrandCard>
        <CardNumberArea>
          <h1>CARD NUMBER</h1>
          <div>
            <div id="group">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div id="group">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div id="group">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <CVVNumberCard>1234</CVVNumberCard>
          </div>
          <MoreInfoCard>
            <h1>VALID THROUGH</h1>
            <span>01/28</span>
          </MoreInfoCard>
        </CardNumberArea>

        <NameCard>John Doe</NameCard>
      </CardArea>
      <TitleArea theme={theme}>
        <h1>Let's play</h1>
        <h1>It's easy</h1>
      </TitleArea>
      <FormCard theme={theme}>
        <span>
          <InputArea theme={theme}>
            <label htmlFor="card-number">Card Number</label>
            <InputMask
              id="card-number"
              mask="9999 9999 9999"
              maskPlaceholder="_"
              alwaysShowMask={true}
            />
          </InputArea>
          <InputArea theme={theme}>
            <label htmlFor="valid-until">Valid Until</label>
            <InputMask
              id="valid-until"
              mask="99/99"
              maskPlaceholder="mm/yy"
              alwaysShowMask={true}
            />
          </InputArea>
        </span>
        <span>
          <InputArea theme={theme}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </InputArea>
          <InputArea theme={theme}>
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

        <button type="button">ENTER</button>
      </FormCard>
    </Container>
  );
}

export default Home;
