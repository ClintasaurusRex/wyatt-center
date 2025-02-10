import React from "react";

function Header() {
  return (
    <header id="header" className="header d-flex align-items-center position-relative">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <img src="assets/img/wwch.png" alt="AgriCulture" />
          <div className="logo-text">
            <p>The Wyatt Wiebe </p>
            <p>Centre For Healing</p>
          </div>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Our Services</a>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
