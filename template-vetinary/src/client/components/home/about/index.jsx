import React, {Component} from 'react';
import about_us from "../../../assets/images/about-us.png";



class AboutUs extends Component{
    render(){
        return(
            <section className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <i className="fas fa-paw title-icon"></i>
                            <p className="title-top">About Us</p>
                            <h2 className="section-title">We Care <br />About Your Pet</h2>
                        </div>							
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <a className="btn btn-primary mt-4">Know More</a>
                    </div>
                    <div className="col-md-6">
                        <img src={about_us} alt="About Us" className="img-fluid" />
                        <div className="exp-box">
                            <h3>15+</h3>
                            <p>Years <br />Experience</p>
                        </div>
                    </div>
                </div>					
            </div>
        </section>
        );
    }
}
export default AboutUs;