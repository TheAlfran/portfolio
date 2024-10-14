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
    <Stack gap="35px" mt={{ xs: "60px", md: "100px", lg: "120px" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box
          width={{ xs: "27%", sm: "35%", md: "40%", lg: "40%" }}
          height="1px"
          bgcolor={theme.palette.default.main}
        />
        <Typography
          fontSize={{ xs: "11px", sm: "13px", md: "15px", lg: "18px" }}
          color={theme.palette.text.secondary}
        >
          Some of my Works
        </Typography>
        <Box
          width={{ xs: "27%", sm: "35%", md: "40%", lg: "40%" }}
          height="1px"
          bgcolor={theme.palette.default.main}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent={{ xs: "center", md: "space-between" }}
        gap={{ xs: "20px", md: "40px" }}
        alignItems={{ xs: "center", md: "start" }}
        flexWrap="wrap"
      >
        <Box
          display="grid"
          gap={{ xs: "20px", sm: "20px", md: "40px" }}
          gridTemplateColumns={{
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          justifyContent="space-between"
          width="100%"
        >
          <ProjectDisplayComponent
            src="/featured-1.webp"
            title="My Website"
            subtitle="A personal portfolio built with React and TypeScript, showcasing my projects and skills."
          />
          <ProjectDisplayComponent
            src="/featured-2.webp"
            title="Barbeque App"
            subtitle="A family business app developed with React Native and Expo for seamless BBQ ordering."
          />
          <ProjectDisplayComponent
            src="/featured-3.webp"
            title="Game Hive"
            subtitle="A hackathon project created using React and Vite to engage the gaming community."
          />
          <ProjectDisplayComponent
            src="/featured-4.webp"
            title="Fruit Panda"
            subtitle="A mobile app from my learning days, built during my mobile development journey."
          />
        </Box>
      </Box>
      <Stack display="flex" alignItems="flex-end" width="100%">
        <Tooltip title="In Progress" placement="top">
          <Button
            sx={{
              width: "100px",
              "&:hover": {
                backgroundColor: "transparent",
                cursor: "not-allowed",
              },
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
