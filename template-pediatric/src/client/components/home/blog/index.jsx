import React, { Component } from "react";
import blog1 from "../../../assets/images/blog/blog-01.jpg";
import blog2 from "../../../assets/images/blog/blog-02.jpg";
import blog3 from "../../../assets/images/blog/blog-03.jpg";
import { Link } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
        <section className="section blog-section">
        <div className="container">
            <div className="section-header">
                <h6>Latest News</h6>
                <h2>Our Blog <Link to="/blog/blog-list" className="member-btn">View all Blogs</Link> </h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="blog-sec">
                        <div className="blog-image">
                            <img className="img-fluid" src={blog1} alt="Post Image" />
                        </div>
                        <div className="blog-content text-center">
                            <p>23/02/2020 | Category</p>
                            <h3>Lorem ipsum, or lipsum as it is sometimes known doloremque.</h3>
                            <Link to="/blog/blog-details" className="readmore"> Readmore </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="blog-sec">
                        <div className="blog-image">
                            <img className="img-fluid" src={blog2} alt="Post Image" />
                        </div>
                        <div className="blog-content text-center">
                            <p>11/03/2020 | Category</p>
                            <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h3>
                            <Link to="/blog/blog-details" className="readmore"> Readmore </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="blog-sec">
                        <div className="blog-image">
                            <img className="img-fluid" src={blog3} alt="Post Image" />
                        </div>
                        <div className="blog-content text-center">
                            <p>13/03/2020 | Category</p>
                            <h3>Lorem ipsum, or lipsum as it is sometimes known doloremque.</h3>
                            <Link to="/blog/blog-details" className="readmore"> Readmore </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>	
    );
  }
}
export default Blog;
