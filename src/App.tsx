import { createRouter, RouterProvider } from "@tanstack/react-router";
import { ThemeProvider } from "@mui/material";

import { useCreateTheme } from "./@core";
import Header from "./components/Header";
import "./App.scss";
import { routeTree } from "./routeTree.gen";

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
    </ThemeProvider>
  );
}

export default App;
