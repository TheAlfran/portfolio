import { Grid } from "@mui/material";
import { FirstScene } from "./scenes";
import { SecondScene } from "./scenes/second-scene";

export const AboutScreen = () => {
  return (
    <Grid container>
      <FirstScene />
      <SecondScene />
    </Grid>
  );
};
