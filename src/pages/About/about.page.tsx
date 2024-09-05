import { Grid } from "@mui/material";

import {
  FifthScene,
  FirstScene,
  FourthScene,
  SecondScene,
  ThirdScene,
} from "./scenes";
import { SeparatorComponent } from "src/components/Separator";

export default function AboutScreen() {
  return (
    <Grid container>
      <FirstScene />
      <SeparatorComponent />
      <SecondScene />
      <SeparatorComponent />
      <ThirdScene />
      <SeparatorComponent />
      <FourthScene />
      <SeparatorComponent />
      <FifthScene />
    </Grid>
  );
}
