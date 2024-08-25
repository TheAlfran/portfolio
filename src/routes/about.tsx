import { createFileRoute } from "@tanstack/react-router";

import { AboutScreen } from "src/pages/About";

export const Route = createFileRoute("/about")({
  component: () => <AboutScreen />,
});
