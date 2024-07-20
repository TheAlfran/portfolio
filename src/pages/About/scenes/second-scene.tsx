import { Grid, Typography, Box, Stack } from "@mui/material";
import { pieArcLabelClasses, PieChart } from "@mui/x-charts/PieChart";

import { useChartConfig } from "../hooks";

export const SecondScene = () => {
  const { data, size, titleTextStyle, subTextStyle } = useChartConfig();

  return (
    <Grid
      item
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      mt="100px"
      md={12}
    >
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        width="300px"
      >
        <Typography sx={titleTextStyle}>Designer</Typography>
        <Typography sx={subTextStyle}>basic figma</Typography>
        <Typography sx={subTextStyle}>basic ui design</Typography>
        <Typography sx={subTextStyle}>basic ux design</Typography>
      </Stack>
      <Stack>
        <Box
          sx={{
            width: "450px",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PieChart
            series={[
              {
                arcLabel: (item) => `(${item.value})`,
                arcLabelMinAngle: 45,
                data,
                innerRadius: 210,
                outerRadius: 290,
                paddingAngle: 2,
                cornerRadius: 0,
                startAngle: -180,
                endAngle: 180,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: "white",
                fontWeight: "bold",
              },
            }}
            {...size}
          />
        </Box>
      </Stack>
      <Stack
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        width="300px"
        height="100%"
      >
        <Box>
          <Typography sx={titleTextStyle}>Coder</Typography>
          <Typography sx={subTextStyle}>React / React Native</Typography>
          <Typography sx={subTextStyle}>Typescript</Typography>
          <Typography sx={subTextStyle}>HTML / CSS</Typography>
          <Typography sx={subTextStyle}>Grumbling at my screen</Typography>
          <Typography sx={subTextStyle}>Drinking Milk</Typography>
        </Box>
        <Box>
          <Typography sx={titleTextStyle}>Gamer</Typography>
          <Typography sx={subTextStyle}>dark souls series</Typography>
          <Typography sx={subTextStyle}>elden ring</Typography>
          <Typography sx={subTextStyle}>dota 2</Typography>
        </Box>
      </Stack>
    </Grid>
  );
};
