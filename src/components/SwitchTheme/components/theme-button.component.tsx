import { Box, Button, Typography, useTheme } from "@mui/material";
import { useThemeContext } from "@core/hooks";
import { ColorModes } from "@core/types";

interface ThemeButtonComponentProps {
  targetTheme: ColorModes;
  label?: string;
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
  color5?: string;
  titleColor?: string;
  $backgroundColor?: string;
}

export const ThemeButtonComponent: React.FC<ThemeButtonComponentProps> = ({
  targetTheme,
  label,
  color1 = "#538392",
  color2 = "#6295A2",
  color3 = "#80B9AD",
  color4 = "#B3E2A7",
  color5 = "#686D76",
  titleColor = "#000000",
  $backgroundColor = "#FFFFFF",
}) => {
  const { colorMode, setColorMode } = useThemeContext();

  const handleClick = () => {
    if (targetTheme !== colorMode) {
      setColorMode(targetTheme);
    }
  };

  const theme = useTheme();

  return (
    <Button
      onClick={handleClick}
      sx={{
        bgcolor: $backgroundColor,
        borderRadius: "10px",
        minWidth: "140px",
        maxWidth: "140px",
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        cursor: targetTheme === colorMode ? "default" : "pointer",
        border:
          targetTheme === colorMode
            ? `2px solid ${theme.palette.primary.main}`
            : "2px solid transparent",
      }}
      disabled={targetTheme === colorMode}
    >
      <Box>
        <Typography
          color={titleColor}
          textTransform="capitalize"
          fontSize="14px"
        >
          {label}
        </Typography>
      </Box>
      <Box display="flex" position="relative" left="20px">
        <Box
          width="30px"
          borderRadius="50%"
          height="30px"
          bgcolor={color1}
          border="1px solid black"
          borderColor="white"
        />
        <Box
          width="30px"
          borderRadius="50%"
          height="30px"
          position="relative"
          left="-10px"
          bgcolor={color2}
          border="1px solid black"
          borderColor="white"
        />
        <Box
          width="30px"
          borderRadius="50%"
          height="30px"
          position="relative"
          left="-20px"
          bgcolor={color3}
          border="1px solid black"
          borderColor="white"
        />
        <Box
          width="30px"
          borderRadius="50%"
          height="30px"
          position="relative"
          left="-30px"
          bgcolor={color4}
          border="1px solid black"
          borderColor="white"
        />
        <Box
          width="30px"
          borderRadius="50%"
          height="30px"
          position="relative"
          left="-40px"
          bgcolor={color5}
          border="1px solid black"
          borderColor="white"
        />
      </Box>
    </Button>
  );
};
