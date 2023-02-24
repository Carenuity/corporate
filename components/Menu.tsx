import Link from 'next/link';
import React from 'react'

const Menu = () => {
  return (
    <>
      <ul className='navbar-nav ms-auto' id='nav' style={{ display: 'none' }}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About Us</Link>
        </li>
        <li>
          <Link href='/services'>Product</Link>
          <ul className='row megamenu'>
            <li className='col-lg-3'>
              <img
                src='img/content/about-03.jpg'
                alt='...'
                className='img-fluid'
              />
            </li>
            <li className='col-lg-3'>
              <span className='mb-0 mb-lg-2 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700 display-30'>
                Our Products
              </span>
              <ul>
                <li>
                  <Link href='/services/sensors'>
                    <i className='fa-solid fa-keyboard me-2'></i>
                    Sensors
                  </Link>
                </li>
                <li>
                  <Link href='/services/boards'>
                    <span className='ti-desktop me-2'></span>
                    Boards
                  </Link>
                </li>
                <li>
                  <Link href='/services/actuators'>
                    <span className='ti-light-bulb me-2'></span>
                    Actuators
                  </Link>
                </li>
              </ul>
            </li>
            <li className='col-lg-3'>
              <img
                src='img/content/about-03.jpg'
                alt='...'
                className='img-fluid'
              />
            </li>
            <li className='col-lg-3'>
              <span className='mb-0 mb-lg-2 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700 display-30'>
                Our Services
              </span>
              <ul>
                <li>
                  <Link href='/services/binaries'>
                    <i className='fas fa-code me-2'></i>
                    WebFlashing
                  </Link>
                </li>
                <li>
                  <Link href='/services/automation'>
                    <i className='fas fa-microchip me-2'></i>
                    Home Automation
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link href='/team'>Team</Link>
        </li>
        <li>
          <a href='#!'>Blog</a>
          <ul>
            <li>
              <a href='#!'>Blog Grid</a>
              <ul>
                <li>
                  <a href='blog-grid-two-columns.html'>2 Columns</a>
                </li>
                <li>
                  <a href='blog-grid-two-columns-left-sidebar.html'>
                    2 Col – Left Sidebar
                  </a>
                </li>
                <li>
                  <a href='blog-grid-two-columns-right-sidebar.html'>
                    2 Col – Right Sidebar
                  </a>
                </li>
                <li>
                  <a href='blog-grid.html'>3 Columns - Standard</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='blog-list.html'>Blog List</a>
            </li>
            <li>
              <a href='blog-details.html'>Blog Details</a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Menu