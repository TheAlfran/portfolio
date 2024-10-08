import { Box, Stack, Typography, useTheme } from "@mui/material";

import { ProjectDisplayComponent } from "../components";

export const FeatureScene = () => {
  const theme = useTheme();
  return (
    <Stack gap="35px" mt="120px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box
          width={{ xs: "0px", md: "0px", lg: "460px" }}
          height="1px"
          bgcolor={theme.palette.default.main}
        />
        <Typography fontSize={"18px"} color={theme.palette.text.secondary}>
          Some of my Works
        </Typography>
        <Box
          width={{ xs: "0px", md: "0px", lg: "460px" }}
          height="1px"
          bgcolor={theme.palette.default.main}
        />
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={{ xs: "20px", md: "40px" }}
        alignItems={{ xs: "center", md: "start" }}
      >
        <ProjectDisplayComponent
          title="Game Hive"
          subtitle="a hackathon project"
          img="/gamehive.png"
        />
        <ProjectDisplayComponent
          title="My Website"
          subtitle="my very own website"
          img="/website.png"
        />
        <ProjectDisplayComponent
          title="Fruit Panda"
          subtitle="a online store for fruits"
          img="/fruitpanda.png"
          objectFit="contain"
        />
      </Box>
    </Stack>
  );
};
