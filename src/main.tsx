import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from '@vercel/analytics/react';
import { CssBaseline } from "@mui/material";

import App from "./App.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
    <Analytics />
  </React.StrictMode>
);
