import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
  FaArrowRight,
} from "react-icons/fa";
import {
  BsArrowRight,
} from "react-icons/bs";
function About() {
  return (
      <>
      <div className="About"> 
      <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="why">
              <h1>
                <span>About</span> <br />
                BlockX Technologies
              </h1>
            </div>
          </div>
          <div className="opacity container-fluid col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h1>BlockX</h1>
          </div>
        </div>
      <div className="container">
       

        <div className="container">
          <div className="row"></div>
          <div className="row">
            <div className="col-md-2 social-menu">
              <a href="./">
                <i>
                  <FaFacebookF />
                </i>
              </a>
              <a href="./">
                <i>
                  <FaLinkedinIn />
                </i>
              </a>
              <a href="./">
                <i>
                  <FaBehance />
                </i>
              </a>
            </div>
            <div class="col-md-4 txt">
              <p>
              BlockX Technologies  is a Blockchain Product and Service Development company. Our key value is our Quality Development We are specialized in Blockchain End to End Development
              </p>
              <p>
                Theon DeFi, NFT,DAO,Exchanges with complete Front End,Back End, Mobile Application. Blockchain Development has never been any easier – all you need to do is just tell us your requirements.
              </p>
            </div>

            <div class="col-md-4 txt">
              <p>
              We will advise you on the fitting solution, resources, and timeframe for your ideas.
Our main asset is <strong>our resources</strong>. We have top software and blockchain developers to run your project from initial estimation to release.
              </p>
              <p>
              BlockX Technologies achieves a <strong>well-planned development process</strong> and end to end solutions till the launch of your project.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="discover">
        <p>Discover</p>
        <a className="rounded-circle" href="./">          
           <i><BsArrowRight /></i>           
        </a>
      </div>
      </div>
    </>
  );
}

export default About;
