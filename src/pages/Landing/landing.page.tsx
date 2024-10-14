import Grid from '@mui/material/Grid2';

import { FeatureScene, HeroScene } from "./scenes";

export default function LandingPage() {
  return (
    <Grid container>
      <Grid size={12}>
        <HeroScene />
        <FeatureScene />
      </Grid>
    </Grid>
  );
}
