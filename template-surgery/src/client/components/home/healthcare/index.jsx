import React, { Component } from "react";
import healthCare from "../../../assets/images/health-care-icon.png";

class HealthCare extends Component {
  render() {
    return (
        <section className="health-care">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mob-disp">
                    <div className="d-flex justify-content-between align-items-center">
                        <img src={healthCare} alt="Health Care"/>
                        <div className="health-care-text">
                            <h3>Health Care Center</h3>
                            <p>if you have any Emerangcy by health problem contact this No. 12346548897 or contact form</p>
                        </div>
                    </div>					
                    <a href="#" className="btn btn-primary">Contact Us</a>
                </div>					
            </div>
        </section>
    );
  }
}
export default HealthCare;
