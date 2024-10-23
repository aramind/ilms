import React from "react";
import { Outlet } from "react-router-dom";
import SponsorsBox from "../components/SponsorsBox";

const MainLayout = () => {
  return (
    <div>
      <Outlet />
      {/* <SponsorsBox /> */}
    </div>
  );
};

export default MainLayout;
