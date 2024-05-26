import { Box, Grid, Stack, Typography } from "@mui/material";

export default function Header() {
  return (
    <Grid container>
      <Grid item md={12}>   
        <Stack bgcolor={"blue"} height={70} mb={2} direction={"row"}>
          <Box>
          </Box>
          <Box display={"flex"} >
            <Typography>About</Typography>
            <Typography>Portfolio</Typography>
            <Typography>Contact</Typography>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
