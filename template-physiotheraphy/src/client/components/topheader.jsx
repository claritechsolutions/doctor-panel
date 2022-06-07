import React from "react";
import logo from "../assets/images/top-logo.png";
import { Link } from "react-router-dom";

const TopHeader = (props) => {

  return (
    <div className="top-header">
    <div className="container-fluid">
      <div className="row justify-content-between align-items-center">
        <div className="col-12 col-md-4">
          <div className="left">
            <Link to="/" className="navbar-brand logo">
              <img src={logo} className="img-fluid" alt="Logo" />
            </Link>									
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="right">
            <ul>
              <li><span><i className="fas fa-phone-alt"></i> 090 98763456</span></li>
              <li><span><i className="fas fa-map-marker-alt"></i> 22, South Wales, New York</span></li>
              <li><span><i className="fas fa-calendar-check"></i> Mon - Fri : 09.00 AM to 05.00 PM</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TopHeader;
