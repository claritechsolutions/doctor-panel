import React, { Component } from "react";
import feature1 from "../../../assets/images/ser-img1.jpg";
import feature2 from "../../../assets/images/ser-img2.jpg";
import feature3 from "../../../assets/images/ser-img3.jpg";
import feature4 from "../../../assets/images/ser-img4.jpg";
import feature5 from "../../../assets/images/ser-img5.jpg";
import feature6 from "../../../assets/images/ser-img6.jpg";

class Range extends Component {
  render() {
    return (
        <section className="section service-section">
        <div className="container">
            <div className="section-header">
                <h6>Wide Range of Services</h6>
                <h2>Most Effective Treatment</h2>
            </div>
            <div className="row service-grid">
                <div className="col-md-6 col-lg-4 col-sm-12">
                
                  
                    <div className="service-blog">
                        <div className="service-image">
                            <img className="img-fluid" src={feature1} alt="Post Image" />
                            <div className="service-content text-center">
                                <h3 className="service-title mb-0">Prenatal/Newborn</h3>
                            </div>
                        </div>								
                    </div>
                 
                    
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                
                  
                    <div className="service-blog">
                        <div className="service-image">
                            <img className="img-fluid" src={feature2} alt="Post Image" />
                        </div>
                        <div className="service-content text-center">
                            <h3 className="service-title mb-0">Vaccinations/Immunizations</h3>
                        </div>
                    </div>
                 
                    
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                
                  
                    <div className="service-blog">
                        <div className="service-image">
                            <img className="img-fluid" src={feature3} alt="Post Image" />
                        </div>
                        <div className="service-content text-center">
                            <h3 className="service-title mb-0">Nutrition Services</h3>
                        </div>
                    </div>
                 
                    
                </div>						
                <div className="col-md-6 col-lg-4 col-sm-12">
                
                  
                    <div className="service-blog">
                        <div className="service-image">
                            <img className="img-fluid" src={feature4} alt="Post Image" />
                        </div>
                        <div className="service-content text-center">
                            <h3 className="service-title mb-0">Development Delay</h3>
                        </div>
                    </div>
                 
                    
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                
                  
                    <div className="service-blog">
                        <div className="service-image">
                            <img className="img-fluid" src={feature5} alt="Post Image" />
                        </div>
                        <div className="service-content text-center">
                            <h3 className="service-title mb-0">Allergy Testing</h3>
                        </div>
                    </div>
                 
                    
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                
                  
                    <div className="service-blog">
                        <div className="service-image">
                            <img className="img-fluid" src={feature6} alt="Post Image" />
                        </div>
                        <div className="service-content text-center">
                            <h3 className="service-title mb-0">Weight Loss</h3>
                        </div>
                    </div>
                 
                    
                </div>
            </div>
        </div>
    </section>
    );
  }
}
export default Range;
