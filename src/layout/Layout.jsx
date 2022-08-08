import React from "react";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="bg-green-200  w-full px-5 ">
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
