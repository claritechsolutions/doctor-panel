import React, { Component } from "react";
import event1 from "../../../assets/images/news-event-01.jpg";
import event2 from "../../../assets/images/news-event-02.jpg";
import event3 from "../../../assets/images/news-event-03.jpg";
import {Link} from "react-router-dom";

class Events extends Component {
  render() {
   
    return (
     
                	<section className="news-events">
				<div className="container">
					<h3 className="top-title text-center">Doccure News</h3>
				<h2 className="section-title text-center">Latest News and Events</h2>

					<div className="row mt-5">
						<div className="col-md-4">
							<div className="card">
								<img src={event1} className="card-img-top" alt="News and Events" />
								<div className="card-body">
								  <h5 className="card-title">Category Name</h5>
								  <h3>Who's the inner you?</h3>
								  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								  <h6>Posted By: Admin</h6>
								  <Link to="/blog/blog-details" className="read-more-text">Readmore</Link>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card">
								<img src={event2} className="card-img-top" alt="News and Events" />
								<div className="card-body">
								  <h5 className="card-title">Category Name</h5>
								  <h3>Who's the inner you?</h3>
								  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								  <h6>Posted By: Admin</h6>
								  <Link to="/blog/blog-details" className="read-more-text">Readmore</Link>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card">
								<img src={event3} className="card-img-top" alt="News and Events" />
								<div className="card-body">
								  <h5 className="card-title">Category Name</h5>
								  <h3>Who's the inner you?</h3>
								  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								  <h6>Posted By: Admin</h6>
								  <Link to="/blog/blog-details" className="read-more-text">Readmore</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center mt-3 mb-3">
						<Link to="/blog/blog-list" className="btn btn-primary">MORE BLOG</Link>
					</div>
				</div>
			</section>
   
    );
  }
}
export default Events;
