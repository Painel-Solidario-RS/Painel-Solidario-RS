import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import "../src/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "../src/styles/Theme";
import { AuthProvider } from "./hooks/useAuth";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
