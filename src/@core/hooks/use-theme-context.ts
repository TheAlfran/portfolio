import { useContext } from "react";

import { ThemeContext } from "./use-create-theme.hooks";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
