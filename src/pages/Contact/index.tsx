import { Grid } from "@mui/material";

import { ContactSectionScene, GetInTouchScene } from "./scenes";

export const ContactScreen = () => {
  return (
    <Grid container>
      <ContactSectionScene />
      <GetInTouchScene />
    </Grid>
  );
};
