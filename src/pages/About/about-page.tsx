import { Grid } from "@mui/material";
import { FirstScene, SecondScene, ThirdScene } from "./scenes";

export const AboutScreen = () => {
  return (
    <Grid container>
      <FirstScene />
      <SecondScene />
      <ThirdScene />
    </Grid>
  );
};
