import { Box, Stack, Typography, useTheme } from "@mui/material";


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
          fontSize="16px"
          fontWeight="bold"
          textTransform="uppercase"
          color={theme.palette.text.primary}
        >
          Hello, My Name is Alfranciss
        </Typography>
        <Typography
          fontSize="94px"
          fontWeight="bold"
          fontFamily="'Noe Display', Georgia, Times, serif"
          color={theme.palette.text.secondary}
          lineHeight="90px"
          mb="40px"
          mt="20px"
        >
          Passionate in web development.
        </Typography>
        <Typography
          fontSize="26px"
          color={theme.palette.text.secondary}
          fontFamily="'Noe Display', Georgia, Times, serif"
        >
          I'm a junior frontend developer passionate about building
          user-friendly websites
          <br /> and sharing my knowledge on my blog.
        </Typography>
      </Box>
    </Stack>
  );
};
