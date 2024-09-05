import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

import { BlogPage } from "@core/constants";
import { LoadingComponent } from "src/components";

export const Route = createFileRoute("/blog")({
  component: () => (
    <Suspense fallback={<LoadingComponent />}>
      <BlogPage />
    </Suspense>
  ),
});
