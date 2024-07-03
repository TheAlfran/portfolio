import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";

export const IntroductionCardComponent = () => {
  return (
    <Paper
      elevation={5}
      sx={{
        width: { xs: "100%", sm: "80%", md: "69%", lg: "69%" },
        height: { xs: "100px", md: "130px", lg: "150px" },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack marginLeft={{ xs: "23px", lg: "46px" }}>
        <Typography
          fontSize={{ xs: "12px", sm: "16px", md: "18px", lg: "24px" }}
          fontWeight="bold"
          color="#686D76"
        >
          Hello, I'm Alfranciss Dionsay
        </Typography>
        <Typography
          fontSize={{ xs: "10px", sm: "11px", md: "13px", lg: "18px" }}
          color="#686D76"
        >
          I'am a junior front-end developer
        </Typography>
        <Button
          sx={{
            width: { xs: "90px", sm: "100px", md: "120px", lg: "155px" },
            height: { xs: "19px", sm: "21px", md: "24px", lg: "28px" },
            borderRadius: "20px",
            display: "flex",
            justifyContent: "space-around",
            background: "linear-gradient(to left, #B3E2A7 0%, #538392 100%)",
            marginTop: "5px",
          }}
        >
          <Typography
            fontSize={{ xs: "9px", sm: "11px", md: "12px", lg: "16px" }}
            color="white"
            textTransform="initial"
          >
            View Resume
          </Typography>
          <CallMadeIcon
            sx={{
              color: "white",
              fontSize: { xs: "8px", sm: "11px", md: "11px", lg: "14px" },
            }}
          />
        </Button>
      </Stack>

      <Stack>
        <Box>
          <Box
            component="img"
            src="/introduction.png"
            sx={{
              width: {
                xs: "120px",
                md: "185px",
                lg: "236px",
              },
              height: { md: "150px", lg: "173px" },
              transform: "scaleX(-1)",
              marginBottom: { xs: "-5px", md: "13px", lg: "15px" },
            }}
          />
        </Box>
      </Stack>
    </Paper>
  );
};
