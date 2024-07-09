import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

export const Footer = () => {
  const theme = useTheme();
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          <Container>
            <Typography fontSize="18px" color={theme.palette.text.secondary}>
              @2024 Alfranciss Dionsay
            </Typography>
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
                onClick={handleScrollUp}
              >
                <Box
                  component={"img"}
                  src="/chevron-up.png"
                  width="30px"
                  height="30px"
                  position="relative"
                  bottom={"10px"}
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
