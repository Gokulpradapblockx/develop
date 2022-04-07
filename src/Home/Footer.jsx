import React from "react";
import {
    FaFacebookF,  
    FaTwitter,
    FaLinkedinIn,
    FaDiscord
  } from "react-icons/fa";
  import {   
    GoLocation,
    GoMail,
    GoDeviceMobile
  } from "react-icons/go";
  import {
    IoLogoInstagram,  
  } from "react-icons/io";
  import {
    BsMedium 
  } from "react-icons/bs";
  
  import logo from '../Assets/logo1.png';

const Footer = () => {
  return (
    <section id="full-footer">
      <div className="container">
        <div className="row ">
          <div className="col-lg-3 footer">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-lg-3 footer">
            <h6>Company</h6>
            <a href="./Aboutus">About Us</a>
            <a href="./Careers">Careers</a>
            <a href="./Portfolio">Portfolio</a>
          </div>
          <div className="col-lg-3 footer">
           <h6>Services</h6>
            <a href="../Services">Blockchain Development</a>
            <a href="../Services">Front End - Web 3.O Development</a>
            <a href="../Services">Back End Development</a>
            <a href="../Services">Graphics Designing</a>
            <a href="../Services">Mobile App Development</a>
          </div>
          <div className="col-lg-3 footer">
          <h6>Platforms</h6>
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
          <div className="col-lg-4 footer1">
          
           
          </div>
          <div className="col-lg-4 col-sm-12 col-xs-12 footer1 logo">
           <a target="_blank" href="https://www.facebook.com/blockxtechnologies/"><p><FaFacebookF/></p></a>
           <a target="_blank" href="https://www.instagram.com/blockxtechnologies"><p><IoLogoInstagram/></p></a>
           <a target="_blank" href="https://mobile.twitter.com/@BlockXTechInc"><p><FaTwitter/></p></a>
           <a target="_blank" href="https://www.linkedin.com/company/blockx-technologies-inc"><p><FaLinkedinIn/></p></a>
           <a target="_blank" href="https://medium.com/@socialmedia.blockxtech"><p><BsMedium/></p></a>
           <a target="_blank" href="https://discord.gg/JvFkxP9Qa8"><p><FaDiscord/></p></a>
          </div>        
        <div className="col-lg-4 footer1">
        
        </div>
        </div>
       
      </div>
      <small>Copyright &copy; 2022, All Rights blockxtechnologiesInc</small>
    </section>
  );
};

export default Footer;
