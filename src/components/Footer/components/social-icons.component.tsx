import { Box } from "@mui/material";
import React from "react";

interface SocialIconsComponentProps {
  logo?: string;
  link?: string;
}

export const SocialIconsComponent: React.FC<SocialIconsComponentProps> = ({
  logo = "/twitter.png",
  link = "https://google.com",
}) => {
  return (
    <React.Fragment>
      <Box component="a" href={link} target="_blank" rel="noopener noreferrer">
        <Box
          component="img"
          src={logo}
          width={{ xs: "15px", md: "25px" }}
          height={{ xs: "15px", md: "25px" }}
        />
      </Box>
    </React.Fragment>
  );
};
