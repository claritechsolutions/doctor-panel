import React, { Component } from "react";
import testimonial from "../../../assets/images/testimonial-img.png";

class Testimonial extends Component {
  render() {
    return (
        <section class="our-customer-says">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img src={testimonial} class="img-fluid" alt="Testimonial"/>
                </div>
                <div class="col-md-6">
                    <div>
                        <h2 class="section-title">What Our Customers Say</h2>
                    </div>
                    <p class="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
                    <h5>Lesley Turner <span>- Timber Oak Drive</span></h5>
                </div>
            </div>
        </div>
    </section>
    );
  }
}
export default Testimonial;
