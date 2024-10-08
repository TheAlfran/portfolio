import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

export const Footer = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate({ to: route });
  };

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Stack
          bgcolor={theme.palette.default.main}
          height={70}
          display="flex"
          justifyContent="center"
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography fontSize="14px" color={theme.palette.text.secondary}>
                @2024 Alfranciss Dionsay
              </Typography>
            </Box>
            <Box display="flex" gap="30px">
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
                    fontSize="14px"
                    color={theme.palette.text.secondary}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Stack position="relative" bottom={85} alignItems="center">
              <Button
                sx={{
                  borderRadius: "50px",
                  backgroundColor: `${theme.palette.default.main}`,
                  height: "80px",
                  width: "80px",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: `${theme.palette.default.main}`,
                  },
                }}
                disableRipple
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Box
                  component="img"
                  src="/chevron-up.png"
                  width="30px"
                  height="30px"
                  position="relative"
                  bottom="10px"
                />
              </Button>
            </Stack>
          </Container>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Footer;
