import { Grid } from "@mui/material";

import { ContactSectionScene } from "./scenes";
import { GetInTouchScene } from "./scenes/get-in-touch-scene";

export const ContactScreen = () => {
  return (
    <Grid container>
      <ContactSectionScene />
      <GetInTouchScene />
    </Grid>
  );
};
