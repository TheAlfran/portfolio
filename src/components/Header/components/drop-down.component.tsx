import React from "react";
import {
  IconButton,
  Box,
  Backdrop,
  Slide,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useMenuDropdown } from "../hooks";
import { menuItems, socialLinks } from "../data";

export const MenuDropdown: React.FC = () => {
  const {
    open,
    handleToggle,
    handleClose,
    handleNavigate,
    menuItemStyle,
    linkStyle,
  } = useMenuDropdown();

  return (
    <>
      <IconButton onClick={handleToggle} aria-label="Open menu">
        <MenuIcon
          sx={{ fontSize: 30, cursor: "pointer", color: "primary.main" }}
        />
      </IconButton>
      <Backdrop
        open={open}
        onClick={handleClose}
        sx={{ zIndex: 1200, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      />
      <Slide
        direction="right"
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
            width: "65%",
            height: "100%",
            backgroundColor: "default.main",
            zIndex: 1300,
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            gap: "5px",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <Box
            sx={{
              gap: "10px",
              display: "flex",
              mb: "30px",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src="/profile.webp"
              width="40px"
              height="40px"
              borderRadius="50px"
            />
            <Typography textTransform="initial">Alfranciss</Typography>
            <Box
              component="img"
              src="/verified.webp"
              width="20px"
              height="20px"
            />
          </Box>
          {menuItems.map(({ icon, label, path }) => (
            <MenuItem
              key={path}
              onClick={() => handleNavigate(path)}
              sx={menuItemStyle}
            >
              {icon}
              <Typography sx={{ ml: 1 }}>{label}</Typography>
            </MenuItem>
          ))}
          <Box width="100%" height="1px" bgcolor="text.secondary" mt="20px" />
          <Box mt="20px">
            <Typography fontSize="14px" color="text.secondary">
              © Alfranciss 2024
            </Typography>
            <Box display="flex" gap="10px" mt="20px">
              {socialLinks.map(({ label, href }) => (
                <Box component="a" href={href} sx={linkStyle} key={label}>
                  {label}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Slide>
    </>
  );
};
