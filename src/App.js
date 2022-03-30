import "./App.css";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Nav from "./Nav";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Expertise from "./Servicecard/Expertise";
import Industries from "./Servicecard/Industries";
import Services from "./Servicecard/Services";
import Technologies from "./Servicecard/Technologies";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Careers from "./Careers";
import Single from "./Single";
// import Navbar from "./Navbar";
function App() {
  return (
    <>
   
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route exact path="" element={<Expertise />} />
            <Route exact path="service" element={<Services />} />
            <Route exact path="industry" element={<Industries />} />
            <Route exact path="technologies" element={<Technologies />} />
          </Route>
          <Route path="/Portfolio" element={<Portfolio />}/>
          <Route path="/Services" element={<Service />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Single" element={ <Single/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
