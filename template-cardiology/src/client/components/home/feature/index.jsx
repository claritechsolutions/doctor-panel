import React, { Component } from 'react';
import { IMG01, IMG02, IMG03, IMG04 } from './img.jsx';

class Feature extends Component{
    render(){
       
        return(
            <section className="feature-list">	
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="feature-list-box">
                <div className="number-col text-right"><h5>01</h5></div>
                <div className="feature-icon">
                  <img src={IMG01} alt="" />
                </div>
                <h4>Personalized <br />Healthcare</h4>
                <div className="plus-icon text-right"><i className="fas fa-plus-circle" /></div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="feature-list-box">
                <div className="number-col text-right"><h5>02</h5></div>
                <div className="feature-icon">
                  <img src={IMG02} alt="" />
                </div>
                <h4>Professional <br />Team</h4>
                <div className="plus-icon text-right"><i className="fas fa-plus-circle" /></div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="feature-list-box">
                <div className="number-col text-right"><h5>03</h5></div>
                <div className="feature-icon">
                  <img src={IMG03} alt="" />
                </div>
                <h4>Regularly <br />checkup</h4>
                <div className="plus-icon text-right"><i className="fas fa-plus-circle" /></div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="feature-list-box">
                <div className="number-col text-right"><h5>04</h5></div>
                <div className="feature-icon">
                  <img src={IMG04} alt="" />
                </div>
                <h4>Latest <br />Technology</h4>
                <div className="plus-icon text-right"><i className="fas fa-plus-circle" /></div>
              </div>
            </div>
          </div>
        </div>			
      </section>
        );
    }
}

export default Feature;