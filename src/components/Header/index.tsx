import {
  Box,
  Button,
  Container,
  Grid,
  Slide,
  Stack,
  useTheme,
} from "@mui/material";

import { SocialIconsComponent } from "./components";
import { useNavigate } from "@tanstack/react-router";

export const Header = () => {
  const theme = useTheme();
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
              <Button onClick={handleClick}>
                <Box
                  component="img"
                  src="/inverted-logo.png"
                  width="62px"
                  height="53px"
                />
              </Button>
              <Box display="flex" gap="30px" alignItems="center">
                <SocialIconsComponent link="https://x.com/TheAlfran" />
                <SocialIconsComponent
                  logo="/instagram.png"
                  link="https://www.instagram.com/thealfran/"
                />
                <SocialIconsComponent
                  logo="/github.png"
                  link="https://github.com/TheAlfran"
                />
                <SocialIconsComponent
                  logo="/linkedin.png"
                  link="https://www.linkedin.com/in/alfranciss-dionsay-150567257/"
                />
              </Box>
            </Container>
          </Stack>
        </Slide>
      </Grid>
    </Grid>
  );
};
