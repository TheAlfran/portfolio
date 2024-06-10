import { Box, Grid, Stack, Typography } from "@mui/material";

import {
  AvatarComponent,
  ProjectDisplayComponent,
  SocialLinksComponent,
} from "./components";

export default function LandingPage() {
  return (
    <Grid container>
      <Grid item md={12}>
        <Stack direction="row" gap="30px">
          <Stack>
            <AvatarComponent />
          </Stack>
          <Stack>
            <Box display="flex">
              <Typography textAlign="start" fontWeight="bold" fontSize="40px">
                Hey, I'm Alfranciss. I'am a
              </Typography>
            </Box>
            <Box>
              <Typography textAlign="start" fontSize="40px">
                front-end developer.
              </Typography>
            </Box>
            <Box display="flex" gap="42px">
              <SocialLinksComponent logo="/twitter.png" title="twitter" />
              <SocialLinksComponent logo="/instagram.png" title="Instagram" />
              <SocialLinksComponent logo="/github.png" title="Github" />
              <SocialLinksComponent logo="/linkedin.png" title="LinkedIn" />
            </Box>
          </Stack>
        </Stack>
        <Stack gap="35px" mt="400px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box width="460px" height="1px" border={1} borderColor="black" />
            <Typography fontSize="18px">Some of my Works</Typography>
            <Box width="460px" height="1px" border={1} borderColor="black" />
          </Box>
          <Box display="flex" justifyContent="space-between">
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
