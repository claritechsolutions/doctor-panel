import React, { Component } from "react";
import surgeon1 from "../../../assets/images/our-surgeon-01.jpg";
import surgeon2 from "../../../assets/images/our-surgeon-02.jpg";
import surgeon3 from "../../../assets/images/our-surgeon-03.jpg";
import surgeon4 from "../../../assets/images/our-surgeon-04.jpg";
import Slider from "react-slick";

class Oursurgeon extends Component {
  render() {
    const settings = {
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerPadding: "10px",

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
    return (
      <section class="our-surgeon">
        <div class="container">
          <div>
            <h2 class="section-title">Our Surgeons</h2>
          </div>
          <div class="surgeon-slider slider mt-4">
            <Slider {...settings}>
              <div class="card">
                <img class="card-img-top" src={surgeon1} alt="Our Surgeon" />
                <div class="card-body">
                  <h5 class="card-title">Michelle Johnson</h5>
                  <h6>Surgeon</h6>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                  <a href="#0" class="btn btn-primary">
                    <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div>
                <div class="card">
                  <img class="card-img-top" src={surgeon2} alt="Our Surgeon" />
                  <div class="card-body">
                    <h5 class="card-title">Michelle Johnson</h5>
                    <h6>Surgeon</h6>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, onsectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                    <a href="#0" class="btn btn-primary">
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="card">
                  <img class="card-img-top" src={surgeon3} alt="Our Surgeon" />
                  <div class="card-body">
                    <h5 class="card-title">Davis John</h5>
                    <h6>Surgeon</h6>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, onsectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                    <a href="#0" class="btn btn-primary">
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="card">
                  <img class="card-img-top" src={surgeon4} alt="Our Surgeon" />
                  <div class="card-body">
                    <h5 class="card-title">Ruth Burns</h5>
                    <h6>Surgeon</h6>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, onsectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                    <a href="#0" class="btn btn-primary">
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="card">
                  <img class="card-img-top" src={surgeon2} alt="Our Surgeon" />
                  <div class="card-body">
                    <h5 class="card-title">Villareal</h5>
                    <h6>Surgeon</h6>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, onsectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                    <a href="#0" class="btn btn-primary">
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="card">
                  <img class="card-img-top" src={surgeon3} alt="Our Surgeon" />
                  <div class="card-body">
                    <h5 class="card-title">Davis John</h5>
                    <h6>Surgeon</h6>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, onsectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                    <a href="#0" class="btn btn-primary">
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
export default Oursurgeon;
