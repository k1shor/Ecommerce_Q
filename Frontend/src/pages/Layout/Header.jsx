import React from "react";

const Header = () => {
    function toggleMenu() {
      const nav = document.getElementById('navMenu');
      nav.classList.toggle('active');
    }
  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">QPSL</div>
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav id="navMenu">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Categories
            </a>
            <a href="#" className="nav-link">
              About
            </a>
            <a href="#" className="nav-link">
              Contact
            </a>
            <a href="#" className="nav-link">
              Support
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
