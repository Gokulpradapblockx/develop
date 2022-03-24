import React from "react";
import { Link, Outlet} from "react-router-dom";
const Servicecard = () => {
  return (
    <div className="About-service">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="why">
            <h1>
              <span>Our</span> <br />
              Services
            </h1>
          </div>
        </div>
        <div className="opacity container-fluid col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <h1>Services</h1>
        </div>
      </div>

      <div className="container">
        <ul class="exper me-auto mb-2 mb-lg-0">
          <li class="servi">
            <Link to="/">Expertise</Link>
          </li>
          <li class="servi">
            <Link to="/service">Services</Link>
          </li>
          <li class="servi">
            <Link to="/industry">Platforms</Link>
          </li>
          <li class="servi">
              <Link to="/technologies">Technologies</Link> 
            
          </li>
        </ul>
      </div>
      <Outlet/>
    </div>
  );
};

export default Servicecard;
