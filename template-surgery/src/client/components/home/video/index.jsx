import React, { Component } from "react";
import Video from "../../../assets/images/video-img.jpg";
import YouTube from "react-youtube";

class VideoSection extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
          play: 0,
        };
      }
    
      handlePlayVideo = () => {
        this.setState({ play: 1 });
      };

  render() {
    const opts = {
        playerVars: {
          autoplay: this.state.play,
        },
      };
    return (
        <section class="watch-video">
        <div class="video-title">
            <h2 class="section-title">Watch Our Videos</h2>
            <p>We are ready to build your dream future Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, beatae. Lorem ipsum dolor sit amet, </p>
        </div>
        <div class="video-main">
            <div class="container">

                <div class="video-bg-img video-sec text-center" data-video-id="JZ6DejA9lmc" data-video-format="youtube">
                    {this.state.play === 1 ? (
                  <YouTube
                    videoId="JZ6DejA9lmc"
                    opts={opts}
                    onPlay={this.onPlay}
                    ref={this.myRef}
                  />
                ) : null}
                {this.state.play === 0 ? (
                  <>
                    <img src={Video} alt=".." className="img-fluid" />
                    <span className="play-btn">
                      <i className="fas fa-play"></i>
                    </span>
                  </>
                ) : null}
                 {this.state.play === 0 ? (    <span class="play-btn" onClick={() => this.handlePlayVideo()}>
                        <i class="fas fa-play"></i>
                    </span>) : null}
                </div>
                
                
                <div class="row counts">
                    <div class="col-sm-6 col-md-3">
                        <h3>25000</h3>
                        <h4>Happy Patients</h4>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <h3>180</h3>
                        <h4>Experienced Doctors</h4>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <h3>1500</h3>
                        <h4>Successful Operations</h4>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <h3>2800</h3>
                        <h4>Number of Beds</h4>
                    </div>
                </div>
            </div>
        </div>				
    </section>
    );
  }
}
export default VideoSection;
