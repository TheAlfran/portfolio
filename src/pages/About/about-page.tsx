import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";

export const AboutScreen = () => {
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item md={8}>
        <Typography>About Screen</Typography>
      </Grid>
      <Grid item md={4}>
        <Stack>
          <Typography
            textAlign="end"
            fontSize="64px"
            fontWeight="bold"
            color={theme.palette.text.secondary}
            sx={{ textDecoration: "underline" }}
          >
            about.
          </Typography>
          <Typography
            textAlign="end"
            fontSize="23px"
            color={theme.palette.text.primary}
          >
            I’m a junior front-end developer in the Philippines
          </Typography>
          <Typography fontSize="14px" mt="10px">
            Since my college days in 2018, I've loved exploring new
            technologies. As a junior front-end developer, I specialize in
            creating intuitive and visually appealing user interfaces. When I'm
            not coding, you can find me enjoying online games or drawing.
          </Typography>
        </Stack>
      </Grid>
      <Box
        sx={{
          width: "100%",
          height: "1px",
          mt: "10px",
          backgroundColor: theme.palette.default.main,
        }}
      />
    </Grid>
  );
};
