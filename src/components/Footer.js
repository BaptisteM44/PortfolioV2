import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer_name">
        <p>Baptiste Morvan</p>
        <p>all rights reserved</p>
      </div>
      <div className="footer_link">
        <a className="footer_link_item firstHover" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/baptiste-morvan-88894391">Linkedin</a>
        <a className="footer_link_item firstHover" target="_blank" rel="noopener noreferrer" href="https://twitter.com/baptir">Twitter</a>
        <a className="footer_link_item firstHover" target="_blank" rel="noopener noreferrer" href="https://github.com/BaptisteM44">Github</a>  
      </div>
      <div className="footer_law">
        <p> &copy; 2022</p>
      </div>
    </section>
  );
}

export default Footer;