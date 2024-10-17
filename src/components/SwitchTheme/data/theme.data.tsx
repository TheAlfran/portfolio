import { ColorModes } from "@core/types";

export const themes: {
    mode: ColorModes;
    label: string;
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
    color5?: string;
    titleColor?: string;
    $backgrounColor?: string;
  }[] = [
    { mode: "light", label: "Classic" },
    {
      mode: "dark",
      label: "Dark",
      color1: "#E6E6E6",
      color2: "#686D76",
      color3: "#333333",
      color4: "#B3E2A7",
      color5: "#F7F7F7",
      titleColor: "#FFFFFF",
      $backgrounColor: "#000000",
    },
    {
      mode: "spring",
      label: "Spring",
      color1: "#A87676",
      color2: "#CA8787",
      color3: "#E1ACAC",
      color4: "#A85959",
      color5: "#A64E4E",
      titleColor: "#A87676",
      $backgrounColor: "#FFD0D0",
    },
    {
      mode: "summer",
      label: "Summer",
      color1: "#618264",
      color2: "#B0EBB4",
      color3: "#BFF6C3",
      color4: "#A85959",
      color5: "#A64E4E",
      titleColor: "#618264",
      $backgrounColor: "#E0FBE2",
    },
    {
      mode: "autumn",
      label: "Autumn",
      color1: "#D97B3E",
      color2: "#F4A261",
      color3: "#F7C6A8",
      color4: "#5C4033",
      color5: "#7B5D44",
      titleColor: "#D97B3E",
      $backgrounColor: "#FFE8D6",
    },
    {
      mode: "winter",
      label: "Winter",
      color1: "#5D829A",
      color2: "#A3C4D6",
      color3: "#D1E4F3",
      color4: "#3C4A5B",
      color5: "#5A7184",
      titleColor: "#5D829A",
      $backgrounColor: "#E0F0FF",
    },
  ];
