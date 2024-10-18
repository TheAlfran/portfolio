import React from "react";
import {
  IconButton,
  Box,
  Backdrop,
  Slide,
  MenuItem,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon from MUI
import { useNavigate } from "@tanstack/react-router";

export const MenuDropdown: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen(!open);
  };

  const theme = useTheme();

  const handleClose = () => {
    setOpen(false);
  };

  const handleNavigate = (path: string) => {
    navigate({ to: `/${path}` });
    handleClose();
  };

  const menuItems = [
    { label: "About", path: "about" },
    { label: "Portfolio", path: "portfolio" },
    { label: "Blog", path: "blog" },
    { label: "Contact", path: "contact" },
  ];

  return (
    <React.Fragment>
      <IconButton onClick={handleToggle} aria-label="Open menu">
        <MenuIcon sx={{ fontSize: 30, cursor: "pointer" , color: theme.palette.primary.main}} />
      </IconButton>
      <Backdrop
        open={open}
        onClick={handleClose}
        sx={{ zIndex: 1200, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      />
      <Slide
        direction="down"
        in={open}
        mountOnEnter
        unmountOnExit
        timeout={400}
      >
        <Box
          sx={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100vw",
            height: "auto",
            backgroundColor: theme.palette.default.main,
            zIndex: 1300,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {menuItems.map(({ label, path }) => (
            <MenuItem
              key={path}
              onClick={() => handleNavigate(path)}
              sx={{
                fontFamily: "Arial, sans-serif",
                color: theme.palette.text.secondary,
                padding: "20px",
                fontSize: "20px",
                width: "100%",
                display: "flex",
                "&:hover": {
                  backgroundColor: "lightblue",
                },
              }}
            >
              {label}
            </MenuItem>
          ))}
        </Box>
      </Slide>
    </React.Fragment>
  );
};
