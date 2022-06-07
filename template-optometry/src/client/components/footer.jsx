import React from "react";
import { Link } from "react-router-dom";
import playstore from "../assets/images/play-store.png";
import appstore from "../assets/images/app-store.png";
import logo from "../assets/images/logo.png";

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
            <div className="col-lg-6 col-md-6">
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="footer-about-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="#0" target="_blank">
                          <i className="fab fa-facebook-f"></i>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#0" target="_blank">
                          <i className="fab fa-google-plus-g"></i>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#0" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" target="_blank">
                          <i className="fab fa-twitter"></i>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Links</h2>
                <ul>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/blog/blog-grid">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/pages/terms">Terms</Link>
                  </li>
                  <li>
                    <Link to="/pages/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-3">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Patients</h2>
                <ul>
                  <li>
                    <Link to="/patient/search-doctor">Search for Doctors</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/patient/booking">Booking</Link>
                  </li>
                  <li>
                    <Link to="/patient/dashboard">Patient Dashboard</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-3">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Doctors</h2>
                <ul>
                  <li>
                    <Link to="/doctor/appointments">Appointments</Link>
                  </li>
                  <li>
                    <Link to="/doctor/chat-doctor">Chat</Link>
                  </li>
                  <li>
                    <Link to="/doctor/appointments">Login</Link>
                  </li>
                  <li>
                    <Link to="/doctor/doctor-register">Register</Link>
                  </li>
                  <li>
                    <Link to="/doctor/doctor-dashboard">Doctor Dashboard</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-fluid">
          <div className="download-app">
            <ul>
              <li>
                <p>Download Optometrycare App On : </p>
              </li>
              <li>
                <a href="#0">
                  <img src={playstore} alt="Play Store" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <img src={appstore} alt="App Store" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
