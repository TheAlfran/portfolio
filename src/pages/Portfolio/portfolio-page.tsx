import { Grid } from "@mui/material";

import { TopScene } from "./scenes/top-scene";
import { SeparatorComponent } from "src/components/Separator/separator-component";
import { BottomScene } from "./scenes/bottom-scene";

export const PortfolioPage = () => {
  return (
    <Grid container>
      <TopScene />
      <SeparatorComponent />
      <BottomScene />
    </Grid>
  );
};
