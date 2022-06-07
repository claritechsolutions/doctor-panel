import React, {Component} from 'react';
import pet from "../../../assets/images/pet-care.png";
import medicine from "../../../assets/images/pet-medicine.png";
import grooming from "../../../assets/images/grooming.png";

class Banner extends Component{
    render(){
        return(
            <>
	<section className="section home-banner">
				<div className="container-fluid">
					<div className="row banner-wrapper">
						<div className="col-md-6"></div>
						<div className="col-md-6">
							<div className="banner-header">
								<h1>We are here to help <br />with all of your <span><br />Pet's Needs!</span></h1>
								<a className="btn btn-primary mt-4">Book Now</a>
								<a className="btn btn-outline-primary mt-4 ml-2">Contact Us</a>
							</div>
						</div>
					</div>
				</div>
			</section>

            <div className="banner-bottom">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="card">
								<div className="care-text">
									<h2>Pet Care</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								</div>
								<div>
									<img src={pet} alt="Pet Care" />
								</div>								
							</div>
						</div>
						<div className="col-md-4">
							<div className="card">
								<div className="care-text">
									<h2>Pet Medicine</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								</div>
								<div>
									<img src={medicine} alt="Pet Care" />
								</div>								
							</div>
						</div>
						<div className="col-md-4">
							<div className="card">
								<div className="care-text">
									<h2>Grooming</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								</div>
								<div>
									<img src={grooming} alt="Pet Care" />
								</div>								
							</div>
						</div>
					</div>
				</div>
			</div>
          </>  
        );
    }
}
export default Banner;