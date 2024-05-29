import { Box } from "@mui/material";
import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return <Box sx={{ margin: "auto", maxWidth: "60%" }}>{children}</Box>;
}
