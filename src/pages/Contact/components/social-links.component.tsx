import { Box, Typography, useTheme } from "@mui/material";

interface SocialLinksComponentProps {
  src?: string;
  text?: string;
}

export const SocialLinksComponents: React.FC<SocialLinksComponentProps> = ({
  src = "/twitter.png",
  text = "Twitter / X",
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", direction: "row", alignItems: "center", gap: "14px" }}>
      <Box component="img" src={src} width="50px" height="50px" />
      <Typography fontSize={"18px"} color={theme.palette.text.secondary}>
        {text}
      </Typography>
    </Box>
  );
};
