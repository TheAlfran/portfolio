import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";

export const TimeCardComponent = () => {
  const theme = useTheme();
  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        width: "30%",
        height: { xs: "100px", md: "130px", lg: "150px" },
        justifyContent: "space-around",
        alignItems: "center",
        bgcolor: theme.palette.default.main
      }}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          fontSize="32px"
          fontWeight="bold"
          lineHeight={1}
          color={theme.palette.text.primary}
        >
          12:41 AM
        </Typography>
        <Typography fontSize="32px" fontWeight="bold" lineHeight={1}>
          June 19, 2024
        </Typography>
      </Stack>
      <Stack height="100%">
        <Box width="7px" height="90%" bgcolor={theme.palette.primary.main} />
      </Stack>
    </Paper>
  );
};
