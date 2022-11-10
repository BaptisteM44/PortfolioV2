import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "../styles/Navbar.css";
function Navbar() {

  return (
    <div className="navbar" >
      <div className="name">
      <Link className="links_navbar" to="/"> Baptiste Morvan </Link>
      </div>
      <div className="links">
        <Link className="links_navbar" to="/"> Home </Link>
        <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="links_navbar" to="/projects"> Projects </Link>
        <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="contact" className="links_navbar"> Contact </Link>
      </div>
    </div>
  );
}

export default Navbar;