import { Paper, useTheme } from "@mui/material";

export const SeparatorComponent = () => {
  const theme = useTheme();
  return (
    <Paper
      elevation={2}
      sx={{ width: "100%", height: "1px", bgcolor: theme.palette.background.default, mt:"30px", mb: "30px" }}
    />
  );
};
