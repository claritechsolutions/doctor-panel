import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Payment1 from '../assets/images/payment1.jpg';
import Payment2 from '../assets/images/payment2.jpg';
import Payment3 from '../assets/images/payment3.jpg';
import Payment4 from '../assets/images/payment4.jpg';

const Footer = (props) => {
 	const exclusionArray = [
		'/pages/doctor-grid',
		'/pages/doctor-list',
		'/pages/video-call',
		'/pages/voice-call',
		'/pages/chat-doctor',
		'/patient/doctor-list',
		'/patient/doctor-grid'
	]
	if (exclusionArray.indexOf(props.location.pathname) >= 0) {
		return '';
	}
	return (
		 <footer className="footer">
		 {/* Footer Top */}
		 <div className="footer-top">
		   <div className="container-fluid">
			 <div className="row align-items-center">
			   <div className="col-lg-3 col-md-6">
				 {/* Footer Widget */}
				 <div className="footer-widget footer-about">
				   <div className="footer-logo">
					 <img src={logo} alt="logo" />
				   </div>
				   <div className="footer-about-content">
					 <div className="social-icon">
					   <ul>
						 <li>
						   <a href="#" target="_blank"><img src={Payment1} alt="" /></a>
						 </li>
						 <li>
						   <a href="#" target="_blank"><img src={Payment2} alt="" /></a>
						 </li>
						 <li>
						   <a href="#" target="_blank"><img src={Payment3} alt="" /></a>
						 </li>
						 <li>
						   <a href="#" target="_blank"><img src={Payment4} alt="" /></a>
						 </li>
					   </ul>
					 </div>
				   </div>
				 </div>
				 {/* /Footer Widget */}
			   </div>
			   <div className="col-lg-3 col-md-6">
				 {/* Footer Widget */}
				 <div className="footer-widget footer-menu">
				   <h2 className="footer-title">For Patients</h2>
				   <ul>
					 <li><Link to="/patient/search-doctor">Search for Doctors</Link></li>
					 <li><Link to="/login">Login</Link></li>
					 <li><Link to="/register">Register</Link></li>
					 <li><Link to="/patient/booking">Booking</Link></li>
					 <li><Link to="/patient/dashboard">Patient Dashboard</Link></li>
				   </ul>
				 </div>
				 {/* /Footer Widget */}
			   </div>
			   <div className="col-lg-3 col-md-6">
				 {/* Footer Widget */}
				 <div className="footer-widget footer-menu">
				   <h2 className="footer-title">For Doctors</h2>
				   <ul>
					 <li><Link to="/doctor/appointments">Appointments</Link></li>
					 <li><Link to="/patient/patient-chat">Chat</Link></li>
					 <li><Link to="/login">Login</Link></li>
					 <li><Link to="/doctor/doctor-register">Register</Link></li>
					 <li><Link to="/doctor/doctor-dashboard">Doctor Dashboard</Link></li>
				   </ul>
				 </div>
				 {/* /Footer Widget */}
			   </div>
			   <div className="col-lg-3 col-md-6">
				 {/* Footer Widget */}
				 <div className="footer-widget footer-menu">
				   <h2 className="footer-title">Sitemap</h2>
				   <ul>
					 <li><Link to="/blog/blog-list">Blog</Link></li>
					 <li><Link to="/patient/patient-chat">FAQs</Link></li>
					 <li><Link to="payment.html">Payment</Link></li>
					 <li><Link to="/patient/checkout">Shipment</Link></li>
					 <li><Link to="/pages/privacy-policy">Return policy</Link></li>
				   </ul>
				 </div>
				 {/* /Footer Widget */}
			   </div>
			 </div>
		   </div>
		 </div>
		 {/* /Footer Top */}
		 {/* Footer Bottom */}
		 <div className="footer-bottom">
		   <div className="container-fluid">
			 {/* Copyright */}
			 <div className="copyright">
			   <div className="row">
				 <div className="col-md-6 col-lg-6">
				   <div className="copyright-text">
					 <p className="mb-0">© 2020 Doccure. All rights reserved.</p>
				   </div>
				 </div>
				 <div className="col-md-6 col-lg-6">
				   {/* Copyright Menu */}
				   <div className="copyright-menu">
					 <ul className="policy-menu">
					   <li><Link to="/pages/terms">Terms and Conditions</Link></li>
					   <li><Link to="/pages/privacy-policy">Policy</Link></li>
					 </ul>
				   </div>
				   {/* /Copyright Menu */}
				 </div>
			   </div>
			 </div>
			 {/* /Copyright */}
		   </div>
		 </div>
		 {/* /Footer Bottom */}
	   </footer>
			
	);
};

export default Footer;