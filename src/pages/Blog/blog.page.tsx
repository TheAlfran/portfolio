import { Grid } from "@mui/material";

import { LatestBlogScene, BlogsScene } from "./scenes";
import { SeparatorComponent } from "src/components/Separator/separator-component";

export const BlogPage = () => {
  return (
    <Grid container>
      <LatestBlogScene />
      <SeparatorComponent />
      <BlogsScene />
    </Grid>
  );
};
