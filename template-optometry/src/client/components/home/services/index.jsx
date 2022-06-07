import React, { Component } from "react";
import icon1 from "../../../assets/images/icon-1.png";
import icon2 from "../../../assets/images/icon-2.png";
import icon3 from "../../../assets/images/icon-3.png";
import icon4 from "../../../assets/images/icon-4.png";
import icon5 from "../../../assets/images/icon-5.png";

class Services extends Component {
  render() {
    return (
      <section className="section section-special-services">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div>
                <h2 className="section-title">Our Special Services For You</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inve ntore veritatis et quasi architecto
                  accusantium beatae vitae dicta sunt explicabo, sed ut perspic
                  iatis unde omnis iste natus error sit voluptatem accusa ntium
                  accusantium.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div>
                  <img src={icon1} alt="Service" className="img-fluid" />
                </div>
                <h3>Diagnosis and treatment</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dolo remque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div>
                  <img src={icon2} alt="Service" className="img-fluid" />
                </div>
                <h3>Eye examination</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dolo remque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div>
                  <img src={icon3} alt="Service" className="img-fluid" />
                </div>
                <h3>Laser eye correction</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dolo remque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div>
                  <img src={icon4} alt="Service" className="img-fluid" />
                </div>
                <h3>Evaluating eye coordination</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dolo remque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div>
                  <img src={icon5} alt="Service" className="img-fluid" />
                </div>
                <h3>Contact lenses</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dolo remque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Services;
