import React, { useState } from "react";
import {
  Box,
  Grid,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { PictureComponent } from "../components";

export const FirstScene = () => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item md={8}>
          {isLoading && (
            <Skeleton variant="rectangular" width="342px" height="342px" />
          )}
          <Box
            component="img"
            src="/about-image.jpg"
            width="342px"
            height="342px"
            ml="150px"
            onLoad={handleImageLoad}
            onError={handleImageLoad}
            style={{ display: isLoading ? "none" : "block" }}
          />
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
            I’m a junior front-end developer in the Philippines.
          </Typography>
          <Typography fontSize="14px" mt="10px">
            Since my college days in 2018, I've loved exploring new
            technologies. As a junior front-end developer, I specialize in
            creating intuitive and visually appealing user interfaces. When I'm
            not coding, you can find me enjoying online games or drawing.
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          width: "100%",
          height: "1px",
          mt: "10px",
          backgroundColor: theme.palette.background.default,
        }}
      />

      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        mt="20px"
        spacing={2}
      >
        <PictureComponent />
        <PictureComponent />
        <PictureComponent />
        <PictureComponent />
        <PictureComponent />
        <PictureComponent />
      </Stack>
    </React.Fragment>
  );
};
