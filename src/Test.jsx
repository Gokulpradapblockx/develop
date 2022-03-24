import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Algorand from './Assets/Algorand.png';
import Binance from './Assets/Binance.png';
import Bitcoin from './Assets/Bitcoin.png';
import Cardano from './Assets/Cardano.png';
import Cosmos from './Assets/Cosmos.png';
import Elrond from './Assets/Elrond.png';
import Ethereum from './Assets/Ethereum.png';
import Polkadot from './Assets/Polkadot.png';
import Polygon from './Assets/Polygon.png';
import Solana from './Assets/Solana.png';
import Stack from './Assets/Stack.png';
import Stellar from './Assets/Stellar.png';
import Tezos from './Assets/Tezos.png';
import Tron from './Assets/Tron.png';
import Wazirx from './Assets/Wazirx.png';



const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear" 
};

const Test = () => {
  return (
   
    <div className="About">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <div className="why">
          <h1>
            <span>Our Application</span> <br />
            We Build With
          </h1>
        </div>
      </div>
      <div className="opacity container-fluid col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <h1>Application</h1>
      </div>
    </div>

   
    <div>
      <div className='slide' id="tech">
        <Slider {...settings}>
          <div className='one'>
            <img src={Algorand} alt="Algorand" />
          </div>
          <div className='one'>
            <img src={Binance} alt="Algorand" />
          </div>
          <div className='one'>
            <img src={Bitcoin} alt="Algorand" />
          </div>
          <div className='one'>
            <img src={Cardano} alt="Algorand" />
          </div>
          <div className='one'>
            <img src={Cosmos} alt="Algorand" />
          </div>
          <div className='one'>
            <img src={Elrond} alt="Algorand" />
          </div>
          <div className='one'>
            <img src={Ethereum} alt="Algorand" />
          </div>
          <div className='one'>
            <img src={Polkadot} alt="Algorand" />
          </div>
          <div className='one'>
            <img src={Polygon} alt="Algorand" />
          </div>
          <div className='one'>
            <img src={Solana} alt="Algorand" />
          </div>
          <div className='one'>
            <img src={Stack} alt="Algorand" />
          </div>
          <div className='one'>
            <img src={Stellar} alt="Algorand" />
          </div>
          <div className='one'>
            <img src={Tezos} alt="Algorand" />
          </div>
          <div className='one'>
            <img src={Tron} alt="Algorand" />
          </div>
          <div className='one'>
            <img src={Wazirx} alt="Algorand" />
          </div>
        </Slider>
      </div>
    </div>
    </div>
  
  )
}

export default Test;