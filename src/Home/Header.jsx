import React from "react";
import {
  BsArrowRight,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" gradient__bg">
      <div class="col-lg-12 container">
        <div class="row">
          <div class=" imade col-lg-6 col-sm-12">
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/578/737/non_2x/server-trading-and-bitcoin-investment-free-vector.jpg"
              alt=""
            />
          </div>

         <div className="col-lg-6">
         <div className="main-page__title-block mb-5">
           <h1>
           
           <span className="main-page__title main-page__title--big">Blockchain Development </span>
           
           </h1>
          </div>
        
          <div className="main-page__description mb-5">
            <p>
            BlockX Technologies is a complete End to End Blockchain Development Company. We are specialized in development of DeFi,DAO,NFT,Exchanges on Various Blockchain Platform.            </p>            
          </div>
          <div className="main-page__button-container">
            <div className="main-page__button-text">
           Let's talk
            <Link className="round-btn link-to-form" to="./Single"><i><BsArrowRight /></i></Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
