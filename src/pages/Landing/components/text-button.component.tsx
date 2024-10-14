import { Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

interface TextButtonComponentProps {
  text: string;
}

export const TextButtonComponent: React.FC<TextButtonComponentProps> = ({
  text = "blog",
}) => {
  const theme = useTheme();
  const navigation = useNavigate();

  const handleNavigation = (text: string) => {
    navigation({ to: `/${text}` });
  };
  return (
    <Button
      sx={{
        padding: 0,
        minWidth: "unset",
        textTransform: "none",
        color: theme.palette.primary.main,
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: { xs: 6, sm: 8, md: 10 },
          left: 0,
          width: "100%",
          height: "10px",
          backgroundColor: theme.palette.primary.main,
          opacity: 0.5,
          pointerEvents: "none",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: { xs: 6, sm: 8, md: 10 },
          left: 0,
          width: "0%",
          height: "10px",
          backgroundColor: theme.palette.primary.main,
          opacity: 1,
          transition: "width 0.3s ease",
          pointerEvents: "none",
        },
        "&:hover::before": {
          width: "100%",
        },
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      onClick={() => handleNavigation(text)}
    >
      <Typography
        fontSize={{ xs: "20px", sm: "24px", lg: "26px" }}
        color={theme.palette.text.secondary}
        fontFamily="'Noe Display', Georgia, Times, serif"
        sx={{ position: "relative", zIndex: 1, paddingBottom: "5px" }}
      >
        {text}
      </Typography>
    </Button>
  );
};
