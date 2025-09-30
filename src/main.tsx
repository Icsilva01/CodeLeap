import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./Context/UserContext";
import { AppRoutes } from "./Router";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
