import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import SignUpInMain from "./pages/sign-in-up/SignUpInMain";
import Dashboard from "./pages/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/signup",
        element: <SignUpInMain />,
      },
      {
        path: "signin",
        element: <SignUpInMain />,
      },
      {
        path: "",
        element: <Navigate to="/signin" />,
      },
      {
        path: "*",
        element: <Navigate to="/signin" />,
      },
    ],
  },
]);

const routes = { router };

export default routes;
