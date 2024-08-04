import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import greenTheme from "./themes/green";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStatesContextProvider from "./context/GlobalStatesContextProvider";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStatesContextProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={greenTheme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </GlobalStatesContextProvider>
  </React.StrictMode>
);
