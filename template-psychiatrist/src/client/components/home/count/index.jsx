import React, { Component } from "react";


class CountInfo extends Component {
  render() {
   
    return (
    
        <div className="count-info">
        <div className="container">
            <div className="row">
                <div className="col-md-3 mb-3">
                    <h2 className="white-text">560+</h2>
                    <h6 className="white-text mb-0">Satisfied Patients</h6>
                </div>						
                <div className="col-md-3 mb-3">
                    <h2 className="white-text">17+</h2>
                    <h6 className="white-text mb-0">Professional Doctors</h6>
                </div>
                <div className="col-md-3 mb-3">
                    <h2 className="white-text">100%</h2>
                    <h6 className="white-text mb-0">Person's Care</h6>
                </div>
                <div className="col-md-3 mb-3">
                    <h2 className="white-text">10</h2>
                    <h6 className="white-text mb-0">Years Experience</h6>
                </div>
            </div>
        </div>
    </div>
 
    );
  }
}
export default CountInfo;
