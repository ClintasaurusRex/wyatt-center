import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const location = useLocation();

  return (
    <header
      id='header'
      className='header d-flex align-items-center position-relative'
    >
      <div className='container-fluid container-xl position-relative d-flex align-items-center justify-content-between'>
        <Link to='/' className='logo d-flex align-items-center'>
          <img src='assets/img/wwch.png' alt='AgriCulture' />
          <div className='logo-text'>
            <p id='logo-text'>
              The Wyatt Wiebe <br />
              Centre For Healing
            </p>
          </div>
        </Link>

        <nav id='navmenu' className='navmenu'>
          <ul>
            <li>
              <Link
                to='/'
                className={`nav-link ${
                  location.pathname === '/' ? 'active' : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className={`nav-link ${
                  location.pathname === '/about' ? 'active' : ''
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to='/services'
                className={`nav-link ${
                  location.pathname === '/services' ? 'active' : ''
                }`}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                id='contact-link'
                to='/contact'
                className={`nav-link ${
                  location.pathname === '/contact' ? 'active' : ''
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
          <i className='mobile-nav-toggle d-xl-none bi bi-list'></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
