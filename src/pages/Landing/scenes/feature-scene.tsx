import { Box, Stack, Typography } from "@mui/material";

import { ProjectDisplayComponent } from "../components";

export const FeatureScene = () => {
  return (
    <Stack gap="35px" mt="120px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box
          width={{ xs: "0px", md: "0px", lg: "460px" }}
          height="1px"
          borderBottom={{ xs: 0, md: 0, lg: "1px solid black" }}
          borderColor="#686D76"
        />
        <Typography fontSize={"18px"}>Some of my Works</Typography>
        <Box
          width={{ xs: "0px", md: "0px", lg: "460px" }}
          height="1px"
          borderBottom={{ xs: 0, md: 0, lg: "1px solid black" }}
          borderColor="#686D76"
        />
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={{ xs: "20px", md: "40px" }}
        alignItems={{ xs: "center", md: "start" }}
      >
        <ProjectDisplayComponent title="Lorem Ipsum" subtitle="lorem ipsum" />
        <ProjectDisplayComponent title="Lorem Ipsum" subtitle="lorem ipsum" />
        <ProjectDisplayComponent title="Lorem Ipsum" subtitle="lorem ipsum" />
      </Box>
    </Stack>
  );
};
