import { Box, Container, Grid, Slide, Stack, useTheme } from "@mui/material";

import { SocialIconsComponent } from "./components";

export const Header = () => {
  const theme = useTheme();
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
            bgcolor={theme.palette.primary.main}
            height={{ xs: "70px", md: "92px" }}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Container
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                component="img"
                src="/inverted-logo.png"
                width="62px"
                height="53px"
              />
              <Box display="flex" gap="30px" alignItems="center">
                <SocialIconsComponent />
                <SocialIconsComponent logo="/instagram.png" />
                <SocialIconsComponent logo="/github.png" />
                <SocialIconsComponent logo="/linkedin.png" />
              </Box>
            </Container>
          </Stack>
        </Slide>
      </Grid>
    </Grid>
  );
}
