

import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import patient1 from "../../../assets/images/patients/patient1.jpg";
import patient2 from "../../../assets/images/patients/patient2.jpg";
import patient3 from "../../../assets/images/patients/patient3.jpg";
import patient4 from "../../../assets/images/patients/patient4.jpg";
import patient5 from "../../../assets/images/patients/patient5.jpg";
import patient6 from "../../../assets/images/patients/patient6.jpg";
import patient7 from "../../../assets/images/patients/patient7.jpg";

class Testimonial extends Component {
  render() {
	const settings = {
		dots:false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		centerPadding: '10px',
		arrows: true,
	 
		responsive: [
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				  
				}
			},
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				  
				}
			}
		]
	  };
    return (
		<section className="doctors-col section app-form">
		<div className="container-fluid">					
			<div className="row justify-content-center">	
				<div className="section-header text-center">
					<h6>Feedback from our patients</h6>							
					<h2>TESTIMONIALS</h2>
				</div>
			</div>
		   <div className="row">
				<div className="col-lg-12">
					<div className="doctor-slider slider">
						
					<Slider {...settings}>
						<div className="profile-widget">
							<div className="test-content">
								<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed.</p>
							</div>
							<div className="test-image d-flex align-items-center">
								<div className="test-profile">
									<Link to="/patient/doctor-profile">
										<img className="img-fluid" alt="User Image" src={patient1} />
									</Link>
								</div>
								<div className="test-users">
									<h3>Morfyn Henning</h3>
									<p className="mb-0">Profession</p>
								</div>
							</div>								
							<div className="pro-footer text-right">
								<i className="fas fa-quote-left"></i>
							</div>
						</div>
					
						<div className="profile-widget">
							<div className="test-content">
								<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed.</p>
							</div>
							<div className="test-image d-flex align-items-center">
								<div className="test-profile">
								<Link to="/patient/doctor-profile">
										<img className="img-fluid" alt="User Image" src={patient2} />
									</Link>
								</div>
								<div className="test-users">
									<h3>Paraskevi Still</h3>
									<p className="mb-0">Profession</p>
								</div>
							</div>								
							<div className="pro-footer text-right">
								<i className="fas fa-quote-left"></i>
							</div>
						</div>
					
						<div className="profile-widget">
							<div className="test-content">
								<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed.</p>
							</div>
							<div className="test-image d-flex align-items-center">
								<div className="test-profile">
								<Link to="/patient/doctor-profile">
										<img className="img-fluid" alt="User Image" src={patient3} />
									</Link>
								</div>
								<div className="test-users">
									<h3>Lorrin Morrison</h3>
									<p className="mb-0">Profession</p>
								</div>
							</div>								
							<div className="pro-footer text-right">
								<i className="fas fa-quote-left"></i>
							</div>
						</div>
					
						<div className="profile-widget">
							<div className="test-content">
								<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed.</p>
							</div>
							<div className="test-image d-flex align-items-center">
								<div className="test-profile">
									<Link to="/patient/doctor-profile">
										<img className="img-fluid" alt="User Image" src={patient4} />
									</Link>
								</div>
								<div className="test-users">
									<h3>Talib Knoll</h3>
									<p className="mb-0">Profession</p>
								</div>
							</div>								
							<div className="pro-footer text-right">
								<i className="fas fa-quote-left"></i>
							</div>
						</div>

						<div className="profile-widget">
							<div className="test-content">
								<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed.</p>
							</div>
							<div className="test-image d-flex align-items-center">
								<div className="test-profile">
									<Link to="/patient/doctor-profile">
										<img className="img-fluid" alt="User Image" src={patient5} />
									</Link>
								</div>
								<div className="test-users">
									<h3>Wandah Marquis</h3>
									<p className="mb-0">Profession</p>
								</div>
							</div>								
							<div className="pro-footer text-right">
								<i className="fas fa-quote-left"></i>
							</div>
						</div>
					
						<div className="profile-widget">
							<div className="test-content">
								<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed.</p>
							</div>
							<div className="test-image d-flex align-items-center">
								<div className="test-profile">
									<Link to="/patient/doctor-profile">
										<img className="img-fluid" alt="User Image" src={patient6} />
									</Link>
								</div>
								<div className="test-users">
									<h3>Roddie Rand</h3>
									<p className="mb-0">Profession</p>
								</div>
							</div>								
							<div className="pro-footer text-right">
								<i className="fas fa-quote-left"></i>
							</div>
						</div>
				
						<div className="profile-widget">
							<div className="test-content">
								<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed.</p>
							</div>
							<div className="test-image d-flex align-items-center">
								<div className="test-profile">
									<Link to="/patient/doctor-profile">
										<img className="img-fluid" alt="User Image" src={patient7} />
									</Link>
								</div>
								<div className="test-users">
									<h3>Lauda Maclean</h3>
									<p className="mb-0">Profession</p>
								</div>
							</div>								
							<div className="pro-footer text-right">
								<i className="fas fa-quote-left"></i>
							</div>
						</div>
				
						<div className="profile-widget">
							<div className="test-content">
								<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed.</p>
							</div>
							<div className="test-image d-flex align-items-center">
								<div className="test-profile">
									<Link to="/patient/doctor-profile">
										<img className="img-fluid" alt="User Image" src={patient1} />
									</Link>
								</div>
								<div className="test-users">
									<h3>Emerita Kerr</h3>
									<p className="mb-0">Profession</p>
								</div>
							</div>								
							<div className="pro-footer text-right">
								<i className="fas fa-quote-left"></i>
							</div>
						</div>
						</Slider>
					</div>
				</div>
		   </div>
		</div>
	</section>
    );
  }
}
export default Testimonial;
