import React from "react";
import About from "./Home/About";
import Contactus from "./Home/Contactus";
import Why from "./Home/Why";
import Managers from "./Home/Managers";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import Servicecard from './Servicecard'
import Test from "./Test";
const Home = () => {
  return (
  
   <>
     <Header />
      <About />
      <Servicecard/>
      <Test/>
      <Managers />
      <Why />
      <Contactus />
      <Footer />
      </>     
  );
};

export default Home;