import { Grid, Stack } from "@mui/material";

import { PortfolioCardComponent } from "../components";

export const BottomScene = () => {
  const renderCards = () => (
    <Stack
      width="100%"
      display="flex"
      direction="row"
      justifyContent="space-between"
      mt="50px"
    >
      <PortfolioCardComponent />
      <PortfolioCardComponent />
      <PortfolioCardComponent />
    </Stack>
  );

  return (
    <Grid item md={12}>
      {Array.from({ length: 3 }, () => renderCards())}
    </Grid>
  );
};
