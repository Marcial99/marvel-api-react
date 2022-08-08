import React from "react";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="bg-blue-900  w-full">
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
