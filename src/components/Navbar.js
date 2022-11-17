import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {

  return (
    <header id="navbar" className="navbar" >
      <div className="name">
      <Link className="links_navbar" to="/"> Baptiste Morvan </Link>
      </div>
      <div className="links">
          <a className="links_navbar firstHover" href="#top"> Home </a>
          <a className="links_navbar firstHover" href="#project">Project</a>
          <a className="links_navbar firstHover" href="#contact">Contact</a>
      </div>
    </header>
  );
}

export default Navbar;