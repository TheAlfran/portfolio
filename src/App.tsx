import { createRouter, RouterProvider } from "@tanstack/react-router";
import { ThemeProvider } from "@mui/material";

import { useCreateTheme } from "./@core";
import "./App.scss";
import { routeTree } from "./routeTree.gen";
import { Footer, Header } from "./components";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const theme = useCreateTheme();
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
