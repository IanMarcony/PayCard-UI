import React from "react";

import Home from "./pages/Home";

import { useTheme } from "./hooks/theme";

import GlobalStyle from "./styles/global";

function App() {
  const { globalTheme } = useTheme();

  return (
    <>
      <Home />
      <GlobalStyle theme={globalTheme} />
    </>
  );
}

export default App;
