import React from "react";
import { Outlet } from "react-router-dom";
import './MainLayout.css'

function MainLayout() {
  return (
    <>
    <div className="main">
      <div className="sidebar">sidebar</div>
      <div className="main-pages">
        <div className="topbar">top</div>
        <div className="page">{<Outlet />}</div>
      </div>
    </div>
     
    </>
  );
}

export default MainLayout;
