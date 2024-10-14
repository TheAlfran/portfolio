import React from "react";
import { Stack } from "@mui/material";
import Grid from '@mui/material/Grid2';

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
    <Grid size={12}>
      {Array.from({ length: 3 }, (_, index) => (
        <React.Fragment key={index}>{renderCards()}</React.Fragment>
      ))}
    </Grid>
  );
};
