import { Box } from "@mui/material";
import React from "react";

interface SocialIconsComponentProps {
  logo?: string;
}
export const SocialIconsComponent: React.FC<SocialIconsComponentProps> = ({
  logo = "/twitter.png",
}) => {
  return (
    <React.Fragment>
      <Box component="img" src={logo} width="35px" height="35px" />
    </React.Fragment>
  );
};
