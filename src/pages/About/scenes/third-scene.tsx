import { Grid, Stack, Typography, useTheme, Box } from "@mui/material";

export const ThirdScene = () => {
  const theme = useTheme();
  const subTextColor = {
    fontSize: "12px",
    color: theme.palette.text.secondary,
  };
  return (
    <Grid item md={12} display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap="88px" mt="100px">
      <Stack>
        <Box
          component="img"
          src="/random-fact.png"
          width="429px"
          height="474px"
        />
      </Stack>
      <Stack>
        <Typography fontSize="45px" color={theme.palette.text.primary}>
          Random Fact
        </Typography>
        <Typography sx={subTextColor}>I like to play online games</Typography>
        <Typography sx={subTextColor}>Yes to desktop cleanliness</Typography>
        <Typography sx={subTextColor}>Just got into designing</Typography>
        <Typography sx={subTextColor}>I live in earth C-173</Typography>
        <Typography sx={subTextColor}>
          I'm more like a milk person than coffee
        </Typography>
      </Stack>
    </Grid>
  );
};
