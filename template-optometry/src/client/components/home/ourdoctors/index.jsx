import React, { Component } from "react";
import doctor1 from "../../../assets/images/doctors/doctor-011.jpg";
import doctor2 from "../../../assets/images/doctors/doctor-012.jpg";
import doctor3 from "../../../assets/images/doctors/doctor-013.jpg";
import { Link } from 'react-router-dom';
import Slider from "react-slick";

class OurDoctor extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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
    return (
      <section className="section our-doctors">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Our Doctors</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab.
            </p>
          </div>
          <div className="doctor-slider slider">
            <Slider {...settings}>
              <div className="doc-profile-widgets">
                <div className="doc-image-show">
                  <img src={doctor1} className="img-fluid" alt=".." />
                </div>
                <div className="card">
                  <div className="pro-content">
                    <h3 className="title">
                      <Link to="/patient/doctor-profile">Gloria Smith</Link>
                    </h3>
                    <p className="speciality">B.Sc. Optometry</p>
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="far fa-star filled"></i>
                      <span className="d-inline-block average-rating">
                        (17)
                      </span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt"></i> Florida, USA
                      </li>
                      <li>
                        <i className="fas fa-calendar-check"></i> Available on
                        Fri, 22 Mar
                      </li>
                      <li>
                        <i className="fas fa-wallet"></i> $300 - $1000
                      </li>
                    </ul>
                  </div>
                  <div className="card-btn">
                    <a href="#0" className="btn btn-view">
                      View Profile
                    </a>
                    <a href="#0" className="btn btn-book-now">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="doc-profile-widgets">
                <div className="doc-image-show">
                  <img src={doctor2} className="img-fluid" alt=".." />
                </div>
                <div className="card">
                  <div className="pro-content">
                    <h3 className="title">
                      <Link to="/patient/doctor-profile">Randy Johnson</Link>
                    </h3>
                    <p className="speciality">B.Sc. Optometry</p>
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="far fa-star filled"></i>
                      <span className="d-inline-block average-rating">
                        (17)
                      </span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt"></i> Florida, USA
                      </li>
                      <li>
                        <i className="fas fa-calendar-check"></i> Available on
                        Fri, 22 Mar
                      </li>
                      <li>
                        <i className="fas fa-wallet"></i> $300 - $1000
                      </li>
                    </ul>
                  </div>
                  <div className="card-btn">
                    <a href="#0" className="btn btn-view">
                      View Profile
                    </a>
                    <a href="#0" className="btn btn-book-now">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="doc-profile-widgets">
                <div className="doc-image-show">
                  <img src={doctor3} className="img-fluid" alt=".." />
                </div>
                <div className="card">
                  <div className="pro-content">
                    <h3 className="title">
                      <Link to="/patient/doctor-profile">Bridgette</Link>
                    </h3>
                    <p className="speciality">B.Sc. Optometry</p>
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="far fa-star filled"></i>
                      <span className="d-inline-block average-rating">
                        (17)
                      </span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt"></i> Florida, USA
                      </li>
                      <li>
                        <i className="fas fa-calendar-check"></i> Available on
                        Fri, 22 Mar
                      </li>
                      <li>
                        <i className="fas fa-wallet"></i> $300 - $1000
                      </li>
                    </ul>
                  </div>
                  <div className="card-btn">
                    <a href="#0" className="btn btn-view">
                      View Profile
                    </a>
                    <a href="#0" className="btn btn-book-now">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="doc-profile-widgets">
                <div className="doc-image-show">
                  <img src={doctor1} className="img-fluid" alt=".." />
                </div>
                <div className="card">
                  <div className="pro-content">
                    <h3 className="title">
                      <Link to="/patient/doctor-profile">Bridgette</Link>
                    </h3>
                    <p className="speciality">B.Sc. Optometry</p>
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="far fa-star filled"></i>
                      <span className="d-inline-block average-rating">
                        (17)
                      </span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt"></i> Florida, USA
                      </li>
                      <li>
                        <i className="fas fa-calendar-check"></i> Available on
                        Fri, 22 Mar
                      </li>
                      <li>
                        <i className="fas fa-wallet"></i> $300 - $1000
                      </li>
                    </ul>
                  </div>
                  <div className="card-btn">
                    <a href="#0" className="btn btn-view">
                      View Profile
                    </a>
                    <a href="#0" className="btn btn-book-now">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="doc-profile-widgets">
                <div className="doc-image-show">
                  <img src={doctor2} className="img-fluid" alt=".." />
                </div>
                <div className="card">
                  <div className="pro-content">
                    <h3 className="title">
                      <Link to="/patient/doctor-profile">Bridgette</Link>
                    </h3>
                    <p className="speciality">B.Sc. Optometry</p>
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="far fa-star filled"></i>
                      <span className="d-inline-block average-rating">
                        (17)
                      </span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt"></i> Florida, USA
                      </li>
                      <li>
                        <i className="fas fa-calendar-check"></i> Available on
                        Fri, 22 Mar
                      </li>
                      <li>
                        <i className="fas fa-wallet"></i> $300 - $1000
                      </li>
                    </ul>
                  </div>
                  <div className="card-btn">
                    <a href="#0" className="btn btn-view">
                      View Profile
                    </a>
                    <a href="#0" className="btn btn-book-now">
                      Book Now
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
export default OurDoctor;
