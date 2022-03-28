import React from "react";
import "./carrers.css";
import Contactus from "./Home/Contactus";
import Footer from "./Home/Footer";
import Weare from './Weare'
import Whyus from "./Whyus";
const carrers = () => {
  return (
   <>
     <div className="carrers_cardsection">
      <div className="carrers_container">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <img
                src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/12/career-in-information-technology.png.webp"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-white carrers_heading">
              <div>
                <h2>Become A Part of </h2>
              </div>
              <div>
                <h1>
                BlockX Software <br />
                  Team
                </h1>
              </div>
              <p>
                Your dream team and dream job are here. <br /> Check out our
                perks and benefits, meet our team, and read about the mentorship
                program.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div> 
    <Weare/>
    <Whyus/>
    <Contactus/>
   <Footer/>
   </>
  );
};

export default carrers;
