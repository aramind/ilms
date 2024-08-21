import React, { useEffect, useState } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import LoadingPage from "../pages/LoadingPage";
import { Outlet } from "react-router-dom";

const PersistLoginComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, persist } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    !auth?.token ? verifyRefreshToken() : setIsLoading(false);
  }, [auth?.token, refresh]);

  return (
    <>{!persist ? <Outlet /> : isLoading ? <LoadingPage /> : <Outlet />}</>
  );
};

export default PersistLoginComponent;
