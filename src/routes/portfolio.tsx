import { createFileRoute } from "@tanstack/react-router";

import { PortfolioPage } from "src/pages/Portfolio";

export const Route = createFileRoute("/portfolio")({
  component: () => <PortfolioPage />,
});
