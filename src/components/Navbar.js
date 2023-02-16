import React from "react";
import "../styles/Navbar.css";

function Navbar() {

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="navbar" className="navbar">
      <div className="name">
        <a className="links_navbar" onClick={() => scrollToElement("home_main")}>Baptiste Morvan</a>
      </div>
      <div className="links">
        <a className="links_navbar firstHover" onClick={() => scrollToElement("home_main")}>
          Home
        </a>
        <a className="links_navbar firstHover" onClick={() => scrollToElement("project")}>
          Projects
        </a>
        <a className="links_navbar firstHover" onClick={() => scrollToElement("contact")}>
          Contact
        </a>
      </div>
    </header>
  );
}

export default Navbar;
