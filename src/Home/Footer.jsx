import React from "react";
import {
    FaFacebookF,  
    FaTwitter,
    FaLinkedinIn
  } from "react-icons/fa";
  import {   
    GoLocation,
    GoMail,
  } from "react-icons/go";
  import {
    IoLogoInstagram,  
  } from "react-icons/io";
  import logo from '../Assets/blocx_lo.png';

const Footer = () => {
  return (
    <section id="full-footer">
      <div className="container">
        <div className="row ">
          <div className="col-lg-3 footer">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-lg-3 footer">
            <a className="tag">Company</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Mentorship</a>
          </div>
          <div className="col-lg-3 footer">
            <a className="tag" href="#">
              Services
            </a>
            <a href="#">Blockchain Development</a>
            <a href="#">Front End - Web 3.O Development</a>
            <a href="#">Back End Development</a>
            <a href="#">Graphics Designing</a>
            <a href="#">Mobile App Development</a>
          </div>
          <div className="col-lg-3 footer">
            <a className="tag" href="#">
            Platforms
            </a>
            <a href="#">Binance Smart Chain</a>
            <a href="#">Ethereum</a>
            <a href="#">Polygon</a>
            <a href="#">Solana</a>
            <a href="#">Avalanche</a>
            <a href="#">Metis</a>
            <a href="#">Cosmos</a>
            <a href="#">Polkadot</a>
            <a href="#">DeX</a>
            <a href="#">DeFi</a>
            <a href="#">DAO</a>
          </div>
        </div>
        <div className="row end">
          <div className="col-lg-4 footer">
            <p><GoLocation/>Location</p>
          </div>
          <div className="col-lg-4 col-sm-12 col-xs-12 footer logo">
           <a href="#"><p><FaFacebookF/></p></a>
           <a href="#"><p><IoLogoInstagram/></p></a>
           <a href="#"><p><FaTwitter/></p></a>
           <a href="#"><p><FaLinkedinIn/></p></a>
          </div>        
        <div className="col-lg-4 footer">
          <p><GoMail/> Mail</p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
