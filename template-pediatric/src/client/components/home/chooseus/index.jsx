import React, { Component } from "react";
import { Link } from "react-router-dom";

class ChooseUs extends Component {
  render() {
    return (
        <div>
        {/* Why Choose */}
        <section className="why-section">
          <div className="left-section">
            <div className="why-content">
              <div className="section-header">
                <h2>Why Choose Us</h2>
              </div>
              <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
              <p>The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Lorem ipsum, or lipsum as it is sometimes known. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De </p>
              <div className="child-care">
                <ul className="left">
                  <li><i className="fas fa-chevron-right" /> Free Ambulance Transport</li>
                  <li><i className="fas fa-chevron-right" /> Highly Qualified Doctors</li>
                  <li><i className="fas fa-chevron-right" /> 24×7 Emergency Services</li>
                  <li><i className="fas fa-chevron-right" /> Leading Technology</li>
                  <li><i className="fas fa-chevron-right" /> Patient Centered Care</li>
                </ul>
              </div>	
            </div>							
          </div>
          <div className="right-section">
          </div>
        </section>
        {/* /Why Choose */}
        {/* Count Section */}
        <section className="section-count">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-lg-3">
                <h2>980+</h2>
                <p>Satisfied Patients</p>
              </div>
              <div className="col-md-3 col-lg-3">
                <h2>100+</h2>
                <p>Professional Doctor</p>
              </div>
              <div className="col-md-3 col-lg-3">
                <h2>100%</h2>
                <p>Quality</p>
              </div>
              <div className="col-md-3 col-lg-3">
                <h2>15+</h2>
                <p>Year Experience</p>
              </div>
            </div>
          </div>
        </section>
        {/* /Count Section */}
      </div>
    );
  }
}
export default ChooseUs;
