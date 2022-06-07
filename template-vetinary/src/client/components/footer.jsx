import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-white.png";

const Footer = (props) => {
  const exclusionArray = [
    "/pages/doctor-grid",
    "/pages/doctor-list",
    "/pages/video-call",
    "/pages/voice-call",
    "/pages/chat-doctor",
    "/patient/doctor-list",
    "/patient/doctor-grid",
  ];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }
  return (
    <footer className="footer">
	
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
          
    
            <div className="footer-widget footer-about">
              <div className="footer-logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="footer-about-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className="social-icon">
                  <ul>
                    <li>
                      <a href="#" target="_blank"><i className="fab fa-facebook-f"></i> </a>
                    </li>
                    <li>
                      <a href="#" target="_blank"><i className="fab fa-google-plus-g"></i> </a>
                    </li>
                    <li>
                      <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#" target="_blank"><i className="fab fa-twitter"></i> </a>
                    </li>
                    <li>
                      <a href="#" target="_blank"><i className="fab fa-youtube"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
         
            
          </div>
          
          <div className="col-lg-3 col-md-6">
          
          
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">For Patients</h2>
              <ul>
                <li><Link to="/patient/search-doctor">Search for Doctors</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/patient/booking">Booking</Link></li>
                <li><Link to="/patient/dashboard">Patient Dashboard</Link></li>
              </ul>
            </div>
           
          </div>
          
          <div className="col-lg-3 col-md-6">
          
    
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">For Doctors</h2>
              <ul>
                <li><Link to="/doctor/appointments">Appointments</Link></li>
                <li><Link to="/patient/patient-chat">Chat</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/doctor/doctor-dashboard">Doctor Dashboard</Link></li>
              </ul>
            </div>
          
            
          </div>

          <div className="col-lg-3 col-md-6">
          
           
           <div className="footer-widget footer-menu">
              <h2 className="footer-title">Contact Us</h2>
              <ul>
                <li>
                  <p>
                    <i className="far fa-compass"></i>
                    3556 Beech Street, San Francisco, California, CA 94108
                  </p>
            </li>
                 <li>
                  <p>
                    <i className="fas fa-mobile-alt"></i>
                    +1 315 369 5943
                  </p>
                </li> 
                <li>
                  <p>
                    <i className="far fa-envelope-open"></i>
                    doccure@example.com
                  </p>
                </li>
              </ul>
            </div> 
          
            
          </div>
          
        </div>
      </div>
    </div>
  
            <div className="footer-bottom">
      <div className="container">
        <div className="row d-flex justify-content-between col-md-12">
          <p>© 2020 Doccure. All rights reserved.</p>
          <Link to="/pages/terms">Terms and Conditions Policy</Link>
        </div>
      </div>
    </div>

    
  </footer>
  );
};

export default Footer;
