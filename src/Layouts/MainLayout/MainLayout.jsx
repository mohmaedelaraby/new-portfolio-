import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <div>MainLayout</div>
      <div>{<Outlet />}</div>
    </>
  );
}

export default MainLayout;
