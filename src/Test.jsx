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
   <div className="hide">
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
          <h5>Algorand</h5>
            <img src={Algorand} alt="Algorand"/>
            
          </div>
          <div className='one'>
          <h5>Binance</h5>
            <img src={Binance} alt="Binance" />
            
          </div>
          <div className='one'>
          <h5>Bitcoin</h5>
            <img src={Bitcoin} alt="Bitcoin" />
            
          </div>
          <div className='one'>
          <h5>Cardano</h5>
            <img src={Cardano} alt="Cardano" />
            
          </div>
          <div className='one'>
          <h5>Cosmos</h5>
            <img src={Cosmos} alt="Cosmos" />
            
          </div>
          <div className='one'>
          <h5>Elrond</h5>
            <img src={Elrond} alt="Elrond" />
           
          </div>
          <div className='one'>
          <h5>Ethereum</h5>
            <img src={Ethereum} alt="Ethereum" />
          
           
          </div>
          <div className='one'>
          <h5>Polkadot</h5>
            <img src={Polkadot} alt="Polkadot" />
           
          </div>
          <div className='one'>
          <h5>Polygon</h5>
            <img src={Polygon} alt="Polygon" />
            
          </div>
          <div className='one'>
          <h5>Solana</h5>
            <img src={Solana} alt="Solana" />
            
          </div>
          <div className='one'>
          <h5>Stack</h5>
            <img src={Stack} alt="Stack" />
           
          </div>
          <div className='one'>
          <h5>Stellar</h5>
            <img src={Stellar} alt="Stellar" />
            
          </div>
          <div className='one'>
          <h5>Tezos</h5>
            <img src={Tezos} alt="Tezos" />
           
          </div>
          <div className='one'>
          <h5>Tron</h5>
            <img src={Tron} alt="Tron" />
           
          </div>
          <div className='one'>
          <h5>Wazirx</h5>
            <img src={Wazirx} alt="Wazirx"/>
           
          </div>
        </Slider>
      </div>
    </div>
    </div>
   </div>  
  )
}

export default Test;