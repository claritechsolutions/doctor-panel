import React, { Component } from "react";

class Contactus extends Component {
  render() {
    return (
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="map-view">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26373919.386353854!2d-113.76666163476126!3d36.203706779654745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1606988919902!5m2!1sen!2sin"></iframe>
              </div>
            </div>
            <div className="col-md-5">
              <h2 className="section-title">Let's Contact Us</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
              <div className="loc-details">
                <ul>
                  <li>
                    <i className="fas fa-phone-alt"></i>
                    <span>(810) 658-1649</span>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>300 S Main St #APT 208, Davison, MI, 48423</span>
                  </li>
                </ul>
              </div>

              <h2 className="section-title mt-4">Working Hours</h2>
              <div className="loc-details">
                <ul className="mb-0">
                  <li className="d-flex justify-content-between">
                    <span>Monday</span>
                    <span>09:00 am to 05:00 pm</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Tuesday</span>
                    <span>09:00 am to 05:00 pm</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Wednesday</span>
                    <span>09:00 am to 05:00 pm</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Thursday</span>
                    <span>09:00 am to 05:00 pm</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Friday</span>
                    <span>09:00 am to 05:00 pm</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Saturday</span>
                    <span>09:00 am to 05:00 pm</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contactus;
