import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-700 text-white py-4 fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl">My Website</div>
          <ul className="flex space-x-4">
            <li className="list-item">
              <Link to="dashboard">Home</Link>
            </li>
            <li className="list-item">
              <Link to="about">About</Link>
            </li>
            <li className="list-item">
              <Link to="admin">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
