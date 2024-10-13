import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

export const FifthScene = () => {
  const theme = useTheme();
  return (
    <Grid
      item
      md={12}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      mt={"150px"}
    >
      <Stack width="40%">
        <Typography
          fontSize="32px"
          color={theme.palette.text.primary}
          fontWeight="bold"
          lineHeight={2}
        >
          My Story
        </Typography>
        <Typography fontSize="18px">
          I am a junior front-end developer. Discover more about me and how I
          built my career in front-end engineering. You'll find details about my
          experiences, personal projects, and the initial applications I created
          in the professional world.
        </Typography>
        <Stack width={"30%"} mt="40px">
          <Button
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              textTransform: "none",
              textDecoration: "underline",
              paddingLeft: "0px",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            disableRipple
          >
            Read my story
          </Button>
        </Stack>
      </Stack>
      <Stack>
        <Box position="relative" display="inline-block">
          <Paper
            elevation={4}
            sx={{
              width: "481px",
              height: "300px",
              paddingTop: "11px",
              paddingBottom: "11px",
              paddingRight: "7px",
              paddingLeft: "7px",
              bgcolor: theme.palette.background.default,
            }}
          >
            <Box
              component="img"
              src="/desktop.webp"
              width="467px"
              height="278px"
              draggable="false"
            />
          </Paper>
          <Paper
            elevation={4}
            sx={{
              width: "150px",
              height: "150px",
              borderRadius: "75px",
              bgcolor: theme.palette.background.default,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "20px",
              left: "-60px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: "140px",
                width: "140px",
                borderRadius: "999px",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: "999px",
                  padding: "3px",
                  background: `linear-gradient(to top, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                },
                background: "#fff",
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Box
                component="img"
                src="/profile.jpeg"
                width="97%"
                height="97%"
                borderRadius="999px"
                draggable="false"
              />
            </Box>
          </Paper>
        </Box>
      </Stack>
    </Grid>
  );
};
