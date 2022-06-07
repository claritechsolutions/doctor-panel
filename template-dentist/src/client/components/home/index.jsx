import React, { Component } from "react";
import HomeBanner from "./homebanner";
import HomePoints from "./points";
import Connectus from "./connectus";
import Location from "./location";
import Aboutus from "./about";
import Blog from "./blog";
import Appointment from "./appointment";
import OurDoctors from "./ourdoctors";
import Counts from "./counts";
import Testimonial from "./testimonials";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="main-wrapper">
          <HomeBanner />
         <HomePoints />
         <Connectus />
        <Location />
        <Aboutus />
         <Testimonial />
        <Counts/>
        <OurDoctors />
        <Appointment />
        <Blog />

        </div>
      </div>
    );
  }
}
export default Home;
