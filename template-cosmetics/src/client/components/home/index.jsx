import React, { Component } from 'react';
import { Doctor1,Doctor2,Doctor3,Doctor4,Specialities01,Specialities02,
    Specialities03,Specialities04 } from "./img";
import config from 'config';
import {Link} from "react-router-dom";

class Home extends Component{
    render(){
        return(            
        <div className="main-wrapper">
             {/* Home Banner */}
        <section className="section section-search">
          <div className="container">
            <div className="banner-wrapper">
              <div className="banner-header">
                <h1>Search <span>Cosmetic Surgeon</span> &amp;<br /> Make an Appointment</h1>
              </div>
              {/* Search */}
              <div className="search-box">
                <form action={`${config.publicPath}/patient/search-doctor`}>
                  <div className="form-group search-location">
                    <input type="text" className="form-control" placeholder="Location" />
                  </div>
                  <div className="form-group search-info">
                    <input type="text" className="form-control" placeholder="Search Doctors" />
                  </div>
                  <button type="submit" className="btn btn-primary search-btn"><span>Search</span></button>
                </form>
              </div>
              {/* /Search */}
            </div>
          </div>
        </section>
        {/* /Home Banner */}	
        {/* Specialities */}
        <section className="specialities">
          <div className="container">
            <div className="section-title text-center">
              <h2>We are specialists in</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="specialities-col">
                  <div className="card">
                    <a href="#" className="specialities-img">
                      <img src={Specialities01} alt="" />
                    </a>
                    <div className="card-body">
                      <div className="specialities-content">
                        <a href="#"><h5>Hardware Cosmetology</h5></a>
                        <p>Lorem ipsum dolor sit dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
                        <a href="#" className="btn">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="specialities-col">
                  <div className="card">
                    <a href="#" className="specialities-img">
                      <img src={Specialities02} alt="" />
                    </a>
                    <div className="card-body">
                      <div className="specialities-content">
                        <a href="#"><h5>Aesthetic Cosmetology</h5></a>
                        <p>Lorem ipsum dolor sit dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
                        <a href="#" className="btn">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="specialities-col">
                  <div className="card">
                    <a href="#" className="specialities-img">
                      <img src={Specialities03} alt="" />
                    </a>
                    <div className="card-body">
                      <div className="specialities-content">
                        <a href="#"><h5>Injection Cosmetology</h5></a>
                        <p>Lorem ipsum dolor sit dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
                        <a href="#" className="btn">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="specialities-col">
                  <div className="card">
                    <a href="#" className="specialities-img">
                      <img src={Specialities04} alt="" />
                    </a>
                    <div className="card-body">
                      <div className="specialities-content">
                        <a href="#"><h5>Laser Cosmetology</h5></a>
                        <p>Lorem ipsum dolor sit dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
                        <a href="#" className="btn">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Specialities */}	
        {/* Our Service */}
        <section className="our-service">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-5">
                <div className="left">
                  <h2>our services range</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                  <a href="#" className="btn">View All</a>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="right">
                  <div className="price-box">
                    <ul>
                      <li className="d-flex align-items-center">
                        <div className="left-col">
                          <h5>Makeup &amp; Cosmetics</h5>
                          <p>Lorem ipsum dolor sit dolor amet, consectetur adipiscing elit eiusmod tempor incididunt ut. labore et dolore magna. </p>
                        </div>
                        <div className="right-col">
                          <h2>$35.00</h2>
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="left-col">
                          <h5>perfumes</h5>
                          <p>Lorem ipsum dolor sit dolor amet, consectetur adipiscing elit eiusmod tempor incididunt ut. labore et dolore magna. </p>
                        </div>
                        <div className="right-col">
                          <h2>$42.00</h2>
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="left-col">
                          <h5>Skincare</h5>
                          <p>Lorem ipsum dolor sit dolor amet, consectetur adipiscing elit eiusmod tempor incididunt ut. labore et dolore magna. </p>
                        </div>
                        <div className="right-col">
                          <h2>$18.00</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Our Service */}
        {/* Cosmetics Specialist */}
        <section className="cosmetics-specialist">
          <div className="container">
            <div className="section-title text-center">
              <h2>choose your cosmetics specialist</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="specialities-col">
                  <div className="card">
                    <Link to="/patient/doctor-profile" className="specialities-img">
                      <img src={Doctor1} alt="" />
                    </Link>
                    <div className="card-body">
                      <div className="specialities-content">
                        <Link to="/patient/doctor-profile"><h5>Eric Buckles</h5></Link>
                        <p>MBBS, MDS - Cosmetics Surgeon</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(35)</span>
                        </div>
                        <Link to="/patient/doctor-profile" className="booknow-btn">Book now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="specialities-col">
                  <div className="card">
                    <Link to="/patient/doctor-profile" className="specialities-img">
                        <img src={Doctor2} alt="" />
                    </Link>
                    <div className="card-body">
                      <div className="specialities-content">
                        <Link to="/patient/doctor-profile"><h5>Lane Seay</h5></Link>
                        <p>MBBS, MDS - Cosmetics Surgeon</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(35)</span>
                        </div>
                        <Link to="/patient/doctor-profile" className="booknow-btn">Book now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="specialities-col">
                  <div className="card">
                    <Link to="/patient/doctor-profile" className="specialities-img">
                      <img src={Doctor3} alt="" />
                    </Link>
                    <div className="card-body">
                      <div className="specialities-content">
                        <Link to="/patient/doctor-profile"><h5>Matthew Dodd</h5></Link>
                        <p>MBBS, MDS - Cosmetics Surgeon</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(35)</span>
                        </div>
                        <Link to="/patient/doctor-profile" className="booknow-btn">Book now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="specialities-col">
                  <div className="card">
                    <Link to="/patient/doctor-profile" className="specialities-img">
                      <img src={Doctor4} alt="" />
                    </Link>
                    <div className="card-body">
                      <div className="specialities-content">
                        <Link to="/patient/doctor-profile"><h5>Carol Alba</h5></Link>
                        <p>MBBS, MDS - Cosmetics Surgeon</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(35)</span>
                        </div>
                        <Link to="/patient/doctor-profile" className="booknow-btn">Book now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Cosmetics Specialist */}
        {/* News Letter */}
        <section className="news-letter">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="news-letter-col">
                  <div className="section-title pb-2">
                    <h2>Grab Our Newsletter</h2>
                    <p>To receive latest offers and discounts from the shop.</p>
                  </div>
                  <form>
                    <div className="d-flex align-items-center">
                      <div>
                        <input type="email" name="email" placeholder="Enter Your Email Address" />
                      </div>
                      <div>
                        <input type="submit" defaultValue="subscribe" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /News Letter */}
        {/* Address */}
        <section className="address-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <address className="m-0 d-flex align-items-center">
                  <span className="d-flex align-items-center justify-content-center map-icon">
                    <i className="fas fa-map-marker-alt" />
                  </span>
                  <span>
                    3556 Beech Street, San Francisco,<br />California, CA 94108
                  </span>
                </address>
              </div>
              <div className="col-12 col-md-6">
                <div className="social-links">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
                    <li><a href="#"><i className="fab fa-pinterest-p" /></a></li>
                    <li><a href="#"><i className="fab fa-youtube" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Address */}
        </div>
        );
    }
}
export default Home;