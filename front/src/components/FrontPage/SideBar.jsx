import React from "react";

const SideBar = () => {
  return (
    <div
      className="bg-dark text-white"
      style={{
        width: "199px",
        minHeight: "100vh",
        position: "fixed",
        top: "60px", // Adjusted for Navbar height
        left: "0",
        zIndex: 999, // Keeps the Sidebar on top of other elements
        overflowY: "auto", // Allows scrolling for long content
      }}
    >
      <ul className="nav flex-column p-3">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Categories
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Favorites
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/map">
            Map
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
