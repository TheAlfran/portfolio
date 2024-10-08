import { Outlet, createRootRoute } from "@tanstack/react-router";

import { NotFoundComponent } from "src/components";
import PageLayout from "src/layouts/pages.layout";

export const Route = createRootRoute({
  component: () => (
    <PageLayout>
      <Outlet />
    </PageLayout>
  ),
  notFoundComponent: () => {
    return <NotFoundComponent />;
  },
});
