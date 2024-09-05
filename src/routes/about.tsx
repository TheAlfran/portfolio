import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

import { AboutPage } from "@core/constants";
import { LoadingComponent } from "src/components";


export const Route = createFileRoute("/about")({
  component: () => (
    <Suspense fallback={<LoadingComponent />}>
      <AboutPage />
    </Suspense>
  ),
});
