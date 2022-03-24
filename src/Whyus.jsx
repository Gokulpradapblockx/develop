import React from 'react'
import "./carrers.css";
const Whyus = () => {
  return (
    
      <div className="About">
        
      <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <div className="why">
          <h1>
            <span>Why</span> <br />
            Join Us?
          </h1>
        </div>
      </div>
      <div className="opacity container-fluid col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <h1>Perks</h1>
      </div>
    </div>
  
    <div className="container">
    <div className="row">
      <div className="join-us__list">
        <div className="join-us__item col-lg-2 col-md-2 col-sm-12 col-12">
          <div className="join-us__title">
            <i className="join-us__icon icon-workmanagement"></i>
            <span>Work</span>
          </div>
          <ul className="join-us__points">
            <li className="join-us__point">Flexible working hours</li>
            <li className="join-us__point">Clear leadership</li>
            <li className="join-us__point">Direct communication with client</li>
          </ul>
        </div>
        <div className="join-us__item col-lg-2 col-md-2 col-sm-12 col-12">
          <div className="join-us__title">
            <i className="join-us__icon icon-education"></i>
            <span>Education</span>
          </div>
          <ul className="join-us__points">
            <li className="join-us__point">Mentorship program</li>
            <li className="join-us__point">Meetups</li>
            <li className="join-us__point">In-house English classes</li>
          </ul>
        </div>
        <div class="join-us__item col-lg-2 col-md-2 col-sm-12 col-12">
          <div className="join-us__title">
            <i className="join-us__icon icon-entertaiment"></i>
            <span>Entertainment</span>
          </div>

          <ul className="join-us__points">
            <li className="join-us__point">Corporate events</li>
            <li className="join-us__point">Table games Friday</li>
            <li className="join-us__point">
              Sports and lounge zone with game console
            </li>
          </ul>
        </div>
        <div class="join-us__item col-lg-2 col-md-2 col-sm-12 col-12">
          <div className="join-us__title">
            <i className="join-us__icon icon-bonus"></i>
            <span>Bonuses</span>
          </div>

          <ul className="join-us__points">
            <li className="join-us__point">Vacation</li>
            <li className="join-us__point">Sick days</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  </div>
  
  )
}

export default Whyus;