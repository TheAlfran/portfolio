import Grid from '@mui/material/Grid2';

import { ContactSectionScene, GetInTouchScene } from "./scenes";
import { SeparatorComponent } from "src/components";

export default function ContactScreen() {
  return (
    <Grid container>
      <ContactSectionScene />
      <SeparatorComponent />
      <GetInTouchScene />
    </Grid>
  );
}
