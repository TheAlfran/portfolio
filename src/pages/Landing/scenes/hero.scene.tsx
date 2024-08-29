import { Hidden, Stack } from "@mui/material";

import { IntroductionCardComponent, TimeCardComponent } from "../components";

export const HeroScene = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems={{ xs: "center", md: "start" }}
      justifyContent="space-between"
    >
      <IntroductionCardComponent />
      <Hidden xsDown mdDown>
        <TimeCardComponent />
      </Hidden>
    </Stack>
  );
};
