import Grid from '@mui/material/Grid2';

import { TopScene, BottomScene } from "./scenes";
import { SeparatorComponent } from "src/components";

export default function PortfolioPage() {
  return (
    <Grid container>
      <TopScene />
      <SeparatorComponent />
      <BottomScene />
    </Grid>
  );
}
