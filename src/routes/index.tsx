import { createFileRoute } from "@tanstack/react-router";

import LandingPage from "src/pages/Landing/landing-page";

export const Route = createFileRoute("/")({
  component: () => <LandingPage />,
});
