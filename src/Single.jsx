import React from "react";
import "./single.css";
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
  
const Single = () => {
  return (
    <>
      <div className="About background">
    
       
        <div className="container">
        <div className="row"> 
        
         <div className="col-lg-12 sohead text-center">
             <h1> Contact BlockX</h1>
              <h4>
             <GoMail /> Mail: contact@blockxtechnologies.com
              </h4>
              <h3>
                <GoDeviceMobile /> Contact number : +91-8531824727 / +91-8094441337
              </h3>
              <div className="row soaddress">
              <div className="col-lg-6">
              <h5>
                <GoLocation />
                 India
              </h5>
              <p>No:726,4th street, <br/>
                  Cross Cut Raod,Tatabad, <br/>
                  Coimbatore,<br/>
                  Tamil nadu- 641012,
                  </p>
            </div>
            <div className="col-lg-6">
              <h5>
                <GoLocation />
                 Seychelles
              </h5>
                  <p>House of Francis,<br/>
                   Room No 303,Ille Du Port,<br/>
                   Mahe, Seychelles</p>
            </div>
              </div>
              <div className="row">
              <div className="col-lg-12 col-sm-12 col-xs-12 soicon">
                  <h5>Follow Us:</h5>
         <a target="_blank" href="https://www.facebook.com/blockxtechnologies/"><p><FaFacebookF/></p></a>
           <a target="_blank" href="https://www.instagram.com/blockxtechnologies"><p><IoLogoInstagram/></p></a>
           <a target="_blank" href="https://mobile.twitter.com/@BlockXTechInc"><p><FaTwitter/></p></a>
           <a target="_blank" href="https://www.linkedin.com/company/blockx-technologies-inc"><p><FaLinkedinIn/></p></a>
           <a target="_blank" href="https://medium.com/@socialmedia.blockxtech"><p><BsMedium/></p></a>
           <a target="_blank" href="https://discord.gg/JvFkxP9Qa8"><p><FaDiscord/></p></a>
         </div>
              </div>
            </div>
           
           </div>       
        </div>
         <small className="pt-2">Copyright &copy; 2022, All Rights blockxtechnologiesInc</small>
      </div>
      
    </>
  );
};

export default Single;
