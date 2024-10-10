import {
  Box,
  Button,
  Container,
  Grid,
  Slide,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

export const Header = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ to: "/" });
  };

  const handleNavigation = (route: string) => {
    navigate({ to: route });
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
                gap={{ xs: "10px", sm: "15px", md: "30px" }}
                alignItems="center"
              >
                {[
                  { label: "about", route: "/about" },
                  { label: "portfolio", route: "/portfolio" },
                  { label: "blog", route: "/blog" },
                  { label: "contact", route: "/contact" },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                    onClick={() => handleNavigation(item.route)}
                  >
                    <Typography
                      fontSize={{ xs: "10px", sm: "12px", md: "14px" }}
                      color={theme.palette.text.secondary}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
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
