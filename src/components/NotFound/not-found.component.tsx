import Lottie from "lottie-react";
import { Box } from "@mui/material";

import NotFound from "../../../public/404.json";

export const NotFoundComponent = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Lottie
        animationData={NotFound}
        style={{ width: 300, height: 300 }}
      />
    </Box>
  );
};


