import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/footer-logo.png";
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">
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
                        <a href="#0">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i className="fab fa-twitter"></i>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i className="fab fa-dribbble"></i>{" "}
                        </a>
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

            <div className="col-lg-3 col-md-6">
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
                    <Link to="/login">Login</Link>
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

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Subscribe for Updates</h2>
                <p>Don’t miss doccure latest news and events</p>
                <form>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        Subcribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-fluid">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="copyright-text">
                  <p className="mb-0">
                    &copy; 2020 Doccure. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
