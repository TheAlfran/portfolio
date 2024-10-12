import { Grid } from "@mui/material";

import { FeatureScene, HeroScene } from "./scenes";

export default function LandingPage() {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <HeroScene />
        <FeatureScene />
      </Grid>
    </Grid>
  );
}
