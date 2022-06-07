import React, {Component} from 'react';
import gal01 from "../../../assets/images/gal-01.jpg";
import gal02 from "../../../assets/images/gal-02.jpg";
import gal03 from "../../../assets/images/gal-03.jpg";
import gal04 from "../../../assets/images/gal-04.jpg";
import gal05 from "../../../assets/images/gal-05.jpg";
import Slider from "react-slick";


class Gallery extends Component{
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            centerPadding: "10px",
            arrows: true,
      
            responsive: [
              {
                breakpoint: 400,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                },
              },
              {
                breakpoint: 993,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                },
              },
            ],
          };
        return(
            <div className="gallery-section">
            <div className="gallery-slider slider">
            <Slider {...settings}>
                <div className="img-sec">
                    <img src={gal01} className="img-fluid" alt="Gallery" />
                </div>
                <div className="img-sec">
                    <img src={gal02} className="img-fluid" alt="Gallery" />
                </div>
                <div className="img-sec">
                    <img src={gal03} className="img-fluid" alt="Gallery" />
                </div>
                <div className="img-sec">
                    <img src={gal04} className="img-fluid" alt="Gallery" />
                </div>
                <div className="img-sec">
                    <img src={gal05} className="img-fluid" alt="Gallery" />
                </div>
                </Slider>  
            </div>
        </div>
        );
    }
}
export default Gallery;