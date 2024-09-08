import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <div className="site-logo">Blognest</div>

      <div className={`header-nav ${isMenuOpen ? "nav-open" : ""}`}>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create-post" onClick={() => setIsMenuOpen(false)}>
              Create Post
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/manage-post" onClick={() => setIsMenuOpen(false)}>
              Uploaded Post
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user-profile" onClick={() => setIsMenuOpen(false)}>
              User Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
          </li>
        </ul>
      </div>

      <div className="header-right">
        <button className="email-button1">Sign Up</button>
        <button className="email-button">Log In</button>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}

export default Header;
