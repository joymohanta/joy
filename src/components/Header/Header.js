import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-page">
      <div className="header-menu">
        <h1>UI developer</h1>
        <div className="menu">
          <a href="#">Home</a>

          <a href="#projects-part">Projects</a>
          <a href="#about-part">About</a>
          <a href="#blogs-part">Blogs</a>
          <a href="#contact-part">Contact</a>
          <a
            id="resume"
            href="https://drive.google.com/file/d/1mFNxaezSNgmIOy5lE8A4H5S-uV1EupgK/view?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
