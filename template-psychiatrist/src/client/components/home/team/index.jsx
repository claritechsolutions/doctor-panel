import React, { Component } from "react";
import team01 from "../../../assets/images/our-team-01.jpg";
import team02 from "../../../assets/images/our-team-02.jpg";
import team03 from "../../../assets/images/our-team-03.jpg";
import team04 from "../../../assets/images/our-team-01.jpg";
import {Link} from "react-router-dom";

class Team extends Component {
  render() {
   
    return (
        <section className="our-team">
        <div className="container">
            <h3 className="top-title">Qualified Professional</h3>
            <h2 className="section-title">Our Team</h2>

            <div className="row mt-5">
                <div className="col-sm-6 col-md-3">
                    <div className="card">
                        <img src={team01} className="card-img-top" alt="Our Team" />
                        <div className="card-body">
                          <Link className="card-title" to="/patient/doctor-profile">John Wolff</Link>
                          <p className="card-text">Chief Psychiatrist</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card">
                        <img src={team02} className="card-img-top" alt="Our Team" />
                        <div className="card-body">
                          <Link className="card-title" to="/patient/doctor-profile">Gordon Johnson</Link>
                          <p className="card-text">Chief Psychiatrist</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card">
                        <img src={team03} className="card-img-top" alt="Our Team" />
                        <div className="card-body">
                          <Link className="card-title" to="/patient/doctor-profile">Lisa Clark</Link>
                          <p className="card-text">Chief Psychiatrist</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card">
                        <img src={team04} className="card-img-top" alt="Our Team" /> 
                        <div className="card-body">
                          <Link className="card-title" to="/patient/doctor-profile">John Wolff</Link>
                          <p className="card-text">Chief Psychiatrist</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
    );
  }
}
export default Team;
