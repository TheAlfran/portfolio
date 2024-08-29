import { Grid, Stack } from "@mui/material";

import { BlogsComponent } from "../components";

export const BlogsScene = () => {
  return (
    <Grid item xs={12}>
      <Stack gap="50px" mt="50px">
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <BlogsComponent />
          <BlogsComponent />
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <BlogsComponent />
          <BlogsComponent />
        </Stack>
      </Stack>
    </Grid>
  );
};
