import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import SignUpInMain from "./pages/sign-in-up/SignUpInMain";
import Dashboard from "./pages/dashboard/Dashboard";
import Courses from "./pages/courses/Courses";
import UnavailablePage from "./pages/unavailable/UnavailablePage";
import Course from "./pages/course/Course";
import Admin from "./pages/admin/Admin";
import Profile from "./pages/profile/Profile";
import PersistLoginComponent from "./components/PersistLoginComponent";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/landing/LandingPage";
import NotFound from "./pages/fallback/NotFound";
import Sponsors from "./components/Sponsors";
import Main from "./pages/sponsors/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <PersistLoginComponent />,
        children: [
          {
            element: <ProtectedRoute allowedRoles={["1991", "2013", "2025"]} />,
            children: [
              {
                path: "",
                element: <LandingPage />,
              },
              {
                path: "/dashboard",
                element: <Dashboard />,
              },
              { path: "/courses/:courseId", element: <Course /> },
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
                element: <Profile />,
              },
              {
                path: "/store",
                element: <UnavailablePage />,
              },
              {
                path: "/sponsors",
                element: <Main />,
              },
            ],
          },
          {
            element: <ProtectedRoute allowedRoles={["1991", "2013"]} />,
            children: [
              {
                path: "/admin",
                element: <Admin />,
              },
            ],
          },
        ],
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
      // {
      //   path: "",
      //   element: <Navigate to="/signin" />,
      // },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const routes = { router };

export default routes;
