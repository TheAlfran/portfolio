import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";

import App from "./App.tsx";
import "./index.scss";
import Header from "./components/Header/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <Header />
    <App />
  </React.StrictMode>
);
