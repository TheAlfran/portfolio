import { Typography, Box } from "@mui/material";
import React from "react";

interface SocialLinksComponentProps {
  logo?: string;
  title?: string;
}

export const SocialLinksComponent: React.FC<SocialLinksComponentProps> = ({
  logo = "/twitter.png",
  title = "twitter",
}) => {
  return (
    <React.Fragment>
      <Box display="flex" alignItems="center" gap="11px">
        <img src={logo} width="24px" height="24px" />
        <Typography fontSize="24px">{title}</Typography>
      </Box>
    </React.Fragment>
  );
};
