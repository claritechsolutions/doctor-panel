import React, { Component } from "react";
import { Link } from "react-router-dom";
import IMG01 from "../../../assets/images/doctors/doctor-thumb-01.jpg";
import IMG02 from "../../../assets/images/doctors/doctor-thumb-02.jpg";
import IMG05 from "../../../assets/images/doctors/doctor-thumb-05.jpg";
import IMG08 from "../../../assets/images/doctors/doctor-thumb-08.jpg";

class OurDoctors extends Component {
  render() {
    return (
        <section className="section doctor-section">
        <div className="container">
          <div className="section-header">
            <h6>Meet our Professionals</h6>
            <h2>Our Doctors <Link to="/patient/search-doctor" className="member-btn">View all members</Link> </h2>	
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-3">
              <div className="profile-card">
                <div className="profile-image">
                  <Link to="/doctor/doctor-dashboard">
                    <img src={IMG02} />
                  </Link>
                </div>
                <div className="profile-content">
                  <h3><Link to="/doctor/doctor-dashboard">Dr. Jerman Delong</Link></h3>
                  <p>Cheif Pediatrician</p>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-facebook-f" /> </a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-youtube" /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-twitter" /> </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="profile-card">
                <div className="profile-image">
                    <Link to="/doctor/doctor-dashboard">
                        <img src={IMG05} />
                    </Link>
                </div>
                <div className="profile-content">
                  <h3><Link to="/doctor/doctor-dashboard">Dr. Neel Akins</Link></h3>
                  <p>Cheif Pediatrician</p>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-facebook-f" /> </a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-youtube" /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-twitter" /> </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="profile-card">
                <div className="profile-image">
                  <Link to="/doctor/doctor-dashboard">
                    <img src={IMG08} />
                  </Link>
                </div>
                <div className="profile-content">
                  <h3><a href="doctor-dashboard.html">Dr. McKenna Slone</a></h3>
                  <p>Cheif Pediatrician</p>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-facebook-f" /> </a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-youtube" /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-twitter" /> </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="profile-card active">
                <div className="profile-image">
                  <Link to="/doctor/doctor-dashboard">
                    <img src={IMG01}  />
                  </Link>
                </div>
                <div className="profile-content">
                  <h3><a href="doctor-dashboard.html">Dr. Lydah Sutton</a></h3>
                  <p>Cheif Pediatrician</p>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-facebook-f" /> </a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-youtube" /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-twitter" /> </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default OurDoctors;
