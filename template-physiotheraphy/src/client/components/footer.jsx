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
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="footer-logo">
                <Link to="/">Doccure-Physio</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="footer-widget footer-about">
                <div className="footer-about-content">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium dolo remque laudant Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem acc
                    usantium dolo remque laudant, Sed ut perspiciatis unde omnis
                    iste natus error sit dolo remque laudant Sed ut unde omnis
                    iste natus error sit.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="search-holder">
                <input type="text" name="search" placeholder="Email Id" />
                <button className="btn btn-sub">Subscribe</button>
              </div>

              <div className="social-icon media-btn mt-3">
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-facebook-f"></i>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-twitter"></i>{" "}
                    </a>
                  </li>
                </ul>
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
              <div className="col-md-6 col-lg-6">
                <div className="copyright-menu">
                  <ul className="policy-menu">
                    <li>
                      <Link to="/pages/terms">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to="/pages/privacy-policy">Policy</Link>
                    </li>
                  </ul>
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
