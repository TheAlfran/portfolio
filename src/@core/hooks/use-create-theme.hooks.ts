import { useMemo } from "react";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { darkThemePalette, lightThemePalette } from "@core/theme";

type ColorModes = "light" | "dark";

export const useCreateTheme = () => {
  const COLOR_MODE = "dark" as ColorModes;

  const paletteOptions =
    COLOR_MODE === "light" ? lightThemePalette : darkThemePalette;

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: COLOR_MODE,
          ...paletteOptions,
        },
      }),
    [paletteOptions]
  );

  return responsiveFontSizes(theme);
};
