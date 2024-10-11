import { Button, Typography } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import React from "react";

interface PageComponentProps {
  page?: string;
}

export const PagesButtonComponent: React.FC<PageComponentProps> = ({
  page = "about",
}) => {
  const navigate = useNavigate();

  const handleNavigation = (page: string) => {
    navigate({ to: `/${page}` });
  };

  return (
    <React.Fragment>
      <Button
        sx={{ "&:hover": { background: "transparent" } }}
        disableRipple
        onClick={() => handleNavigation(page)}
      >
        <Typography textTransform={"lowercase"}>{page}</Typography>
      </Button>
    </React.Fragment>
  );
};
