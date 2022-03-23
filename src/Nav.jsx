import React from 'react'
import {Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <img src="https://devoxsoftware.com/wp-content/themes/main/assets/images/logo.svg" alt="logo" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
                <a class="nav-link active" aria-current="page" href="#">Careers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Aboutus">About us</Link>
              </li>
              <form class="d-flex">            
              <button class="btn" type="submit">Contact us</button>
            </form>
             </ul>
           
          </div>
        </div>
      </nav>
    
  )
}

export default Nav;