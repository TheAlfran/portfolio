import { Grid, Typography, useTheme, Stack, Box } from "@mui/material";

import { SocialLinksComponents } from "../components";

export const ContactSectionScene = () => {
  const theme = useTheme();
  return (
    <Grid item md={12}>
      <Stack display="flex" direction="row" justifyContent="space-between">
        <Stack>
          <Typography
            fontSize="64px"
            fontWeight="bold"
            sx={{ textDecoration: "underline" }}
            color={theme.palette.text.secondary}
          >
            contact.
          </Typography>
          <Typography fontSize="24px" color={theme.palette.text.primary}>
            get in touch with me via
          </Typography>
          <Typography fontSize="24px" color={theme.palette.text.primary}>
            social medias
          </Typography>
          <Stack gap="34px" mt="28px">
            <Stack display="flex" direction="row" gap="115px">
              <SocialLinksComponents />
              <SocialLinksComponents src="/instagram.png" text="Instagram" />
            </Stack>
            <Stack display="flex" direction="row" gap="115px">
              <SocialLinksComponents src="/facebook.png" text="Facebook" />
              <SocialLinksComponents src="/linkedin.png" text="Linkedin" />
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Box
            component="img"
            src="/contact-image.jpg"
            width="491px"
            height="475px"
          />
        </Stack>
      </Stack>
    </Grid>
  );
};
