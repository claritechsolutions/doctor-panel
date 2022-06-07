import React, { Component } from "react";
import Banner from "../home/home";
import Benefits from "../home/benefits";
import Solution from "../home/solution";
import Team from "../home/team";
import CountInfo from "../home/count";
import Events from "../home/events";
import Testimonial from "../home/testimonial";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="main-wrapper">
          {/* <Testimonials /> */}
          <Banner />
          <Benefits />
          <Solution />
          <Team />
          <Testimonial />
          <CountInfo />
            <Events />
        </div>
      </div>
    );
  }
}
export default Home;
