import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icon

import { faHospital } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/images/logo.png";
import IMG01 from "../assets/images/doctors/doctor-thumb-02.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import $ from "jquery";
import { useEffect } from "react";
import config from "config";

const Header = (props) => {
  let pathnames = window.location.pathname

  const [active, setActive] = useState(false);
  const url = pathnames.split("/").slice(0, -1).join("/");

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  useEffect(() => {
    $(".main-nav a").on("click", function (e) {
      if ($(this).parent().hasClass("has-submenu")) {
        e.preventDefault();
      }
      if (!$(this).hasClass("submenu")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("submenu");
        $(this).next("ul").slideDown(350);
        $(this).addClass("submenu");
      } else if ($(this).hasClass("submenu")) {
        $(this).removeClass("submenu");
        $(this).next("ul").slideUp(350);
      }
    });
  }, []);

 
  return (
    <header className="header home">
      <div className="top-header">
					<div className="container-fluid">
						<div className="row justify-content-between align-items-center">
							<div className="col-12 col-md-6">
								<div className="left">
									<ul>
										<li><span><i className="fas fa-phone-alt"></i> Contact Number : 090 9876::3456</span></li>
										<li><span><i className="fas fa-map-marker-alt"></i> Location : 22, South Wales, New York</span></li>
									</ul>									
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="right">
									<ul>
										<li><span><i className="fas fa-calendar-check"></i> Mon - Fri : 09.00 AM to 05.00 PM</span></li>
										<li className="dropdown language-select">
											<span className="dropdown-toggle" id="language-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button"><i className="fas fa-globe-africa"></i> English</span>
											<div className="dropdown-menu dropdown-menu-right" aria-labelledby="language-dropdown">
											    <a className="dropdown-item" href="#">Spanish</a>
											    <a className="dropdown-item" href="#">Portuguese </a>
											    <a className="dropdown-item" href="#">Russian</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
        <nav className="navbar navbar-expand-lg header-nav">
        <div className="navbar-header">
          <a href="#0" id="mobile_btn" onClick={() => onHandleMobileMenu()}>
            <span className="bar-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
          <Link to="/home" className="navbar-brand logo">
            <img src={logo} className="img-fluid" alt="Logo" />
          </Link>
        </div>
        <div className="main-menu-wrapper">
          <div className="menu-header">
            <Link to="/home" className="menu-logo">
              <img src={logo} className="img-fluid" alt="Logo" />
            </Link>
            <a
              href="#0"
              id="menu_close"
              className="menu-close"
              onClick={() => onhandleCloseMenu()}
            >
              <i className="fas fa-times"></i>
            </a>
          </div>
          <ul className="main-nav">
            <li className={pathnames.includes("/home") ? "active" : ""}><Link to="/home">Home</Link></li>
              
            <li className={`has-submenu ${url.includes("/doctor") || pathnames.includes("add-prescription") || pathnames.includes("edit-prescription") || pathnames.includes("add-billing") || pathnames.includes("edit-billing") ? "active" : ""}`}>
              <a href="#0">
                Doctors<i className="fas fa-chevron-down" aria-hidden="true"></i>
              </a>
              <ul className={`submenu`}>
                <li className={pathnames.includes("doctor-dashboard") ? "active" : ""}>
                  <Link to="/doctor/doctor-dashboard" onClick={()=>onhandleCloseMenu()}>Doctor Dashboard</Link>
                </li>
                <li className={pathnames.includes("appointments") ? "active" : ""}>
                  <Link to="/doctor/appointments" onClick={()=>onhandleCloseMenu()}>Appointments</Link>
                </li>
                <li className={pathnames.includes("schedule-timing") ? "active" : ""}>
                  <Link to="/doctor/schedule-timing" onClick={()=>onhandleCloseMenu()}>Schedule Timing</Link>
                </li>
                <li className={pathnames.includes("my-patients") ? "active" : ""}>
                  <Link to="/doctor/my-patients" onClick={()=>onhandleCloseMenu()}>Patients List</Link>
                </li>
                <li className={pathnames.includes("patient-profile") || pathnames.includes("add-prescription") || pathnames.includes("edit-prescription") || pathnames.includes("add-billing") || pathnames.includes("edit-billing") ? "active" : ""}>
                  <Link to="/doctor/patient-profile" onClick={()=>onhandleCloseMenu()}>Patients Profile</Link>
                </li>
                <li className={pathnames.includes("chat-doctor") ? "active" : ""}>
                  <Link to="/doctor/chat-doctor" onClick={()=>onhandleCloseMenu()}>Chat</Link>
                </li>
                <li className={pathnames.includes("invoice") ? "active" : ""}>
                  <Link to="/pages/invoice" onClick={()=>onhandleCloseMenu()}>Invoices</Link>
                </li>
                <li className={pathnames.includes("profile-setting") ? "active" : ""}>
                  <Link to="/doctor/profile-setting" onClick={()=>onhandleCloseMenu()}>Profile Settings</Link>
                </li>
                <li className={pathnames.includes("review") ? "active" : ""}>
                  <Link to="/doctor/review" onClick={()=>onhandleCloseMenu()}>Reviews</Link>
                </li>
                <li className={pathnames.includes("doctor-register") ? "active" : ""}>
                  <Link to="/doctor/doctor-register" onClick={()=>onhandleCloseMenu()}>Doctor Register</Link>
                </li>
              </ul>
            </li>
            <li className={`has-submenu ${url.includes("/patient") ? "active" : ""}`}>
              <a href="#0">
                Patients <i className="fas fa-chevron-down" aria-hidden="true"></i>
              </a>
              <ul className={`submenu`}>
                <li className={`has-submenu ${pathnames.includes("doctor") && !pathnames.includes("search-doctor") && !pathnames.includes("doctor-profile")  ? "active" : ""}`}>
                  <a href="#0">Doctors</a>
                  <ul className="submenu">
                    <li className={pathnames.includes("doctor-grid") ? "active" : ""}>
                      <Link to="/patient/doctor-grid" onClick={()=>onhandleCloseMenu()}>Map Grid</Link>
                    </li>
                    <li className={pathnames.includes("doctor-list")  ? "active" : ""}>
                      <Link to="/patient/doctor-list" onClick={()=>onhandleCloseMenu()}>Map List</Link>
                    </li>
                  </ul>
                </li>
                <li className={pathnames.includes("search-doctor") ? "active" : ""}>
                  <Link to="/patient/search-doctor" onClick={()=>onhandleCloseMenu()}>Search Doctor</Link>
                </li>
                <li className={pathnames.includes("doctor-profile") ? "active" : ""}>
                  <Link to="/patient/doctor-profile" onClick={()=>onhandleCloseMenu()}>Doctor Profile</Link>
                </li>
                <li className={pathnames.includes("booking") ? "active" : ""}>
                  <Link to="/patient/booking" onClick={()=>onhandleCloseMenu()}>Booking</Link>
                </li>
                <li className={pathnames.includes("checkout") ? "active" : ""}>
                  <Link to="/patient/checkout" onClick={()=>onhandleCloseMenu()}>Checkout</Link>
                </li>
                <li className={pathnames.includes("booking-success") ? "active" : ""}>
                  <Link to="/patient/booking-success" onClick={()=>onhandleCloseMenu()}>Booking Success</Link>
                </li>
                <li className={pathnames.includes("dashboard") ? "active" : ""}>
                  <Link to="/patient/dashboard" onClick={()=>onhandleCloseMenu()}>Patient Dashboard</Link>
                </li>
                <li className={pathnames.includes("favourites") ? "active" : ""}>
                  <Link to="/patient/favourites" onClick={()=>onhandleCloseMenu()}>Favourites</Link>
                </li>
                <li className={pathnames.includes("patient-chat") ? "active" : ""}>
                  <Link to="/patient/patient-chat" onClick={()=>onhandleCloseMenu()}>Chat</Link>
                </li>
                <li className={pathnames.includes("profile") ? "active" : ""}>
                  <Link to="/patient/profile" onClick={()=>onhandleCloseMenu()}>Profile Settings</Link>
                </li>
                <li className={pathnames.includes("change-password") ? "active" : ""}>
                  <Link to="/patient/change-password" onClick={()=>onhandleCloseMenu()}>Change Password</Link>
                </li>
              </ul>
            </li>
            <li className={`has-submenu ${url.includes("/pages") || url.includes("/login") || url.includes("/register") || url.includes("/forgot-password") ? "active" : ""}`}>
              <a href="#0">
                Pages<i className="fas fa-chevron-down" aria-hidden="true"></i>
              </a>
              <ul className={`submenu`}>
                <li className={`${(pathnames).includes("/voice-call") ? "active" : ""}`}>
                  <Link to="/pages/voice-call" onClick={()=>onhandleCloseMenu()}>Voice Call</Link>
                </li>
                <li className={`${(pathnames).includes("/video-call") ? "active" : ""}`}>
                  <Link to="/pages/video-call" onClick={()=>onhandleCloseMenu()}>Video Call</Link>
                </li>

                <li className={`${(pathnames).includes("/calendar") ? "active" : ""}`}>
                  <Link to="/pages/calendar" onClick={()=>onhandleCloseMenu()}>Calendar</Link>
                </li>
                <li className={pathnames.includes("components") ? "active" : ""}><Link to="/pages/components" onClick={()=>onhandleCloseMenu()}>Components</Link></li>
                <li className={pathnames.includes("invoice") ? "has-submenu active" : "has-submenu"}>
                  <a href="">Invoices</a>
                  <ul className="submenu">
                    <li className={pathnames.includes("invoice") ? "active" : ""}><Link to="/pages/invoice" onClick={()=>onhandleCloseMenu()}>Invoices</Link></li>
                    <li className={pathnames.includes("-view") ? "active" : ""}><Link to="/pages/invoice-view" onClick={()=>onhandleCloseMenu()}>Invoice View</Link></li>
                  </ul>
                </li>
                <li className={pathnames.includes("blank-") ? "active" : ""}><Link to="/pages/blank-page" onClick={()=>onhandleCloseMenu()}>Starter Page</Link></li>

                <li className={pathnames.includes("login") ? "active" : ""}>
                  <Link to="/login" onClick={()=>onhandleCloseMenu()}>Login</Link>
                </li>
                <li className={pathnames.includes("/register") ? "active" : ""}>
                  <Link to="/register"onClick={()=>onhandleCloseMenu()}>Register</Link>
                </li>
                <li className={`${pathnames.includes("/forgot-password") ? "active" : ""}`}>
                  <Link to="/forgot-password" onClick={()=>onhandleCloseMenu()}>Forgot Password</Link>
                </li>
              </ul>
            </li>
            <li className={`has-submenu ${url.includes("/blog") ? "active" : ""}`}>
              <a href="">Blog<i className="fas fa-chevron-down"></i>
              </a>
              <ul className="submenu">
                <li className={pathnames.includes("blog-list") ? "active" : ""}>
                  <Link to="/blog/blog-list" onClick={()=>onhandleCloseMenu()}>Blog List</Link>
                </li>
                <li className={pathnames.includes("blog-grid") ? "active" : ""}>
                  <Link to="/blog/blog-grid" onClick={()=>onhandleCloseMenu()}>Blog Grid</Link>
                </li>
                <li className={pathnames.includes("blog-details") ? "active" : ""}>
                  <Link to="/blog/blog-details" onClick={()=>onhandleCloseMenu()}>Blog Details</Link>
                </li>
              </ul>
            </li>
            <li><Link href="/admin" target="_blank" to="/admin">Admin</Link></li>
            {/* <li>
              <a href="/admin" target="_blank" to="/admin">
                Admin
              </a>
            </li> */}
            <li className="login-link" onClick={()=>onhandleCloseMenu()}>
              <Link to="/">Login / Signup</Link>
            </li>
          </ul>
        </div>
        <ul className="nav header-navbar-rht">
   

          {(props.location.pathname) === ("/pages/voice-call") || (props.location.pathname) === ("/pages/video-call") ? (
            <>
              <Dropdown className="user-drop nav-item dropdown has-arrow logged-item">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <img
                    className="rounded-circle"
                    src={IMG01}
                    width="31"
                    alt="Darren Elder"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img
                        src={IMG01}
                        alt="User"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      <h6>Darren Elder</h6>
                      <p className="text-muted mb-0">Doctor</p>
                    </div>
                  </div>
                  <Dropdown.Item href={`${config.publicPath}/doctor/doctor-dashboard`}>
                    Dashboard
                  </Dropdown.Item>
                  <Dropdown.Item href={`${config.publicPath}/doctor/profile-setting`}>
                    Profile Settings
                  </Dropdown.Item>
                  <Dropdown.Item href={`${config.publicPath}/login`}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link header-login">
                  login / Signup{" "}
                </Link>
              </li>{" "}
            </>
          )}
        </ul>
      </nav>
        </header>
  );
};

export default Header;
