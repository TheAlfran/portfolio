import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";

import { LatestBlogComoponent } from "../components";

export const LatestBlogScene = () => {
  const theme = useTheme();
  return (
    <Grid item xs={12} mb="50px">
      <Stack>
        <Typography
          fontSize="42px"
          fontWeight="bold"
          color={theme.palette.text.secondary}
          sx={{ textDecoration: "underline" }}
          mb="20px"
        >
          latest.
        </Typography>
        <Stack display="flex" direction="row" gap="20px">
          <Box
            width="645px"
            height="361px"
            borderRadius="5px"
            bgcolor={theme.palette.default.main}
          />
          <LatestBlogComoponent />
        </Stack>
      </Stack>
    </Grid>
  );
};
