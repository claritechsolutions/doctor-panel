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
    <div className="container">
      <div className="footer-top">
        <img src={logo} alt="Logo" className="img-fluid" />

        <div className="social-icons">
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Your Email" />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </div>

        <ul className="footer-nav">
          <li>
            <Link to="/patient/search-doctor">Doctors</Link>
          </li>
          <li>
            <Link to="/doctor/my-patients">Patients</Link>
          </li>
          <li>
            <Link to="/blog/blog-list">Blogs</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/pages/terms">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/pages/privacy-policy">Privacy Policy</Link>
          </li>							
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© 2020 Doccure | All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
