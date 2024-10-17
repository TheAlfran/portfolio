import { createRouter, RouterProvider } from "@tanstack/react-router";

import "./App.scss";
import { routeTree } from "./routeTree.gen";
import { ThemeContextProvider } from "@core/hooks";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
