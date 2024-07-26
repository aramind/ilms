import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import SignUpInMain from "./pages/sign-in-up/SignUpInMain";
import Dashboard from "./pages/dashboard/Dashboard";
import Courses from "./pages/courses/Courses";
import UnavailablePage from "./pages/unavailable/UnavailablePage";

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
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/messages",
        element: <UnavailablePage />,
      },
      {
        path: "/calendar",
        element: <UnavailablePage />,
      },
      {
        path: "/tools",
        element: <UnavailablePage />,
      },
      {
        path: "/files",
        element: <UnavailablePage />,
      },
      {
        path: "/profile",
        element: <UnavailablePage />,
      },
      {
        path: "/store",
        element: <UnavailablePage />,
      },
      // sign in up
      {
        path: "signup",
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

      // {
      //   path: "*",
      //   element: <Navigate to="/signin" />,
      // },
    ],
  },
]);

const routes = { router };

export default routes;
