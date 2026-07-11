import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h2>Rakshitha HN</h2>

      <p>
        MERN Stack Developer | MCA Graduate | Passionate Full Stack Developer
      </p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <p className="copyright">
        © 2026 Rakshitha HN. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;