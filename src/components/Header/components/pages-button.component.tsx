import React from "react";
import { Button, Typography, useTheme } from "@mui/material";
import { useNavigate, useLocation } from "@tanstack/react-router";

interface PageComponentProps {
  page?: string;
}

export const PagesButtonComponent: React.FC<PageComponentProps> = ({
  page = "about",
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (page: string) => {
    navigate({ to: `/${page}` });
  };

  const isActive = location.pathname === `/${page}`;
  const theme = useTheme();

  return (
    <React.Fragment>
      <Button
        sx={{
          padding: "0px",
          "&:hover": { background: "transparent" },
          "&:hover .line::before": {
            transform: "scaleX(1)",
            opacity: 0.5,
          },
        }}
        disableRipple
        onClick={() => handleNavigation(page)}
      >
        <Typography
          textTransform="lowercase"
          sx={{
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              bottom: "-5px",
              left: 0,
              width: "100%",
              height: "5px",
              backgroundColor: theme.palette.text.primary,
              transform: isActive ? "scaleX(1)" : "scaleX(0)",
              opacity: isActive ? 1 : 0,
              transformOrigin: "bottom left",
              transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
            },
          }}
          className="line"
        >
          {page}
        </Typography>
      </Button>
    </React.Fragment>
  );
};
