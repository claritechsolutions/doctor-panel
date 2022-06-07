import React, {Component} from 'react';
import img1 from "../../../assets/images/img-1.jpg";
import img2 from "../../../assets/images/img-2.jpg";
import img3 from "../../../assets/images/img-3.jpg";
import Slider from "react-slick";

class Services extends Component{
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerPadding: "10px",
            arrows: true,
      
            responsive: [
              {
                breakpoint: 400,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                },
              },
              {
                breakpoint: 993,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                },
              },
            ],
          };
        return(
            <section className="our-service">
            <div className="container">
                <div>
                    <i className="fas fa-paw title-icon"></i>
                    <p className="title-top">What we offer</p>
                    <h2 className="section-title">Our Services</h2>
                </div>
                <div className="our-service-slider slider">
                <Slider {...settings}>
                    <div className="service-widgets">
                        <div className="white-widget">
                            <div className="card">
                                <div>
                                    <img src={img1} alt="Behaviour" className="img-fluid" />
                                </div>
                                <h3>Behaviour</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                        <div className="orange-widget">
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>

                    <div className="service-widgets">
                        <div className="white-widget">
                            <div className="card">
                                <div>
                                    <img src={img2} alt="Behaviour" className="img-fluid" />
                                </div>
                                <h3>Cardiology</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                        <div className="orange-widget">
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>

                    <div className="service-widgets">
                        <div className="white-widget">
                            <div className="card">
                                <div>
                                    <img src={img3} alt="Behaviour" className="img-fluid" />
                                </div>
                                <h3>Vaccination</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                        <div className="orange-widget">
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                    <div className="service-widgets">
                        <div className="white-widget">
                            <div className="card">
                                <div>
                                    <img src={img1} alt="Behaviour" className="img-fluid" />
                                </div>
                                <h3>Vaccination</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                        <div className="orange-widget">
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                    <div className="service-widgets">
                        <div className="white-widget">
                            <div className="card">
                                <div>
                                    <img src={img2} alt="Behaviour" className="img-fluid" />
                                </div>
                                <h3>Vaccination</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                        <div className="orange-widget">
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                    </Slider>  
                </div>
            </div>
        </section>
        );
    }
}
export default Services;