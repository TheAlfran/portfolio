import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";

export const TopScene = () => {
  const theme = useTheme();
  return (
    <Grid item md={12} mb="50px">
      <Stack display="flex" direction="row" justifyContent={"space-between"} >
        <Stack>
          <Typography
            fontSize="64px"
            fontWeight="bold"
            color={theme.palette.text.secondary}
            sx={{ textDecoration: "underline" }}
          >
            portfolio
          </Typography>
          <Typography
            fontSize="24px"
            color={theme.palette.text.primary}
            mt="10px"
          >
            Explore some of my recent <br /> frontend development projects.
          </Typography>
          <Typography
            fontSize="14px"
            color={theme.palette.text.secondary}
            mt="20px"
          >
            I've worked with a tech company on a variety of projects,
            <br /> including responsive websites, web applications, and <br />
            interactive user interfaces.
          </Typography>
        </Stack>
        <Stack>
          <Box
            component="img"
            src="/portfolio-image.jpg"
            width="400px"
            height="350px"
            ml="200px"
            bgcolor="blue"
          />
        </Stack>
      </Stack>
    </Grid>
  );
};
