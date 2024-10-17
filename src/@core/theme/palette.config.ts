import { PaletteOptions } from "@mui/material/styles/createPalette";

export interface CustomPaletteOptions extends PaletteOptions {
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
    main: "#E6E6E6",
  },
  secondary: {
    main: "#686D76",
  },
  tertiary: {
    main: "#333333",
  },
  text: {
    primary: "#B3E2A7",
    secondary: "#F7F7F7",
  },
  default: {
    main: "#242424",
  },
  background: {
    default: "#0D0D0D",
  },
};

export const springThemePalette: CustomPaletteOptions = {
  primary: {
    main: "#D88C9A",
  },
  secondary: {
    main: "#EFC3C5",
  },
  tertiary: {
    main: "#F4DCD6",
  },
  text: {
    primary: "#9E5A63",
    secondary: "#B3747A",
  },
  default: {
    main: "#FFF0F3",
  },
  background: {
    default: "#FFE5E5",
  },
};

export const summerThemePalette: CustomPaletteOptions = {
  primary: {
    main: "#82C892",
  },
  secondary: {
    main: "#AEE1B9",
  },
  tertiary: {
    main: "#D1F2D8",
  },
  text: {
    primary: "#4D4A4A",
    secondary: "#6B6767",
  },
  default: {
    main: "#EBF6EE",
  },
  background: {
    default: "#E0FBE2",
  },
};

export const autumnThemePalette: CustomPaletteOptions = {
  primary: {
    main: "#E07A5F",
  },
  secondary: {
    main: "#F2CCA3",
  },
  tertiary: {
    main: "#F6E2D4",
  },
  text: {
    primary: "#5C4033",
    secondary: "#7B5D44",
  },
  default: {
    main: "#FFF3E2",
  },
  background: {
    default: "#FFE8D6",
  },
};

export const winterThemePalette: CustomPaletteOptions = {
  primary: {
    main: "#5D829A",
  },
  secondary: {
    main: "#D1E4F3",
  },
  tertiary: {
    main: "#F0F7FA",
  },
  text: {
    primary: "#3B3F44",
    secondary: "#5A7184",
  },
  default: {
    main: "#F5FAFC",
  },
  background: {
    default: "#E0F0FF",
  },
};
