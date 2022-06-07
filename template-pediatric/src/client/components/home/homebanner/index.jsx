import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeBanner extends Component {
  render() {
    return (
      <section className="section-search">
        <div className="container">
          <div className="banner-wrapper">
            <div className="banner-header">
              <p>We specialize in Pediatric Care</p>
              <h1>A SAFE CARE FOR YOUR CHILDREN’s HEALTH</h1>
              <p className="small-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna Quis
                ipsumpsum.
              </p>
              <Link to="/patient/search-doctor" className="btn-pink">
                Make Appointment <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default HomeBanner;
