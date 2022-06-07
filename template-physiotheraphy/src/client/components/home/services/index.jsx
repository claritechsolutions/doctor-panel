import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import service1 from "../../../assets/images/service-img1.jpg";
import service2 from "../../../assets/images/service-img2.jpg";
import service3 from "../../../assets/images/service-img3.jpg";
import service4 from "../../../assets/images/service-img4.jpg";


const Services = () => {

  return (
    <section className="service-section">
    <div className="container">				
     
        <div className="section-header text-center">
            <h2>Our <span className="text-red">Services</span></h2>
            <p className="sub-title">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
       
        <div className="row justify-content-center">
            <div className="col-12 col-lg-12 col-md-12">
                <div className="service-wrapper">
                      <div className="service-tabs">
                      <Tabs id="uncontrolled-tab-example" defaultActiveKey="Electro Therapy">
                            <Tab eventKey="Electro Therapy" title="Electro Therapy">
                            <div className="tab-pane show active" id="solid-justified-tab1">
											<div className="row align-items-center">
												<div className="col-12 col-md-6">
													<img src={service1} className="tab-img" alt="" />
												</div>
												<div className="col-12 col-md-6">
													<h3>Electro Therapy</h3>
													<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
													<a href="#" className="btn-border-red">Get More Details</a>
												</div>
											</div>
										</div>
                            </Tab>
                            <Tab eventKey="Accupuncture" title="Accupuncture">
                            <div className="row align-items-center">
												<div className="col-12 col-md-6">
													<img src={service2} className="tab-img" alt="" />
												</div>
												<div className="col-12 col-md-6">
													<h3>Accupuncture</h3>
													<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
													<a href="#" className="btn-border-red">Get More Details</a>
												</div>
											</div>
                            </Tab>
                            <Tab eventKey="Hydrotherapy" title="Hydrotherapy">
                            <div className="row align-items-center">
												<div className="col-12 col-md-6">
													<img src={service3} className="tab-img" alt="" />
												</div>
												<div className="col-12 col-md-6">
													<h3>Hydrotherapy</h3>
													<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
													<a href="#" className="btn-border-red">Get More Details</a>
												</div>
											</div>
                            </Tab>
                            <Tab eventKey="Massage" title="Massage">
                            <div className="row align-items-center">
												<div className="col-12 col-md-6">
													<img src={service4} className="tab-img" alt="" />
												</div>
												<div className="col-12 col-md-6">
													<h3>Massage</h3>
													<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
													<a href="#" className="btn-border-red">Get More Details</a>
												</div>
											</div>
                            </Tab>
                            </Tabs>
                       </div>   
                 </div>
            </div>
        </div> 
    </div>
 </section>  

  );
};

export default Services;
