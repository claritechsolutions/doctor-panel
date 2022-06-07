import React, {Component} from 'react';
import testi01 from "../../../assets/images/testimonial/testi-01.png";
import testi02 from "../../../assets/images/testimonial/testi-02.png";
import testi03 from "../../../assets/images/testimonial/testi-03.png";



class Testimonial extends Component{
    render(){
      
        return(
            <section className="testimonials">
            <div className="container">
                <div>
                    <i className="fas fa-paw title-icon"></i>
                    <p className="title-top">Testimonials</p>
                    <h2 className="section-title">Kind Words From Happy Clients</h2>
                </div>
                <div className="row mt-4">
                
                    <div className="col-md-4">
                        <div className="testi-user">
                            <img src={testi01} alt="Testimonial" />
                        </div>
                        <div className="card">								
                            <i className="fas fa-quote-left"></i>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                <h6>John Smith</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testi-user">
                            <img src={testi02} alt="Testimonial" />
                        </div>
                        <div className="card">								
                            <i className="fas fa-quote-left"></i>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                <h6>Jackson Patel</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testi-user">
                            <img src={testi03} alt="Testimonial" />
                        </div>
                        <div className="card">								
                            <i className="fas fa-quote-left"></i>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                <h6>Michael Owens</h6>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
        );
    }
}
export default Testimonial;