import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const NavLinks = () => {
  const location = useLocation();
  return (
    <>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`nav-link ${location.pathname === "/services" ? "active" : ""}`}
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={`nav-link ${location.pathname === "/gallery" ? "active" : ""}`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              id="contact-link"
              to="/contact"
              className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </>
  );
};

export default NavLinks;
