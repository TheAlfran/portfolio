import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

interface SocialLinksComponentProps {
  src?: string;
  text?: string;
  link?: string;
}

export const SocialLinksComponents: React.FC<SocialLinksComponentProps> = ({
  src = "/twitter.png",
  text = "Twitter / X",
  link = "https://twitter.com",
}) => {
  const theme = useTheme();

  return (
    <Box
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: "flex",
        direction: "row",
        alignItems: "center",
        gap: "14px",
        textDecoration: "none",
      }}
    >
      <Box component="img" src={src} width="50px" height="50px" />
      <Typography fontSize={"18px"} color={theme.palette.text.secondary}>
        {text}
      </Typography>
    </Box>
  );
};
