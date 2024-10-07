import Lottie from "lottie-react";
import { Box } from "@mui/material";

import loadingAnimation from "../../assets/loading.json";

export const LoadingComponent = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Lottie
        animationData={loadingAnimation}
        style={{ width: 300, height: 300 }}
      />
    </Box>
  );
};
