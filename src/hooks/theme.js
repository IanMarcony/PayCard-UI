import React, { useState, useContext, createContext, useCallback } from "react";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [globalTheme, setGlobalTheme] = useState(() => {
    const color = localStorage.getItem("@paycard:color-global");
    const backgroundColor = localStorage.getItem(
      "@paycard:backgroundColor-global"
    );

    if (color && backgroundColor) {
      return {
        color,
        backgroundColor,
      };
    }

    return {
      color: "#000",
      backgroundColor: "#FFF",
    };
  });

  const [theme, setTheme] = useState(() => {
    const themeStoraged = JSON.parse(localStorage.getItem("@paycard:theme"));

    if (themeStoraged) {
      return themeStoraged;
    }

    return {
      titleArea: {
        first: "#a500a8",
        second: "#000",
      },
      formCard: {
        button: {
          color: "#fff",
          backgroundColor: "#a500a8",
        },
      },
      inputArea: {
        label: {
          color: "#000",
        },
        input: {
          color: "#000",
          backgroundColor: "#e0e0e0",
          borderColor: "#c1c1c1",
        },
      },
      cardArea: {
        backgroundColor: "#a500a8",
      },
      hasBall: false,
    };
  });

  const changeGlobalTheme = useCallback((isLight) => {
    setGlobalTheme({
      color: isLight ? "#000" : "#fff",
      backgroundColor: isLight ? "#FFF" : "#393636",
    });

    localStorage.setItem("@paycard:color-global", isLight ? "#000" : "#fff");
    localStorage.setItem(
      "@paycard:backgroundColor-global",
      isLight ? "#E5E5E5" : "#393636"
    );
    localStorage.setItem("@paycard:checked", String(isLight));
  }, []);

  const changeTheme = useCallback((isLight) => {
    const typeTheme = {
      titleArea: {
        first: isLight ? "#a500a8" : "#FFF",
        second: isLight ? "#000" : "#9039AE",
      },
      formCard: {
        button: {
          color: isLight ? "#fff" : "#9039AE",
          backgroundColor: isLight ? "#a500a8" : "#fff",
        },
      },
      inputArea: {
        label: {
          color: isLight ? "#000" : "#fff",
        },
        input: {
          color: isLight ? "#000" : "#fff",
          backgroundColor: isLight
            ? "rgba(198, 198, 199, 0.55)"
            : "rgba(82, 80, 89, 0.55)",
          borderColor: isLight ? "#c1c1c1" : "#000",
        },
      },
      cardArea: {
        backgroundColor: isLight ? "#a500a8" : "rgba(255, 255, 255, 0.51)",
      },
      hasBall: isLight ? false : true,
    };
    setTheme(typeTheme);

    localStorage.setItem("@paycard:theme", JSON.stringify(typeTheme));
  }, []);

  return (
    <ThemeContext.Provider
      value={{ globalTheme, changeGlobalTheme, theme, changeTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export { ThemeProvider, useTheme };
