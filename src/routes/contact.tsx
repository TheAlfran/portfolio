import { createFileRoute } from "@tanstack/react-router";

import { ContactScreen } from "src/pages/Contact/contact-page";

export const Route = createFileRoute("/contact")({
  component: () => <ContactScreen />,
});
