import React, { Component } from "react";
import aboutus from "../../../assets/images/about-us.png";
import abouticon from "../../../assets/images/about-icon.png"

class Aboutus extends Component {
  render() {
    return (
        <section className="about-us">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <h2 className="section-title">About Us</h2>
                        <h3 className="mt-3">30+ years of Experience</h3>
                        <p className="blue-text">We at Doccure every case completely centered around causing
                            your to conquered any specialist method, with incredible responsibility and simple recuperation.</p>
                    </div>							
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <a className="btn btn-primary mt-4">Know More <i className="fas fa-arrow-circle-right ml-2"></i></a>
                </div>
                <div className="col-md-6">
                    <img src={aboutus} alt="About Us" className="img-fluid" />
                    <div className="media">
                        <img src={abouticon} className="align-self-center mr-3" alt="..." />
                        <div className="media-body">
                          <h5 className="mt-0">Free 15 Min Consultation</h5>
                          <p>Use the form to book your FREE 15 min telephone consultation.</p>
                          <a href="#">Know More <i className="fas fa-arrow-circle-right ml-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>					
        </div>
    </section>
    );
  }
}
export default Aboutus;
