import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeBanner extends Component {
  render() {
    return (
      <section className="section home-banner">
      <div className="container-fluid">
        <div className="row banner-wrapper">
          <div className="col-md-12">
            <div className="banner-header">
              <h3>We are Expert in the Field</h3>
              <h1>YOUR RIGHT <span>SURGEON</span></h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
              <a className="btn btn-primary mt-4">Know More <i className="fas fa-arrow-circle-right ml-1"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}
export default HomeBanner;
