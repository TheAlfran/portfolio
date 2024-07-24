import { useTheme } from "@mui/material";

export const useChartConfig = () => {
  const theme = useTheme();

  const data = [
    { value: 58, label: "Coder", color: theme.palette.primary.main },
    { value: 25, label: "Gamer", color: theme.palette.secondary.main },
    { value: 17, label: "Designer", color: theme.palette.tertiary.main },
  ];

  const size = {
    width: 800,
    height: 600,
  };

  const titleTextStyle = {
    fontSize: "45px",
    color: theme.palette.text.primary,
  };
  const subTextStyle = {
    fontSize: "12px",
    color: theme.palette.text.secondary,
  };

  return { data, size, titleTextStyle, subTextStyle };
};
