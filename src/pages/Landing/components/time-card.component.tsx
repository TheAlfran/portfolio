import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Clock from "react-live-clock";

export const TimeCardComponent = () => {
  const theme = useTheme();
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        width: "30%",
        height: { xs: "100px", md: "130px", lg: "150px" },
        justifyContent: "space-around",
        alignItems: "center",
        bgcolor: theme.palette.background.default,
      }}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Clock
          format={"h:mm:ss A"}
          ticking={true}
          timezone={"Asia/Manila"}
          style={{ fontSize: "32px", fontWeight: "bold", lineHeight: 1 }}
        />
        <Typography
          fontSize="32px"
          fontWeight="bold"
          lineHeight={1}
          color={theme.palette.text.secondary}
        >
          {formattedDate}
        </Typography>
      </Stack>
      <Stack height="100%">
        <Box width="7px" height="90%" bgcolor={theme.palette.primary.main} />
      </Stack>
    </Paper>
  );
};
