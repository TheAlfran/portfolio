import { createFileRoute } from "@tanstack/react-router";

import { BlogPage } from "src/pages/Blog";

export const Route = createFileRoute("/blog")({
  component: () => <BlogPage />,
});
