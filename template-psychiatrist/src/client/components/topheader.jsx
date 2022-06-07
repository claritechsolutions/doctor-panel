import React from "react";

const TopHeader = (props) => {

  return (
    <div className="top-header">
    <div className="container-fluid">
      <div className="row d-flex justify-content-between">
        <ul className="d-flex justify-content-between align-items-center">
          <li>
            <i className="fas fa-phone-alt"></i>
            Contact Number : 090 98763456
          </li>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            Location : 22, South Wales, New York
          </li>
        </ul>
        <ul className="d-flex justify-content-between align-items-center">
          <li>
            <div className="social-icon">
              <ul>
                <li>
                  <a href="#" target="_blank"><i className="fab fa-facebook-f"></i> </a>
                </li>
                <li>
                  <a href="#" target="_blank"><i className="fab fa-google-plus-g"></i> </a>
                </li>
                <li>
                  <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="#" target="_blank"><i className="fab fa-twitter"></i> </a>
                </li>
                <li>
                  <div className="form-group">
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option>English</option>
                      <option>Arabic</option>
                      <option>Turkish</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default TopHeader;
