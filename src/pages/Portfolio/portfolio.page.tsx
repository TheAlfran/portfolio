import { Grid } from "@mui/material";

import { TopScene, BottomScene } from "./scenes";
import { SeparatorComponent } from "src/components/Separator";

export const PortfolioPage = () => {
  return (
    <Grid container>
      <TopScene />
      <SeparatorComponent />
      <BottomScene />
    </Grid>
  );
};
