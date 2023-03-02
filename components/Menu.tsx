import Link from 'next/link';
import React from 'react'

const Menu = () => {
  return (
    <>
      {/* style={{ display: 'none' }} */}
      <ul className='navbar-nav ms-auto' id='nav'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/products'>Products</Link>
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
        <li>
          <Link href='/services'>Services</Link>
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
        <li>
          <Link href='/about'>About Us</Link>
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