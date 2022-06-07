import React from "react";
import doctor1 from "../../../assets/images/doctors/doctor-01.jpg";
import doctor2 from "../../../assets/images/doctors/doctor-02.jpg";
import doctor3 from "../../../assets/images/doctors/doctor-03.jpg";
import {Link} from "react-router-dom";

const OurDoctors = () => {
  return (
    <section className="section section-profile">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2>
            Our <span className="text-red">Doctors</span>
          </h2>
          <p className="sub-title">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae.
          </p>
        </div>

        <div className="row doctors-wrapper justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="profile-widget">
              <div className="doc-img">
                <Link to="/patient/doctor-profile">
                  <img className="img-fluid" alt="User Image" src={doctor1} />
                </Link>
              </div>
              <div className="pro-content">
                <h3 className="title">
                  <Link to="/patient/doctor-profile">Karyen New</Link>
                </h3>
                <p className="speciality">BPT - Senior Accupuncture</p>
                <div className="rating">
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="far fa-star"></i>
                  <span className="d-inline-block average-rating">(23)</span>
                </div>
                <ul className="available-info">
                  <li>
                    <i className="fas fa-map-marker-alt"></i> Newyork, USA
                  </li>
                  <li>
                    <i className="fas fa-calendar-check"></i> Available on Mon, 22
                    Sep
                  </li>
                  <li>
                    <i className="fas fa-wallet"></i> $150 - $220
                  </li>
                </ul>
                <div className="row row-sm">
                  <div className="col-6">
                    <Link to="/patient/doctor-profile" className="btn view-btn">
                      View Profile
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link to="/patient/booking" className="btn book-btn">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="profile-widget">
              <div className="doc-img">
                <Link to="/patient/doctor-profile">
                  <img className="img-fluid" alt="User Image" src={doctor2} />
                </Link>
              </div>
              <div className="pro-content">
                <h3 className="title">
                  <Link to="/patient/doctor-profile">Farrer Hackney</Link>
                </h3>
                <p className="speciality">BPT - Senior Accupuncture</p>
                <div className="rating">
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <span className="d-inline-block average-rating">(12)</span>
                </div>
                <ul className="available-info">
                  <li>
                    <i className="fas fa-map-marker-alt"></i> Florida, USA
                  </li>
                  <li>
                    <i className="fas fa-calendar-check"></i> Available on Mon, 22
                    Sep
                  </li>
                  <li>
                    <i className="fas fa-wallet"></i> $190 - $280
                  </li>
                </ul>
                <div className="row row-sm">
                  <div className="col-6">
                    <Link to="/patient/doctor-profile" className="btn view-btn">
                      View Profile
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link to="/patient/booking" className="btn book-btn">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="profile-widget">
              <div className="doc-img">
                <Link to="/patient/doctor-profile">
                  <img className="img-fluid" alt="User Image" src={doctor3} />
                </Link>
              </div>
              <div className="pro-content">
                <h3 className="title">
                  <Link to="/patient/doctor-profile">Sallvia Catron</Link>
                </h3>
                <p className="speciality">BPT - Senior Accupuncture</p>
                <div className="rating">
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="far fa-star"></i>
                  <span className="d-inline-block average-rating">(13)</span>
                </div>
                <ul className="available-info">
                  <li>
                    <i className="fas fa-map-marker-alt"></i> Georgia, USA
                  </li>
                  <li>
                    <i className="fas fa-calendar-check"></i> Available on Mon, 22
                    Sep
                  </li>
                  <li>
                    <i className="fas fa-wallet"></i> $120 - $320
                  </li>
                </ul>
                <div className="row row-sm">
                  <div className="col-6">
                    <Link to="/patient/doctor-profile" className="btn view-btn">
                      View Profile
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link to="/patient/booking" className="btn book-btn">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;
