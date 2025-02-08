import React from 'react';

function Header() {
  return (
    <header
      id='header'
      className='header d-flex align-items-center position-relative'
    >
      <div className='container-fluid container-xl position-relative d-flex align-items-center justify-content-between'>
        <a href='/' className='logo d-flex align-items-center'>
          <img src='assets/img/wwch.png' alt='AgriCulture' />
          <div className='logo-text'>
            <p>The Wyatt Wiebe </p>
            <p>Centre For Healing</p>
          </div>
        </a>

        <nav id='navmenu' className='navmenu'>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About Us</a>
            </li>
            <li>
              <a href='/services'>Our Services</a>
            </li>
            <li>
              <a href='/blog'>Blog</a>
            </li>
            {/* <li className='dropdown'>
              <button className='dropdown-toggle'>
                <span>Dropdown</span>
                <i className='bi bi-chevron-down toggle-dropdown'></i>
              </button>
              <ul>
                <li>
                  <a href='/dropdown1'>Dropdown 1</a>
                </li>
                <li className='dropdown'>
                  <button className='dropdown-toggle'>
                    <span>Deep Dropdown</span>
                    <i className='bi bi-chevron-down toggle-dropdown'></i>
                  </button>
                  <ul>
                    <li>
                      <a href='/deep1'>Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href='/deep2'>Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href='/deep3'>Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href='/deep4'>Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href='/deep5'>Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='/dropdown2'>Dropdown 2</a>
                </li>
                <li>
                  <a href='/dropdown3'>Dropdown 3</a>
                </li>
                <li>
                  <a href='/dropdown4'>Dropdown 4</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
          <i className='mobile-nav-toggle d-xl-none bi bi-list'></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
