import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-custom">
      <h1 className="empDirectory">
        Employee Directory
      </h1>
    </nav>
  );
}

export default Navbar;
