import { Box, Grid, Hidden, Stack, Typography, useTheme } from "@mui/material";

import {
  InfoCardComponent,
  IntroductionCardComponent,
  ProjectDisplayComponent,
  TimeCardComponent,
} from "./components";

export default function LandingPage() {
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
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
        <Stack
          mt="51px"
          display="flex"
          justifyContent="space-between"
          flexDirection={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          alignItems={{
            xs: "center",
            sm: "center",
            md: "normal",
            lg: "normal",
          }}
          gap={{ xs: "20px", sm: "20px", md: "20px", lg: "0px" }}
        >
          <InfoCardComponent />
          <InfoCardComponent
            title="Portfolio"
            subtitle="Explore my works"
            logo="/portfolio.png"
            backgroundColor={theme.palette.secondary.main}
          />
          <InfoCardComponent
            title="Experience"
            subtitle="My journey so far"
            logo="/experience.png"
            backgroundColor={theme.palette.tertiary.main}
          />
          <InfoCardComponent
            title="Contact"
            subtitle="Let's Connect"
            logo="/contact-us.png"
            backgroundColor={theme.palette.text.primary}
            route="/contact"
          />
        </Stack>
        <Stack gap="35px" mt="120px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
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
            <ProjectDisplayComponent
              title="Lorem Ipsum"
              subtitle="lorem ipsum"
            />
            <ProjectDisplayComponent
              title="Lorem Ipsum"
              subtitle="lorem ipsum"
            />
            <ProjectDisplayComponent
              title="Lorem Ipsum"
              subtitle="lorem ipsum"
            />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
