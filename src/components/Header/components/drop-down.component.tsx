import React from "react";
import { Menu, MenuItem, IconButton, Box } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

export const MenuDropdown: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    navigate({ to: `/${path}` });
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Box
          component="img"
          src="/menu.svg"
          width="30px"
          height="30px"
          sx={{
            cursor: "pointer",
            borderRadius: "50%",
          }}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          elevation: 3,
          sx: {
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "5px",
            minWidth: "150px",
            border: "1px solid lightgrey",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem
          onClick={() => handleNavigate("about")}
          sx={{
            fontFamily: "Arial, sans-serif",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: "lightblue",
            },
          }}
        >
          About
        </MenuItem>
        <MenuItem
          onClick={() => handleNavigate("portfolio")}
          sx={{
            fontFamily: "Arial, sans-serif",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: "lightblue",
            },
          }}
        >
          Portfolio
        </MenuItem>
        <MenuItem
          onClick={() => handleNavigate("blog")}
          sx={{
            fontFamily: "Arial, sans-serif",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: "lightblue",
            },
          }}
        >
          Blog
        </MenuItem>
        <MenuItem
          onClick={() => handleNavigate("contact")}
          sx={{
            fontFamily: "Arial, sans-serif",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: "lightblue",
            },
          }}
        >
          Contact
        </MenuItem>
      </Menu>
    </>
  );
};
