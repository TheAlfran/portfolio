import { Grid } from "@mui/material";

import { FeatureScene, HeroScene, OverViewScene } from "./scenes";

export default function LandingPage() {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <HeroScene />
        <OverViewScene />
        <FeatureScene />
      </Grid>
    </Grid>
  );
}
