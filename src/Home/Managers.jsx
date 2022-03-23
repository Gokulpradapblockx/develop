import React from 'react'
import {  
    FaArrowRight,
  } from "react-icons/fa";
const Managers = () => {
  return (
    <div className="About">
         <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="why">
            <h1><span>Talk</span> <br/> To Managers</h1>
        </div>
          </div>
          <div className="opacity container-fluid col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h1>Talk</h1>
          </div>
        </div>
        <div className="container">        
        
        <div className="manager-card">           
                <div className="row card-component">
                    <div className="col-lg-4 col-sm-12 compont">
                        <h5>TALK TECH?</h5>
                        <p>If you want to have a comprehensive tech conversation I, as a CTO of Devox Software glad to help you specify technical requirements for your product, suggest the best approach and technological stack.</p>
                        <button>Email Sergey <FaArrowRight/></button>
                    </div>
                    <div className="col-lg-4 col-sm-12 compont">
                        <h5>NEED A TEAM?</h5>
                        <p>Need a dynamic team? Then you should talk to me. I am CEO of Devox Software. I’d be glad to discuss your needs with you & help you build a team of top talents to help your business reach its potential.</p>
                        <button>Email Vadym <FaArrowRight/></button>
                    </div>
                    <div className="col-lg-4 col-sm-12 compont">
                        <h5>JOIN US?</h5>
                        <p>Looking for a dream team and a dream job? I am a Recruitment Tech Lead. Write us and send your CV, so we will offer the best opportunity that meets your thriving experience and welcome you in our team.</p>
                        <button>Email Dariia  <FaArrowRight/> </button>
                    </div>
                </div>
            
        </div>
    </div>

    </div>
  )
}

export default Managers