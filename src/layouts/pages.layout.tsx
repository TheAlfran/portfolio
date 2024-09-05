import { Box, Container } from "@mui/material";
import React from "react";
import { Header, Footer } from "src/components";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      justifyContent="space-between"
    >
      <Header />
      <Container
        sx={{ flexGrow: 1, margin: "auto", maxWidth: "xl", padding: "8dvh" }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
