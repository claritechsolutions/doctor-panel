import React, { Component } from "react";
import profile from "../../../assets/images/our-team-01.jpg";
import Slider from "react-slick";
import testi1 from "../../../assets/images/testimonial/testi-01.jpg";
import testi2 from "../../../assets/images/testimonial/testi-02.jpg";
import testi3 from "../../../assets/images/testimonial/testi-03.jpg";

class Testimonial extends Component {
  
  render() {
    var settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
  
    return (
      <section className="testimonial">
        <div className="container">
          <h3 className="top-title text-center">Testimonials</h3>
          <h2 className="section-title text-center">
            WHat PEOPLE SAY ABOUT US
          </h2>
          <p className="text-center">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took
          </p>

        
     
          <Slider {...settings}>
             
               <>
                  <div className="user-details">
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src={testi1}
                        alt="User Pic"
                      />
                      <h4 className="patient-name">Bruce Matis</h4>
                    </div>
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <div className="card-body">
                    <p>
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem{" "}
                    </p>
                  </div>
             </>
    
      <>
                  <div className="user-details">
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src={testi2}
                        alt="User Pic"
                      />
                      <h4 className="patient-name">Bruce Matis</h4>
                    </div>
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <div className="card-body">
                    <p>
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem{" "}
                    </p>
                  </div>
                </>
  
               <>
                  <div className="user-details">
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src={testi3}
                        alt="User Pic"
                      />
                      <h4 className="patient-name">Bruce Matis</h4>
                    </div>
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <div className="card-body">
                    <p>
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem{" "}
                    </p>
                  </div>
                </>
         <>
                  <div className="user-details">
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src={testi1}
                        alt="User Pic"
                      />
                      <h4 className="patient-name">Bruce Matis</h4>
                    </div>
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <div className="card-body">
                    <p>
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem{" "}
                    </p>
                  </div>
                </>
 
              </Slider>
        
        </div>
      </section>
    );
  }
}
export default Testimonial;
