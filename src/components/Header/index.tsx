import {
  Box,
  Button,
  Container,
  Hidden,
  Slide,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';

import { MenuDropdown, PagesButtonComponent } from "./components";
import { SwitchTheme } from "../SwitchTheme";

export const Header = () => {
  const navigate = useNavigate();
  const [isSwitchThemeVisible, setSwitchThemeVisible] = useState(false);

  const handleNavigateClick = () => {
    navigate({ to: "/" });
  };

  const themeSwitchClicked = () => {
    setSwitchThemeVisible((prev) => !prev);
  };

  const theme = useTheme();

  return (
    <Box position="relative">
      <Slide
        direction="down"
        in={isSwitchThemeVisible}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 600, exit: 300 }}
      >
        <Box position="absolute" left={0} width="100%">
          <SwitchTheme />
        </Box>
      </Slide>
      <Grid
        container
        sx={{
          transition: "margin-top 0.6s ease",
          marginTop: isSwitchThemeVisible ? "180px" : "0px",
        }}
      >
        <Grid size={12}>
          <Slide
            direction="down"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Stack
              height={{ xs: "70px", md: "92px" }}
              display="flex"
              justifyContent="flex-end"
            >
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  onClick={handleNavigateClick}
                  sx={{
                    gap: "10px",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  disableRipple
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
                </Button>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={{ xs: "5px", sm: "15px", md: "20px" }}
                >
                  <Hidden mdDown>
                    <PagesButtonComponent page="about" />
                    <PagesButtonComponent page="portfolio" />
                    <PagesButtonComponent page="blog" />
                    <PagesButtonComponent page="contact" />
                  </Hidden>
                  <Hidden mdUp>
                    <MenuDropdown />
                  </Hidden>
                  <Button
                    onClick={themeSwitchClicked}
                    disableRipple
                    sx={{
                      "&:hover" : {backgroundColor: "transparent"}
                    }}
                  >
                    <BrushRoundedIcon
                      sx={{
                        fontSize: 25,
                        color: theme.palette.primary.main,
                      }}
                    />
                  </Button>
                </Box>
              </Container>
            </Stack>
          </Slide>
        </Grid>
      </Grid>
    </Box>
  );
};
