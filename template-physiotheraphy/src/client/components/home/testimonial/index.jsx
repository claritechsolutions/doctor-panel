import React from "react";
import { Carousel } from "react-responsive-carousel";

import test1 from "../../../assets/images/test-img1.jpg";
import test2 from "../../../assets/images/test-img2.jpg";
import test3 from "../../../assets/images/test-img3.jpg";

const Testimonial = () => {

  return (
    <section class="testimonial-section">
      <div class="container">
   
            <Carousel 
            showArrows={false}
            autoPlay={true}
           
           >
              <div class="col-md-12 carousel-item active p-0">
                <div class="row banner-wrapper align-items-center">
                  <div class="col-md-7 col-lg-9 banner-content">
                    <div class="section-header">
                      <h2>Our Testimonial</h2>
                      <p class="sub-title">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, sed ut perspiciatis unde omnis iste natus error
                        sit voluptatem accusantium doloremque laudantium, totam
                        totam rem aperiam.
                      </p>
                      <div class="auth-sec">
                        <h4>Mary Wiley</h4>
                        <p>Web Developer</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5 col-lg-3 test-user">
                    <img src={test1} class="inner-img" alt="physiotheraphy" />
                  </div>
                </div>
              </div>
              <div class="col-md-12 carousel-item active p-0">
                <div class="row banner-wrapper align-items-center">
                  <div class="col-md-7 col-lg-9 banner-content">
                    <div class="section-header">
                      <h2>Our Testimonial</h2>
                      <p class="sub-title">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, sed ut perspiciatis unde omnis iste natus error
                        sit voluptatem accusantium doloremque laudantium, totam
                        totam rem aperiam.
                      </p>
                      <div class="auth-sec">
                        <h4>Mary Wiley</h4>
                        <p>Web Developer</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5 col-lg-3 test-user">
                    <img src={test2} class="inner-img" alt="physiotheraphy" />
                  </div>
                </div>
              </div>
              <div class="col-md-12 carousel-item active p-0">
                <div class="row banner-wrapper align-items-center">
                  <div class="col-md-7 col-lg-9 banner-content">
                    <div class="section-header">
                      <h2>Our Testimonial</h2>
                      <p class="sub-title">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, sed ut perspiciatis unde omnis iste natus error
                        sit voluptatem accusantium doloremque laudantium, totam
                        totam rem aperiam.
                      </p>
                      <div class="auth-sec">
                        <h4>Mary Wiley</h4>
                        <p>Web Developer</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5 col-lg-3 test-user">
                    <img src={test3} class="inner-img" alt="physiotheraphy" />
                  </div>
                </div>
              </div>
            </Carousel>
     
      </div>
    </section>
  );
};

export default Testimonial;
