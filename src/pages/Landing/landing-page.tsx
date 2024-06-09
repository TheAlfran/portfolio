import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

export default function LandingPage() {
  return (
    <Grid container>
      <Grid item md={12}>
        <Stack direction="row" gap="30px">
          <Stack>
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
                  background:
                    "linear-gradient(to top, #FF7F09 0%, #C90FA0 100%)",
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
              <img
                src="/profile.jpeg"
                alt="Profile"
                style={{
                  width: "97%",
                  height: "97%",
                  borderRadius: "999px",
                }}
              />
            </Box>
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
              <Box display="flex" alignItems="center" gap="11px">
                <img src="/twitter.png" width="24px" height="24px" />
                <Typography fontSize="24px">Twitter</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="11px">
                <img src="/instagram.png" width="24px" height="24px" />
                <Typography fontSize="24px">Instagram</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="11px">
                <img src="/github.png" width="24px" height="24px" />
                <Typography fontSize="24px">Github</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="11px">
                <img src="/linkedin.png" width="24px" height="24px" />
                <Typography fontSize="24px">LinkedIn</Typography>
              </Box>
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
            <Paper
              elevation={1}
              sx={{
                width: "265px",
                height: "200px",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                padding: "12px",
              }}
            >
              <Box width="100%" height="126px" bgcolor="#686D76" />
              <Box width="100%" mt="10px">
                <Typography fontSize="18px" textAlign="start">
                  Lorem Ipsum
                </Typography>
                <Typography fontSize="10px" textAlign="start">
                  Lorem Ipsum
                </Typography>
              </Box>
            </Paper>
            <Paper
              elevation={1}
              sx={{
                width: "265px",
                height: "200px",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                padding: "12px",
              }}
            >
              <Box width="100%" height="126px" bgcolor="#686D76" />
              <Box width="100%" mt="10px">
                <Typography fontSize="18px" textAlign="start">
                  Lorem Ipsum
                </Typography>
                <Typography fontSize="10px" textAlign="start">
                  Lorem Ipsum
                </Typography>
              </Box>
            </Paper>
            <Paper
              elevation={1}
              sx={{
                width: "265px",
                height: "200px",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                padding: "12px",
              }}
            >
              <Box width="100%" height="126px" bgcolor="#686D76" />
              <Box width="100%" mt="10px">
                <Typography fontSize="18px" textAlign="start">
                  Lorem Ipsum
                </Typography>
                <Typography fontSize="10px" textAlign="start">
                  Lorem Ipsum
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
