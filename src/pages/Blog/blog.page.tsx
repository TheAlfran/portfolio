import { Grid } from "@mui/material";

import { LatestBlogScene, BlogsScene } from "./scenes";
import { SeparatorComponent } from "src/components/Separator";


export const BlogPage = () => {
  return (
    <Grid container>
      <LatestBlogScene />
      <SeparatorComponent />
      <BlogsScene />
    </Grid>
  );
};
