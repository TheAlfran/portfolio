import { createFileRoute } from "@tanstack/react-router";

import { ContactScreen } from "src/pages/Contact";

export const Route = createFileRoute("/contact")({
  component: () => <ContactScreen />,
});
