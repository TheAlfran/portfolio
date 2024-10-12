import {
  Box,
  Button,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
        mt="40px"
      >
        <ProjectDisplayComponent
          src="/feature-1.png"
          title="My Website"
          subtitle="A personal portfolio built with React  and TypeScript, showcasing my projects and skills."
        />
        <ProjectDisplayComponent
          src="/feature-2.png"
          title="Barbeque App"
          subtitle="A family business app developed with React Native and Expo for seamless BBQ ordering."
        />
        <ProjectDisplayComponent
          src="/feature-3.png"
          title="Game Hive"
          subtitle="A hackathon project created using React and Vite to engage the gaming community."
        />
        <ProjectDisplayComponent
          src="/feature-4.png"
          title="Fruit Panda"
          subtitle="A mobile app from my learning days, built during my mobile development journey."
        />
      </Box>
      <Stack display="flex" alignItems="flex-end" width="100%">
        <Tooltip title="In Progress" placement="top">
          <Button
            sx={{
              width: "100px",
              "&:hover": { backgroundColor: "transparent" },
            }}
            disableRipple
          >
            <Typography
              textTransform="capitalize"
              sx={{
                fontFamily: "'Noe Display', Georgia, 'Times New Roman', serif",
              }}
            >
              See All
            </Typography>
            <ArrowForwardIcon sx={{ ml: 1 }} />
          </Button>
        </Tooltip>
      </Stack>
    </Stack>
  );
};
