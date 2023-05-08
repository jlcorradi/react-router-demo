import React from "react";
import { Link, Outlet } from "react-router-dom";

function AdminView() {
  return (
    <>
      <h1>This is the Administractive section</h1>
      <div className="flex">
        <ul>
          <li>
            <Link to="settings">Settings</Link>
          </li>
          <li>
            <Link to="notifications">Notifications</Link>
          </li>
        </ul>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export { AdminView };
