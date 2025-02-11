import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <header id="header" className="header d-flex align-items-center position-relative">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src="assets/img/wwch.png" alt="AgriCulture" />
          <div className="logo-text">
            <p id="logo-text">
              The Wyatt Wiebe <br />
              Centre For Healing
            </p>
          </div>
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}

export default Header;
