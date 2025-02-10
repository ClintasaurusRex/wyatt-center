import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header" className="header d-flex align-items-center position-relative">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src="assets/img/wwch.png" alt="AgriCulture" />
          <div className="logo-text">
            <p>The Wyatt Wiebe </p>
            <p>Centre For Healing</p>
          </div>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
