import { ApexOptions } from "apexcharts";
import { useTheme } from "@mui/material";

export const useChartOptions = (): ApexOptions => {
  const theme = useTheme();

  return {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    title: {
      text: "My Skills",
      align: "right",
      style: {
        fontSize: "32px",
        color: theme.palette.text.primary,
        fontWeight: "regular",
      },
    },
    xaxis: {
      categories: ["Gamer", "Coding", "Drawing", "Designer"],
    },
    yaxis: {
      min: 0,
      max: 4,
      tickAmount: 4,
      labels: {
        formatter: (value: number) => {
          if (value < 1) return "";
          if (value < 2) return "Newbie";
          if (value < 3) return "Geek";
          if (value < 4) return "Morty";
          return "Rick";
        },
      },
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            { from: 0, to: 1, color: theme.palette.text.primary },
            { from: 1, to: 2.6, color: theme.palette.primary.main },
            { from: 2.7, to: 3, color: theme.palette.tertiary.main },
            { from: 3.1, to: 3.3, color: theme.palette.primary.main },
            { from: 3.4, to: 4, color: theme.palette.secondary.main },
          ],
        },
        dataLabels: {
          position: "bottom",
        },
      },
    },
  };
};

export const chartSeries = [
  {
    name: "Skill Level",
    data: [3.3, 3.7, 3, 2.6],
  },
];
