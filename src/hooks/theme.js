import React, { useState, useContext, createContext, useCallback } from "react";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [globalTheme, setGlobalTheme] = useState(() => {
    const globalThemeStoraged = JSON.parse(
      localStorage.getItem("@paycard:global-theme")
    );

    if (globalThemeStoraged) {
      return globalThemeStoraged;
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
      ball: {
        background: "rgb(79, 14, 107)",
        backgroundGradient:
          "linear-gradient(45deg,rgba(79, 14, 107, 1) 0%, rgba(140, 4, 150, 1) 50%,rgba(196, 11, 223, 1)100%)",
      },
    };
  });

  const changeGlobalTheme = useCallback((isLight, thirdOption = false) => {
    const typeGlobalTheme = {
      color: isLight ? "#000" : "#fff",
      backgroundColor: !thirdOption
        ? isLight
          ? "#FFF"
          : "#393636"
        : "linear-gradient(180deg, rgba(176,12,157,1) 0%, rgba(129,20,162,1) 35%, rgba(82,28,167,1) 100%);",
    };
    setGlobalTheme(typeGlobalTheme);

    localStorage.setItem(
      "@paycard:global-theme",
      JSON.stringify(typeGlobalTheme)
    );

    localStorage.setItem("@paycard:checked", String(isLight));
  }, []);

  const changeTheme = useCallback((isLight, thirdOption = false) => {
    const typeTheme = {
      titleArea: {
        first: isLight ? "#a500a8" : "#FFF",
        second: !thirdOption ? (isLight ? "#000" : "#9039AE") : "#F478E8",
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
          backgroundColor: !thirdOption
            ? isLight
              ? "rgba(198, 198, 199, 0.55)"
              : "rgba(82, 80, 89, 0.55)"
            : "rgba(35, 0, 145, 0.55)",
          borderColor: !thirdOption ? (isLight ? "#c1c1c1" : "#000") : "#0000",
        },
      },
      cardArea: {
        backgroundColor: isLight ? "#a500a8" : "rgba(255, 255, 255, 0.51)",
      },
      hasBall: isLight ? false : true,
      ball: {
        background: !thirdOption ? "rgb(79, 14, 107)" : "rgb(254,182,56)",
        backgroundGradient: !thirdOption
          ? "linear-gradient(45deg,rgba(79, 14, 107, 1) 0%, rgba(140, 4, 150, 1) 50%,rgba(196, 11, 223, 1)100%)"
          : "linear-gradient(45deg, rgba(254,186,54,1) 0%, rgba(248,70,114,1) 34%, rgba(244,8,146,1) 48%, rgba(210,34,162,1) 61%, rgba(47,193,219,1) 100%)",
      },
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
