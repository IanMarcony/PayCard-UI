import React from "react";

import Home from "./pages/Home";

import { useTheme } from "./hooks/theme";

import GlobalStyle from "./styles/global";
import SelectorTheme from "./components/SelectorTheme";
import useWindowDimensions from "./hooks/window";

function App() {
  const { globalTheme, isActiveSelector } = useTheme();
  const windowDimension = useWindowDimensions();

  return (
    <>
      <Home />
      {windowDimension.width < 850 && isActiveSelector ? (
        <SelectorTheme />
      ) : null}
      <GlobalStyle theme={globalTheme} />
    </>
  );
}

export default App;
