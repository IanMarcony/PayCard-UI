import React, { useCallback } from "react";

import { useTheme } from "../../hooks/theme";
import checkWhite from "../../assets/images/check-mark-white.svg";
import checkBlack from "../../assets/images/check-mark-black.svg";

import { Container } from "./styles";

function SelectorTheme() {
  const { theme, changeGlobalTheme, changeTheme } = useTheme();

  const handleTheme = useCallback(
    (checked) => {
      changeGlobalTheme(checked);
      changeTheme(checked);
    },
    [changeGlobalTheme, changeTheme]
  );

  const handleThemeThird = useCallback(
    (checked) => {
      changeGlobalTheme(checked, true);
      changeTheme(checked, true);
    },
    [changeGlobalTheme, changeTheme]
  );

  return (
    <Container id="selector-theme">
      <h1>Appearance</h1>

      <button type="button" onClick={() => handleTheme(false)}>
        Dark
        {!theme.isLight && !theme.thirdOption ? (
          <img src={checkWhite} alt="checked" />
        ) : null}
      </button>

      <button type="button" onClick={() => handleTheme(true)}>
        Light {theme.isLight ? <img src={checkBlack} alt="checked" /> : null}
      </button>

      <button type="button" onClick={() => handleThemeThird()}>
        Colorful
        {!theme.isLight && theme.thirdOption ? (
          <img src={checkWhite} alt="checked" />
        ) : null}
      </button>
    </Container>
  );
}

export default SelectorTheme;
