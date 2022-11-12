import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {

  return (
    <div id="navbar" className="navbar" >
      <div className="name">
      <Link className="links_navbar" to="/"> Baptiste Morvan </Link>
      </div>
      <div className="links">
          <a className="links_navbar" href="#top"> Home </a>
          <a className="links_navbar" href="#project">Project</a>
          <a className="links_navbar" href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;