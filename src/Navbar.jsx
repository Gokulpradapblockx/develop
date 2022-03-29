import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import {Link } from 'react-router-dom';
// import logo from '../src/Assets/blocx_lo.png';
// import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ido__navbar">
      <div className="ido__navbar-links">
        <div className="ido__navbar-links_logo">
          {/* <img src={logo} alt='ai' /> */}
        </div>
      </div>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Services">Services</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Portfolio">Portfolio</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Careers">Careers</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/Aboutus">Blog</a>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Aboutus">About us</Link>
              </li>
              
              <form class="d-flex">            
              <button class="btn" type="submit">Contact us</button>
            </form>
            </ul>
      <div className="ido__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <Link class="nav-link active" to="/">Home</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link active" aria-current="page" to="/Services">Services</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link active" aria-current="page" to="/Portfolio">Portfolio</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link active" aria-current="page" to="/Careers">Careers</Link>
         </li>
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="/Aboutus">Blog</a>
         </li>
         <li class="nav-item">
           <Link class="nav-link active" aria-current="page" to="/Aboutus">About us</Link>
         </li>
         
         <form class="d-flex">            
         <button class="btn" type="submit">Contact us</button>
       </form>
       </ul>
        
        )}
      </div>
    </div>
  );
};

export default Navbar;