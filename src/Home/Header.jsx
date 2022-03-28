import React from "react";
import {
  BsArrowRight,
} from "react-icons/bs";

const Header = () => {
  return (
    <div className=" gradient__bg">
      <div class="col-lg-12 container">
        <div class="row">
          <div class=" imade col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </div>

         <div className="col-lg-6">
         <div className="main-page__title-block mb-5">
           <h1>
           {/* <span className="main-page__title">Your</span> */}
           <span className="main-page__title main-page__title--big">Blockchain Development </span>
           {/* <span className = "main-page__title main-page__title main-page__title--sub">
           Service Provider
           </span> */}
           </h1>
          </div>
        
          <div className="main-page__description mb-5">
            <p>
            BlockX Technologies is a complete End to End Blockchain Development Company. We are specialized in development of DeFi,DAO,NFT,Exchanges on Various Blockchain Platform.            </p>            
          </div>
          <div className="main-page__button-container">
            <div className="main-page__button-text">
           Let's talk
            <a className="round-btn link-to-form" href="#"><i><BsArrowRight /></i></a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
