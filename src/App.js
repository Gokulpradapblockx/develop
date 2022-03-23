import logo from './logo.svg';
import './App.css';
import Aboutus from './Aboutus';
import Home from './Home';
import Nav from './Nav'
import Services from "./Services";
import Portfolio from "./Portfolio";
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import Servicecard from './Servicecard'
function App() {
  return ( 
    <>
   
    <BrowserRouter>
   <Nav/>
   {/* <Servicecard/> */}
       <Routes>        
      <Route path="/" element={ <Home/> }/>
      <Route path="/Portfolio" element={  <Portfolio/> }/>
      <Route path="/Services" element={<Services/> }/>
      <Route path="/Aboutus" element={   <Aboutus/> }/>           
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
