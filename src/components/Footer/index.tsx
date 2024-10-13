import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import { SocialIconsComponent } from "./components";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Stack
          bgcolor={theme.palette.default.main}
          height={{ xs: 50, sm: 60, md: 70 }}
          display="flex"
          justifyContent="center"
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                fontSize={{ xs: "10px", sm: "12px", md: "14px" }}
                color={theme.palette.text.secondary}
              >
                @2024 Alfranciss Dionsay
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                display="flex"
                gap={{ xs: "20px", sm: "25px", md: "30px" }}
                alignItems="center"
              >
                <SocialIconsComponent link="https://x.com/TheAlfran" />
                <SocialIconsComponent
                  logo="/instagram.webp"
                  link="https://www.instagram.com/thealfran/"
                />
                <SocialIconsComponent
                  logo="/github.webp"
                  link="https://github.com/TheAlfran"
                />
                <SocialIconsComponent
                  logo="/linkedin.webp"
                  link="https://www.linkedin.com/in/alfranciss-dionsay-150567257/"
                />
              </Box>
            </Box>
          </Container>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Stack
              position="relative"
              bottom={{ xs: 65, sm: 75, md: 85 }}
              alignItems="center"
            >
              <Button
                sx={{
                  backgroundColor: `${theme.palette.default.main}`,
                  borderRadius: "50%",
                  height: { xs: "50px", sm: "60px", md: "80px" },
                  width: { xs: "50px", sm: "60px", md: "80px" },
                  minWidth: "0px",
                  padding: "0px",
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
                  width={{ xs: "20px", sm: "25px", md: "30px" }}
                  height={{ xs: "20px", sm: "25px", md: "30px" }}
                  position="relative"
                  bottom={{ xs: "5px", sm: "7px", md: "10px" }}
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
