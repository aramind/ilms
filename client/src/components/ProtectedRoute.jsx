import React from "react";
import UnAuthorizedPage from "../pages/UnAuthorizedPage";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ allowedRoles }) => {
  const location = useLocation();
  const { auth } = useAuth();

  return !auth?.token ? (
    <Navigate to="/signin" state={{ from: location }} replace />
  ) : !allowedRoles.includes(auth?.role) ? (
    <UnAuthorizedPage />
  ) : (
    <Outlet />
  );
};

export default ProtectedRoute;
