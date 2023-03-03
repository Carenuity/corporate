import Link from 'next/link';
import React from 'react'

const Menu = () => {
  return (
    <>
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
                Modular C3-Sensor Box
              </Link>
            </li>
            <li>
              <Link href='/services/boards'>
                <i className='fa-solid fa-plug me-2'></i>
                SQ-Power Supply (launch 1st H.2023)
              </Link>
            </li>
            <li>
              <Link href='/services/actuators'>
                <i className='fa-solid fa-cloud me-2'></i>
                SQ-Weather (launch 2nd H.2023)
              </Link>
            </li>
            <li>
              <Link href='/services/actuators'>
                <i className='fa-solid fa-gauge me-2'></i>
                SQ-Panel (launch 2024)
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href='/services'>Services</Link>
          <ul>
            <li>
              <Link href='https://chipglobe-dev.web.app/'>
                <i className='fas fa-code me-2'></i>
                WebFlashing
              </Link>
            </li>
            <li>
              <Link href='/services/automation'>
                <i className='fas fa-microchip me-2'></i>
                SQ-APP (Launch 2024)
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href='/about'>About Us</Link>
        </li>
        <li>
          <a href='#!'>Contact</a>
          <ul>
            <li>
              <a href='/team'>Team</a>
            </li>
            <li>
              <a href='/blogs'>Blog</a>
            </li>
            <li>
              <a href='/help'>Help Center</a>
            </li>
            <li>
              <a href='/contact'>Contact Us</a>
            </li>
          </ul>
        </li>
        <li className='d-lg-none d-inline-block'>
          <Link href='/login' className=''>
            <span>Login / Register</span>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Menu