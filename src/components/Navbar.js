import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

  return (
    <div className="navbar" >
      <div className="name">
      <Link className="links_navbar" to="/"> Baptiste Morvan </Link>
      </div>
      <div className="links">
        <Link className="links_navbar" to="/"> Home </Link>
        <Link className="links_navbar" to="/projects"> Projects </Link>
        <Link className="links_navbar" to="/experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;