import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo"></h1>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX className="icon" /> : <FiMenu className="icon" />}
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="home" smooth duration={500} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="about" smooth duration={500} onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="experience" smooth duration={500} onClick={() => setIsOpen(false)}>Experience</Link></li>
          <li><Link to="skills" smooth duration={500} onClick={() => setIsOpen(false)}>skills</Link></li>
          <li><Link to="projects" smooth duration={500} onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="contact" smooth duration={500} onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
