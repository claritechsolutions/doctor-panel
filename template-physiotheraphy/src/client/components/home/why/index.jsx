import React from "react";
import images1 from "../../../assets/images/physio1.jpg";
import images2 from "../../../assets/images/physio2.jpg";
import images3 from "../../../assets/images/physio3.jpg";
import images4 from "../../../assets/images/physio4.jpg";
import images5 from "../../../assets/images/physio.jpg";

const WhyDoccure = () => {

  return (
	<section className="physio-section">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-12 col-lg-6">
						
							<div className="section-header">
								<h2>Why  <span className="text-red">Doccure-Physio?</span></h2>
								<p className="sub-title">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
							</div>
	

							<div className="row physio-content">
								<div className="col-md-6">
									<img src={images1} alt="" className="physio-img" />
									<h4>Experienced Therapist</h4>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, quae ab illo.</p>
								</div>
								<div className="col-md-6">
									<img src={images2} alt="" className="physio-img" />
									<h4>Personalised Treatment</h4>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, quae ab illo.</p>
								</div>
								<div className="col-md-6">
									<img src={images3} alt="" className="physio-img" />
									<h4>Trained Therapists</h4>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, quae ab illo.</p>
								</div>
								<div className="col-md-6">
									<img src={images4} alt="" className="physio-img" />
									<h4>Fully Equipped Clinic</h4>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, quae ab illo.</p>
								</div>
							</div>

						</div>
						<div className="col-12 col-md-12 col-lg-6 text-right">
							<div className="physio-img">
								<img src={images5} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
  );
};

export default WhyDoccure;
