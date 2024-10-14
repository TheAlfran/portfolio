import { Box, Stack, Typography, useTheme } from "@mui/material";

import { TextButtonComponent } from "../components";

export const HeroScene = () => {
  const theme = useTheme();

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems={{ xs: "center", md: "start" }}
      justifyContent="space-between"
      mt="80px"
      mb="150px"
    >
      <Box>
        <Typography
          fontSize={{ xs: "13px", sm: "15px", md: "16px" }}
          fontWeight="bold"
          textTransform="uppercase"
          color={theme.palette.text.primary}
        >
          Hello, My Name is Alfranciss
        </Typography>
        <Typography
          fontSize={{ xs: "35px", sm: "55px", md: "70px", lg: "94px" }}
          fontWeight="bold"
          fontFamily="'Noe Display', Georgia, Times, serif"
          color={theme.palette.text.secondary}
          lineHeight={{ xs: "50px", sm: "75px", md: "90px" }}
          mb={{ xs: "15px", sm: "30px", md: "40px" }}
          mt="20px"
        >
          Passionate in Web Development.
        </Typography>
        <Typography
          fontSize={{ xs: "20px", sm: "24px", lg: "26px" }}
          color={theme.palette.text.secondary}
          fontFamily="'Noe Display', Georgia, Times, serif"
        >
          I'm a junior frontend developer passionate about building
          user-friendly websites and sharing my knowledge on my{" "}
          <TextButtonComponent text="blog" /> and{" "}
          <TextButtonComponent text="portfolio" />.
        </Typography>
      </Box>
    </Stack>
  );
};
