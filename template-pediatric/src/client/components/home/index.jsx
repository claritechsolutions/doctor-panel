import React, { Component } from "react";
import HomeBanner from "./homebanner";
import Appointment from "./appointment";
import Treatment from "./treatment";
import Range from "./range";
import ChooseUs from "./chooseus";
import Testimonial from "./testimonial";
import Blog from "./blog";
import OurDoctors from "./ourdoctors";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="main-wrapper">
          <HomeBanner />
          <Appointment />
          <Treatment />
          <Range />
          <ChooseUs />
          <OurDoctors />
          <Testimonial />
         <Blog />
        </div>
      </div>
    );
  }
}
export default Home;
