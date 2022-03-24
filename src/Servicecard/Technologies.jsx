import React from 'react';
import './tech.css';
import react from '../Assets/react-js-logo-1.webp';
import ios from '../Assets/ios-logo-3.png.webp';
import node from '../Assets/node-js-logo-1.webp';
import android from '../Assets/android-logo.webp';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const settings = {
  slidesToShow: 7,   
};

const Technologies = () => {
  return (
    <div>
      <div className='slide' id="tech">
        <Slider {...settings}>
          <div className='one'>
            <img src={react} alt="react" />
          </div>
          <div className='two'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Solidity_logo.svg/386px-Solidity_logo.svg.png?20201202112837" alt="react" />
          </div>
          <div className='three'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/144px-Rust_programming_language_black_logo.svg.png?20210506170622" alt="react" />
          </div>
          <div className='four'>
          <img src={node} alt="react" />
          </div >
          <div className='five'>
          <img src={android} alt="react" /> 
          </div>
          <div className='six'>
          <img src={ios} alt="react" /> 
          </div>
          <div className='seven'>
          <img src="https://raw.githubusercontent.com/dnfield/flutter_svg/7d374d7107561cbd906d7c0ca26fef02cc01e7c8/example/assets/flutter_logo.svg?sanitize=true" alt="react" />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Technologies;