import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import IMG01 from "../../../assets/images/doctors/doctor-thumb-02.jpg";
const pathnames = window.location.pathname;

class DoctorSidebar extends Component {
  
  render() {
    console.log(pathnames);
    return (
      <div className="profile-sidebar">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <Link to="#" className="booking-doc-img">
              <img src={IMG01} alt="User" />
            </Link>
            <div className="profile-det-info">
              <h3>Dr. Darren Elder</h3>

              <div className="patient-details">
                <h5 className="mb-0">
                  BDS, MDS - Oral & Maxillofacial Surgery
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-widget">
          <Nav className="dashboard-menu">
            <Nav.Item>
              <NavLink to="/doctor/doctor-dashboard" activeClassName={pathnames.includes("doctor-dashboard") ? "active" : ""} >
                <i className="fas fa-columns"></i>
                  Dashboard
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/doctor/appointments">
                <i className="fas fa-calendar-check"></i>
                  Appointments
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/doctor/my-patients">
                <i className="fas fa-user-injured"></i>
                  My Patients
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/doctor/schedule-timing">
                <i className="fas fa-hourglass-start"></i>
                  Schedule Timings
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/pages/invoice">
                <i className="fas fa-file-invoice"></i>
                <span>Invoices</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/doctor/review">
                <i className="fas fa-star"></i>
                <span>Reviews</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/doctor/chat-doctor">
                <i className="fas fa-comments"></i>
                <span>Message</span>
                <small className="unread-msg">23</small>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/doctor/profile-setting">
                <i className="fas fa-user-cog"></i>
                <span>Profile Settings</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/social-media">
                <i className="fas fa-share-alt"></i>
                <span>Social Media</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/doctor-change-passwword">
                <i className="fas fa-lock"></i>
                <span>Change Password</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/home" activeClassName="active">
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
              </NavLink>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    );
  }
}
export default DoctorSidebar;
