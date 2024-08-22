import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import greenTheme from "./themes/green";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStatesContextProvider from "./context/GlobalStatesContextProvider";
import AuthProvider from "./context/AuthProvider";
import CourseProvider from "./context/CourseProvider";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStatesContextProvider>
        <QueryClientProvider client={queryClient}>
          <CourseProvider>
            <ThemeProvider theme={greenTheme}>
              <App />
            </ThemeProvider>
          </CourseProvider>
        </QueryClientProvider>
      </GlobalStatesContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
