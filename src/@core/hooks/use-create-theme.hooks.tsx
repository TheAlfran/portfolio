import { createContext, ReactNode, useMemo, useState } from "react";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";

import {
  darkThemePalette,
  springThemePalette,
  summerThemePalette,
  lightThemePalette,
  autumnThemePalette,
  winterThemePalette,
} from "@core/theme";
import { ColorModes } from "@core/types";

interface ThemeContextType {
  colorMode: ColorModes;
  setColorMode: (mode: ColorModes) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, setColorMode] = useState<ColorModes>("light");

  const theme = useMemo(() => {
    let paletteOptions;

    switch (colorMode) {
      case "dark":
        paletteOptions = darkThemePalette;
        break;
      case "spring":
        paletteOptions = springThemePalette;
        break;
      case "summer":
        paletteOptions = summerThemePalette;
        break;
      case "autumn":
        paletteOptions = autumnThemePalette;
        break;
      case "winter":
        paletteOptions = winterThemePalette;
        break;
      case "light":
      default:
        paletteOptions = lightThemePalette;
        break;
    }

    return responsiveFontSizes(
      createTheme({
        palette: {
          mode:
            colorMode === "light" ||
            colorMode === "spring" ||
            colorMode === "summer" ||
            colorMode === "autumn" ||
            colorMode === "winter"
              ? "light"
              : "dark",
          ...paletteOptions,
        },
      })
    );
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
