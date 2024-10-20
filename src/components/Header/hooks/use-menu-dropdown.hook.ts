import React from "react";
import { useNavigate } from "@tanstack/react-router";
import { useTheme } from "@mui/material";

export const useMenuDropdown = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleToggle = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const handleNavigate = (path: string) => {
    navigate({ to: `/${path}` });
    handleClose();
  };

  const menuItemStyle = {
    fontFamily: "Arial, sans-serif",
    color: theme.palette.text.secondary,
    padding: "5px",
    fontSize: "18px",
    gap: "10px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  };

  const linkStyle = {
    textDecoration: "none",
    "&:hover": { textDecoration: "underline" },
    fontSize: "14px",
  };

  return {
    open,
    handleToggle,
    handleClose,
    handleNavigate,
    menuItemStyle,
    linkStyle,
  };
};
