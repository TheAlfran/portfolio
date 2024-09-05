import { LandingPage } from "@core/constants";
import { createFileRoute } from "@tanstack/react-router";

import { Suspense } from "react";
import { LoadingComponent } from "src/components";

export const Route = createFileRoute("/")({
  component: () => (
    <Suspense fallback={<LoadingComponent />}>
      <LandingPage />
    </Suspense>
  ),
});
