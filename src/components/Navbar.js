import React from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/Navbar.css";
function Navbar() {

  return (
    <header id="navbar" className="navbar" >
      <div className="name">
      <HashLink className="links_navbar" to="/#top"> Baptiste Morvan </HashLink>
      </div>
      <div className="links">
          <HashLink to="/#top" className="links_navbar firstHover">Home</HashLink>
          <HashLink to="/#project" className="links_navbar firstHover">Project</HashLink>
          <HashLink to="/#contact" className="links_navbar firstHover">Contact</HashLink>
      </div>
    </header>
  );
}

export default Navbar;