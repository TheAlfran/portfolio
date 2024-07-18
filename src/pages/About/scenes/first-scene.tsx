import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { PictureComponent } from "../components";

export const FirstScene = () => {
  const theme = useTheme();
  return (
    <>
      <Grid item md={8}>
        <Typography>About Screen</Typography>
      </Grid>
      <Grid item md={4}>
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
          Since my college days in 2018, I've loved exploring new technologies.
          As a junior front-end developer, I specialize in creating intuitive
          and visually appealing user interfaces. When I'm not coding, you can
          find me enjoying online games or drawing.
        </Typography>
      </Grid>
      <Box
        sx={{
          width: "100%",
          height: "1px",
          mt: "10px",
          backgroundColor: theme.palette.default.main,
        }}
      />
      <Stack display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" width="100%" mt="20px">
        <PictureComponent />
        <PictureComponent />
        <PictureComponent />
        <PictureComponent />
        <PictureComponent />
        <PictureComponent />
      </Stack>
    </>
  );
};
