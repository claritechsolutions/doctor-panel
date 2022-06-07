import React, { Component } from "react";
import banner1 from "../../../assets/images/banner-img1.jpg";
import banner2 from "../../../assets/images/banner-img2.jpg";
import banner3 from "../../../assets/images/banner-img3.jpg";
import { Carousel } from "react-responsive-carousel";

class HomeBanner extends Component {
  render() {
    return (
      <section className="section section-banner">
        <div className="container">
          <div class="row carousel-inner m-0">
            <Carousel showArrows={false} autoPlay={true}>
              <div className="col-md-12 carousel-item active p-0">
                <div className="row banner-wrapper">
                  <div className="col-md-6 banner-content pl-0">
                    <h2>
                      The ultimate <span className="text-red">theraphy </span>{" "}
                      for severe <span className="text-red">pain</span>
                    </h2>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inve ntore veritatis
                      explicabo.
                    </p>
                    <a href="#" className="btn-red mb-3">
                      Make an Appointment
                    </a>
                  </div>
                  <div className="col-md-6 text-right pr-0">
                    <img
                      src={banner1}
                      className="inner-img"
                      alt="physiotheraphy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12 carousel-item active p-0">
                <div className="row banner-wrapper">
                  <div className="col-md-6 banner-content pl-0">
                    <h2>
                      The ultimate <span className="text-red">theraphy </span>{" "}
                      for severe <span className="text-red">pain</span>
                    </h2>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inve ntore veritatis
                      explicabo.
                    </p>
                    <a href="#" className="btn-red mb-3">
                      Make an Appointment
                    </a>
                  </div>
                  <div className="col-md-6 text-right pr-0">
                    <img
                      src={banner2}
                      className="inner-img"
                      alt="physiotheraphy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12 carousel-item active p-0">
                <div className="row banner-wrapper">
                  <div className="col-md-6 banner-content pl-0">
                    <h2>
                      The ultimate <span className="text-red">theraphy </span>{" "}
                      for severe <span className="text-red">pain</span>
                    </h2>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inve ntore veritatis
                      explicabo.
                    </p>
                    <a href="#" className="btn-red mb-3">
                      Make an Appointment
                    </a>
                  </div>
                  <div className="col-md-6 text-right pr-0">
                    <img
                      src={banner3}
                      className="inner-img"
                      alt="physiotheraphy"
                    />
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    );
  }
}
export default HomeBanner;
