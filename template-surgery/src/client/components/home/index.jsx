import React, { Component } from "react";
import HomeBanner from "./homebanner";
import BannerBottom from "./bannerbottom";
import Aboutus from "./aboutus";
import HealthCare from "./healthcare";
import General from "./general";
import VideoSection from "./video";
import Oursurgeon from "./surgery";
import Testimonial from "./testimonial";
import Blog from "./blog";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="main-wrapper">
          <HomeBanner />
          <BannerBottom />
          <Aboutus />
          <HealthCare />
          <General />
          <VideoSection />
          <Oursurgeon />
          <Testimonial />
          <Blog />
        </div>
      </div>
    );
  }
}
export default Home;
