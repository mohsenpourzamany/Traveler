import React from 'react'
import { Link } from 'react-router-dom'
import about from "../img/about.jpg";
import about1 from "../img/about-1.jpg";
import about2 from "../img/about-2.jpg";

const AboutUs = () => {
  return (
    <div>
        <div className="container-fluid py-3 aboutus">
        <div className="container pt-1">
            <div className="row">
                <div className="col-lg-6" style={{"minHeight": "500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 imgposition" alt='...' src={about} />
                    </div>
                </div>
                <div className="col-lg-6 pt-5 pb-lg-5">
                    <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                        <h6 className="text-primary text-uppercase" style={{"letterSpacing": "5px"}}>About Us</h6>
                        <h1 className="mb-3">We Provide Best Tour Packages In Your Budget</h1>
                        <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                        <div className="row mb-4">
                            <div className="col-6">
                                <img className="img-fluid" src={about1} alt=""/>
                            </div>
                            <div className="col-6">
                                <img className="img-fluid" src={about2} alt=""/>
                            </div>
                        </div>
                        <Link to="" className="btn btn-primary mt-1">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutUs