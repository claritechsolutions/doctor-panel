import React, { Component } from "react";
import our_benefit from "../../../assets/images/our-benefits.png";
import speak from "../../../assets/images/speak-expert.png";

class Benefits extends Component {
  render() {
   
    return (
    <>
        <section className="our-benefits">
        <div className="row m-0">
            <div className="col-md-12 col-lg-6 benefits-text">
                <h3 className="top-title">Our Benefits</h3>
                <h2 className="section-title">Choose Our Physcatrist Treatment for Your Solutions</h2>
                <p className="mb-4">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <h4>BEST PROCEDURES</h4>
                        <p className="para-text mt-3">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <h4>ANALYZING TOGETHER</h4>
                        <p className="para-text mt-3">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <h4>UNDERSTANDING YOU</h4>
                        <p className="para-text mt-3">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <h4>LIGHT AT THE END</h4>
                        <p className="para-text mt-3">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-lg-6 p-0">
                <div className="bene-img">
                    <img src={our_benefit} alt="Our Benefits" className="img-fluid" />
                </div>
            </div>
        </div>
    </section>
    <section className="speak-expert">
    <div className="row m-0">
        <div className="col-md-12 col-lg-6 p-0">
            <div className="speak-expert-img">
                <img src={speak} alt="Speak to Expert" className="img-fluid" />
            </div>
        </div>
        <div className="col-md-12 col-lg-6 speak-expert-text">
            <h2 className="section-title">Speak to an expert now</h2>
            <p className="mt-2">Your first consultation is on us. We understand the importance of taking the first step.</p>

            <p className="mt-2">That’s why your first consultation with us is FREE.</p>
            <div>
                <a href="#" className="btn btn-secondary mt-3">Contact Us</a>
            </div>						
        </div>
    </div>
</section>
 </>
    );
  }
}
export default Benefits;
