import React, { Component } from "react";
import Blog1 from "../../../assets/images/blog-left-01.jpg";
import Blog2 from "../../../assets/images/blog-left-02.jpg";
import Blog3 from "../../../assets/images/blog-right-01.jpg";
import Blog4 from "../../../assets/images/blog-right-02.jpg";

class Blog extends Component {
  render() {
    return (
        <section className="our-blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <h2 className="section-title">Our BLog</h2>
                        </div>
                        <div className="row">
                            <div className="media align-items-center mt-4 col-sm-6 col-md-12">
                                <img className="mr-3" src={Blog1} alt="Blog" />
                                <div className="media-body">
                                <h5 className="mt-0">15/02/2020</h5>
                                <p>Lorem ipsum, or lipsum as it is some
                                    times known, is dummy text</p>
                                </div>
                            </div>
                            <div className="media mt-3 align-items-center col-sm-6 col-md-12">
                                <img className="mr-3" src={Blog2} alt="Blog" />
                                <div className="media-body">
                                <h5 className="mt-0">15/02/2020</h5>
                                <p>Lorem ipsum, or lipsum as it is some
                                    times known, is dummy text</p>
                                </div>
                            </div>
                        </div>										
                    </div>
                    <div className="col-sm-6 col-md-3 xs-b">
                        <div className="blog-img">
                            <img src={Blog3} alt="General Services" />
                        </div>
                        <div className="blog-text">
                            <h6>15/02/2020</h6>
                            <h5>Lorem ipsum, or lipsum as it is some imes known, is</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="blog-img">
                            <img src={Blog4} alt="General Services" />
                        </div>
                        <div className="blog-text">
                            <h6>15/02/2020</h6>
                            <h5>Lorem ipsum, or lipsum as it is some imes known, is</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
export default Blog;
