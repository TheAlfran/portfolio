import { Box, Button, Grid, Slide, Stack, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";

export default function Header() {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Slide
          direction="down"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <Stack
            bgcolor="black"
            height="92px"
            mb={2}
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <img src="/inverted-logo.png" width="62px" height="53px" />
            <Box display="flex" gap="40px" alignItems="center">
              <Typography color="white">about</Typography>
              <Typography color="white">portfolio</Typography>
              <Typography color="white">contact</Typography>
              <Button
                sx={{
                  border: 1,
                  borderColor: "white",
                  borderRadius: "20px",
                  gap: "10px",
                  textTransform: "none",
                  pl: "16px",
                  pr: "16px",
                }}
              >
                <Typography color="white" fontSize="16px" fontWeight="none">
                  View Resume
                </Typography>
                <CallMadeIcon sx={{ color: "white", fontSize: "14px" }} />
              </Button>
            </Box>
          </Stack>
        </Slide>
      </Grid>
    </Grid>
  );
}
