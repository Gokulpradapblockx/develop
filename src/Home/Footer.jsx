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

const Footer = () => {
  return (
    <section id="full-footer">
      <div className="container">
        <div className="row ">
          <div className="col-lg-3 footer">
            <img src="https://devoxsoftware.com/wp-content/themes/main/assets/images/logo.svg" alt="logo" />
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
              Technology
            </a>
            <a href="#">Full Stack Developer</a>
            <a href="#">Angular Developer</a>
            <a href="#">Web Developer</a>
            <a href="#">Hire Dot Net Developers</a>
            <a href="#">Hire Java Programmers</a>
            <a href="#">Microsoft .NET Development Company</a>
            <a href="#">Angular Development Services</a>
            <a href="#">Java Software Development Services</a>
            <a href="#">React JS Development Company</a>
            <a href="#">Vue JS Development Company</a>
            <a href="#">Node JS Development Services</a>
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
