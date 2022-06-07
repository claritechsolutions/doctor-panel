import React, { Component } from "react";
import HomeBanner from "./homebanner";
import Services from "./services";
import OurDoctor from "./doctor";
import WhyDoccure from "./why";
import Testimonial from "./testimonial";
import OurDoctors from "./ourdoctors";
import ContactUs from "./contactus";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="main-wrapper">
          <HomeBanner />
          <Services />
          <OurDoctor />
          <WhyDoccure /> 
          <Testimonial />
          <OurDoctors />
          <ContactUs />
        </div>
      </div>
    );
  }
}
export default Home;
