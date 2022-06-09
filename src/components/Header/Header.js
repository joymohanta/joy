import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-page">
      <div className="header-menu">
        <h1>UI developer</h1>
        <div className="menu">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a
            id="resume"
            href="https://drive.google.com/file/d/1aOPx_4kBjB_gu9nH1Wn0Lalvwtgbljhi/view?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
