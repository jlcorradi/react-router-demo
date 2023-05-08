import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 mt-20">
        <Outlet />
      </div>
    </>
  );
}

export { AppLayout };
