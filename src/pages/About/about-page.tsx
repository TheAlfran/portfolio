import { Grid } from "@mui/material";
import { FirstScene, FourthScene, SecondScene, ThirdScene } from "./scenes";

export const AboutScreen = () => {
  return (
    <Grid container>
      <FirstScene />
      <SecondScene />
      <ThirdScene />
      <FourthScene />
    </Grid>
  );
};
