import { Container } from "@mui/material";
import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container sx={{ margin: "auto", maxWidth: "xl", padding: "8dvh" }}>
      {children}
    </Container>
  );
}
