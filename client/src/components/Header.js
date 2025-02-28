import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import NavLinks from "./NavLinks";
function Header() {
  return (
    <header id="header" className="header d-flex position-relative">
      <div className="container-fluid container-xl position-relative d-flex justify-content-between align-items-center">
        <div className="logo-container ">
          <Link to="/" className="logo d-flex align-items-center">
            <img src="assets/img/wwch.png" alt="AgriCulture" />
            <div className="logo-text"></div>
          </Link>
          <p id="logo-text">
            The Wyatt Wiebe <br />
            Centre For Healing
          </p>
        </div>
        <NavLinks />
      </div>
    </header>
  );
}
export default Header;
