import React, { Component } from "react";
import Banner from "../home/banner";
import AboutUs from "../home/about";
import Services from "../home/service";
import Team from "../home/team";
import Testimonial from "../home/testimonial";
import Gallery from "../home/gallery";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="main-wrapper">
             <Banner />
            <AboutUs />
            <Services />
            <Team /> 
            <Testimonial />
            <Gallery />
        </div>
      </div>
    );
  }
}
export default Home;
