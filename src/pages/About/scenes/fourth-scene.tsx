import Grid from "@mui/material/Grid2";
import Chart from "react-apexcharts";

import { chartSeries, useChartOptions } from "../hooks";

export const FourthScene = () => {
  const chartOptions = useChartOptions();

  return (
    <Grid size={12} mt="150px">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={550}
      />
    </Grid>
  );
};
