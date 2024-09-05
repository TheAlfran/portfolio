import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

import { ContactPage } from "@core/constants";
import { LoadingComponent } from "src/components";

export const Route = createFileRoute("/contact")({
  component: () => (
    <Suspense fallback={<LoadingComponent />}>
      <ContactPage />
    </Suspense>
  ),
});
