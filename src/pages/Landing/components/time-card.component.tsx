import { Box, Paper, Stack, Typography } from "@mui/material";

export const TimeCardComponent = () => {
  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        width: "30%",
        height: { xs: "100px", md: "130px", lg: "150px" },
        justifyContent: "space-around",
        alignItems: "center",
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
          color="#B3E2A7"
        >
          12:41 AM
        </Typography>
        <Typography fontSize="32px" fontWeight="bold" lineHeight={1}>
          June 19, 2024
        </Typography>
      </Stack>
      <Stack height="100%">
        <Box width="7px" height="90%" bgcolor="#538392" />
      </Stack>
    </Paper>
  );
};
