import { Grid } from "@mui/material";
import {
  FifthScene,
  FirstScene,
  FourthScene,
  SecondScene,
  ThirdScene,
} from "./scenes";

export const AboutScreen = () => {
  return (
    <Grid container>
      <FirstScene />
      <SecondScene />
      <ThirdScene />
      <FourthScene />
      <FifthScene />
    </Grid>
  );
};
