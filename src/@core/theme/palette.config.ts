import { PaletteOptions } from "@mui/material/styles/createPalette";

interface CustomPaletteOptions extends PaletteOptions {
  tertiary?: {
    main: string;
  };
  default?: {
    main: string;
  };
}

export const lightThemePalette: CustomPaletteOptions = {
  primary: {
    main: "#538392",
  },
  secondary: {
    main: "#6295A2",
  },
  tertiary: {
    main: "#80B9AD",
  },
  text: {
    primary: "#B3E2A7",
    secondary: "#686D76",
  },
  default: {
    main: "#E6E6E6",
  },
  background: {
    default: "#FFFFFF",
  },
};

export const darkThemePalette: CustomPaletteOptions = {
  primary: {
    main: "#538392",
  },
  secondary: {
    main: "#6295A2",
  },
  tertiary: {
    main: "#80B9AD",
  },
  text: {
    primary: "#B3E2A7",
    secondary: "#686D76",
  },
  default: {
    main: "#FFFFFF",
  },
  background: {
    default: "#333333",
  },
};
