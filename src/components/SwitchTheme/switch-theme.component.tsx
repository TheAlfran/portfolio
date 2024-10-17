import { Stack, Typography, useTheme } from "@mui/material";
import { ThemeButtonComponent } from "./components";
import { ColorModes } from "@core/types";

export const SwitchTheme = () => {
  const themes: {
    mode: ColorModes;
    label: string;
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
    color5?: string;
    titleColor?: string;
    $backgrounColor?: string;
  }[] = [
    { mode: "light", label: "Classic" },
    {
      mode: "dark",
      label: "Dark",
      color1: "#E6E6E6",
      color2: "#686D76",
      color3: "#333333",
      color4: "#B3E2A7",
      color5: "#F7F7F7",
      titleColor: "#FFFFFF",
      $backgrounColor: "#000000",
    },
    {
      mode: "spring",
      label: "Spring",
      color1: "#A87676",
      color2: "#CA8787",
      color3: "#E1ACAC",
      color4: "#A85959",
      color5: "#A64E4E",
      titleColor: "#A87676",
      $backgrounColor: "#FFD0D0",
    },
    {
      mode: "summer",
      label: "Summer",
      color1: "#618264",
      color2: "#B0EBB4",
      color3: "#BFF6C3",
      color4: "#A85959",
      color5: "#A64E4E",
      titleColor: "#618264",
      $backgrounColor: "#E0FBE2",
    },
    {
      mode: "autumn",
      label: "Autumn",
      color1: "#D97B3E",
      color2: "#F4A261",
      color3: "#F7C6A8",
      color4: "#5C4033",
      color5: "#7B5D44",
      titleColor: "#D97B3E",
      $backgrounColor: "#FFE8D6",
    },
    {
      mode: "winter",
      label: "Winter",
      color1: "#5D829A",
      color2: "#A3C4D6",
      color3: "#D1E4F3",
      color4: "#3C4A5B",
      color5: "#5A7184",
      titleColor: "#5D829A",
      $backgrounColor: "#E0F0FF",
    },
  ];

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
        sx={{ overflowX: "auto", scrollBehavior: "smooth" }}
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
