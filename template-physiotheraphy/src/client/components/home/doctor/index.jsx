import React from "react";
import images1 from "../../../assets/images/key-img1.png";
import images2 from "../../../assets/images/key-img2.png";
import images3 from "../../../assets/images/key-img3.png";
import images4 from "../../../assets/images/key-img4.png";
import images5 from "../../../assets/images/key-img5.png";

const OurDoctor = () => {

  return (

	<section class="section-wrapper">
	<div class="container key-section">
		<div class="row">
			<div class="col-12 col-md-12 col-lg-6">
				<div class="row key-box">
					<div class="col-12 col-md-12 col-lg-12">									 
						<h2 class="title">Our doctors follow our 5 key pillars 
						to get you in top conditions</h2>
					</div>	
				</div>
				<div class="row align-items-center key-box">
					<div class="col-12 col-md-3 col-lg-4">
						<div class="key-img">
							<img src={images1} alt="" />
						</div>
					</div>
					<div class="col-12 col-md-9 col-lg-8">
						<h3>Posture</h3>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque alaudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
					</div>
				</div>
				<div class="row align-items-center key-box">
					<div class="col-12 col-md-3 col-lg-4">
						<div class="key-img">
							<img src={images2} alt="" /> 
						</div>
					</div>
					<div class="col-12 col-md-9 col-lg-8">
						<h3>Posture</h3>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque alaudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-12 col-lg-6">
				<div class="row align-items-center key-box">
					<div class="col-12 col-md-3 col-lg-4">
						<div class="key-img">
							<img src={images3} alt="" />
						</div>
					</div>
					<div class="col-12 col-md-9 col-lg-8"> 
						<h3>Posture</h3>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque alaudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
					</div>
				</div>
				<div class="row align-items-center key-box">
					<div class="col-12 col-md-3 col-lg-4">
						<div class="key-img">
							<img src={images4} alt="" />
						</div>
					</div>
					<div class="col-12 col-md-9 col-lg-8">
						<h3>Posture</h3>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque alaudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
					</div>
				</div>
				<div class="row align-items-center key-box">
					<div class="col-12 col-md-3 col-lg-4">
						<div class="key-img">
							<img src={images5} alt="" />
						</div>
					</div>
					<div class="col-12 col-md-9 col-lg-8">
						<h3>Posture</h3>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque alaudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
					</div>
				</div>
			</div>
		</div>				
	</div>
</section>
  );
};

export default OurDoctor;
