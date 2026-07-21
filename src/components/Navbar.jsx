import React, { useState } from "react";
import "./Navbar.css";
import {
  FaUserTie,
  FaFileAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <FaUserTie className="logo-icon" />
        <h2>Rakshitha HN</h2>
      </div>

      {/* Navigation */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>

        <a href="#education" onClick={() => setMenuOpen(false)}>
          Education
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

        <a
          href="#resume"
          className="resume-btn"
          onClick={() => setMenuOpen(false)}
        >
          <FaFileAlt />
          Resume
        </a>

      </div>

      {/* Mobile Menu */}

      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
}

export default Navbar;
