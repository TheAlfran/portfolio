import { Stack, Typography, useTheme } from "@mui/material";

import { ThemeButtonComponent } from ".";
import { themes } from "../data/theme.data";

export const SwitchTheme = () => {
  const theme = useTheme();

  return (
    <Stack
      width="100%"
      height="180px"
      bgcolor={theme.palette.default.main}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      spacing={2}
      padding={2}
    >
      <Typography variant="h6" color={theme.palette.primary.main}>
        Switch Theme
      </Typography>
      <Stack
        sx={{
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "thin",
        }}
        width="90%"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent={{
          xs: "flex-start",
          sm: "flex-start",
          md: "flex-start",
          lg: "center",
        }}
        gap="20px"
      >
        {themes.map((theme) => (
          <ThemeButtonComponent
            key={theme.mode}
            targetTheme={theme.mode}
            label={theme.label}
            color1={theme.color1}
            color2={theme.color2}
            color3={theme.color3}
            color4={theme.color4}
            color5={theme.color5}
            titleColor={theme.titleColor}
            $backgroundColor={theme.$backgrounColor}
          />
        ))}
      </Stack>
    </Stack>
  );
};
