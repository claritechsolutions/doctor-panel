import React, {Component} from 'react';
import ourteam01 from "../../../assets/images/our-team-01.jpg";
import ourteam02 from "../../../assets/images/our-team-02.jpg";
import ourteam03 from "../../../assets/images/our-team-03.jpg";
import ourteam04 from "../../../assets/images/our-team-04.jpg";

class Team extends Component{
    render(){
        return(
            <section className="our-team">
            <div className="container">
                <div>
                    <i className="fas fa-paw title-icon"></i>
                    <p className="title-top">Qualified Professionals</p>
                    <h2 className="section-title">Our Team</h2>
                </div>
                <div className="row mt-4">
                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img src={ourteam01} alt="Our Team" className="img-fluid" />
                            <div className="card-body">
                              <h5 className="card-title">Wayne Jameson</h5>
                              <h6>Veterinarian</h6>
                              <p className="card-text">Id fermentum augue, ut pellen tesque leo nas. Maecenas at arcu risus Donec com modo.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img src={ourteam02} alt="Our Team" className="img-fluid" />
                            <div className="card-body">
                              <h5 className="card-title">Erica Dawson</h5>
                              <h6>Veterinarian</h6>
                              <p className="card-text">Id fermentum augue, ut pellen tesque leo nas. Maecenas at arcu risus Donec com modo.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img src={ourteam03} alt="Our Team" className="img-fluid" />
                            <div className="card-body">
                              <h5 className="card-title">Greg Tang</h5>
                              <h6>Veterinarian</h6>
                              <p className="card-text">Id fermentum augue, ut pellen tesque leo nas. Maecenas at arcu risus Donec com modo.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img src={ourteam04} alt="Our Team" className="img-fluid" />
                            <div className="card-body">
                              <h5 className="card-title">James Shaw</h5>
                              <h6>Veterinarian</h6>
                              <p className="card-text">Id fermentum augue, ut pellen tesque leo nas. Maecenas at arcu risus Donec com modo.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a href="#" className="btn btn-primary">Read More</a>
                </div>					
            </div>
        </section>
        );
    }
}
export default Team;