import React, { Component } from "react";
import { Link } from "react-router-dom";

class Appointment extends Component {
  render() {
    return (
        <section className="section app-form">
        <div className="container">
            <div className="section-header">
                <h6>Make an appointment</h6>
                <h2>Get the right Pediatician book your doctor</h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-6">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <select className="form-control">
                            <option>Select Service</option>
                            <option>Allergy Testing</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Time & Date" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Phone Number" />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <Link to="/patient/search-doctor" className="btn-pink">Make Appointment <i className="fas fa-arrow-right"></i></Link>
            </div>					
        </div>   
    </section>	 
    );
  }
}
export default Appointment;
