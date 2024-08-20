import { Stack, useTheme } from "@mui/material";

import { InfoCardComponent } from "../components";

export const OverViewScene = () => {
  const theme = useTheme();
  return (
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
  );
};
