import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

import { PortfolioPage } from "@core/constants";
import { LoadingComponent } from "src/components";

export const Route = createFileRoute("/portfolio")({
  component: () => (
    <Suspense fallback={<LoadingComponent />}>
      <PortfolioPage />
    </Suspense>
  ),
});
