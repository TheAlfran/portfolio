import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

import { MenuDropdown, PagesButtonComponent } from "./components";

export const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ to: "/" });
  };

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
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
            justifyContent="center"
          >
            <Container
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={handleClick}
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
                  src="/profile.jpeg"
                  width="40px"
                  height="40px"
                  borderRadius="50px"
                />
                <Typography textTransform="initial">Alfranciss</Typography>
                <Box
                  component="img"
                  src="/verified.png"
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
                  disableRipple
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                  }}
                >
                  <Box
                    component="img"
                    src="/paintbrush.svg"
                    width="20px"
                    height="20px"
                  />
                </Button>
              </Box>
            </Container>
          </Stack>
        </Slide>
      </Grid>
    </Grid>
  );
};
