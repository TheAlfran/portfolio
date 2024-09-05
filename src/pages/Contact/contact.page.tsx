import { Grid } from "@mui/material";

import { ContactSectionScene, GetInTouchScene } from "./scenes";
import { SeparatorComponent } from "src/components/Separator";

export default function ContactScreen() {
  return (
    <Grid container>
      <ContactSectionScene />
      <SeparatorComponent />
      <GetInTouchScene />
    </Grid>
  );
}
