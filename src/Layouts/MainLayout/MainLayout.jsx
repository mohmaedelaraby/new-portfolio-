import React from "react";
import { Outlet } from "react-router-dom";
import './MainLayout.css'
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";

const navItems = [
  { label: "Home", href: "/home#home" },
  { label: "About", href: "/home#about" },
  { label: "Skills", href: "/home#skills" },
  { label: "Experience", href: "/home#experience" },
  { label: "Projects", href: "/home#projects" },
  { label: "Contact", href: "/home#contact" }
];

function MainLayout() {
  return (
    <>
    <div className="main">
      <Topbar items={navItems} />
      <div className="background">
      <aside className="sidebar"><Sidebar items={navItems} /></aside>
      <div className="main-pages">
       
        <div className="page">{<Outlet />}</div>
      </div>
      </div>
    </div>
     
    </>
  );
}

export default MainLayout;
