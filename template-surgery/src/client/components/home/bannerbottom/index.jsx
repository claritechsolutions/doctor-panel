import React, { Component } from "react";
import feature1 from "../../../assets/images/emergency-case.png";
import feature2 from "../../../assets/images/qualified-doctors.png";
import feature3 from "../../../assets/images/services.png";

class BannerBottom extends Component {
  render() {
    return (
        <div className="banner-bottom">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">								
                        <div>
                            <img src={feature1} alt="Emergency Care" />
                        </div>
                        <div className="care-text">
                            <h2>Emergency Care</h2>
                            <p>Lorem ipsum dolor sit amet sectetur adipisicing elit.</p>
                        </div>								
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div>
                            <img src={feature2} alt="Qualified Doctors" />
                        </div>
                        <div className="care-text">
                            <h2>Qualified Doctors</h2>
                            <p>Lorem ipsum dolor sit amet sectetur adipisicing elit.</p>
                        </div>																
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div>
                            <img src={feature3} alt="Services" />
                        </div>
                        <div className="care-text">
                            <h2>24/7 Hour Service</h2>
                            <p>Lorem ipsum dolor sit amet sectetur adipisicing elit.</p>
                        </div>																
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
export default BannerBottom;
