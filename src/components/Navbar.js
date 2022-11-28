import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/Navbar.css";
function Navbar() {

  return (
    <header id="navbar" className="navbar" >
      <div className="name">
      <Link className="links_navbar" to="/"> Baptiste Morvan </Link>
      </div>
      <div className="links">
          <Link to="/#top" className="links_navbar firstHover"> Home </Link>
          <Link to="/#project" className="links_navbar firstHover">Project</Link>
          <Link to="/#contact" className="links_navbar firstHover">Contact</Link>
      </div>
    </header>
  );
}

export default Navbar;