import React from 'react'
import { Link } from 'react-router-dom'
import des1 from '../img/destination-1.jpg';
import des2 from '../img/destination-2.jpg';
import des3 from '../img/destination-3.jpg';
import des4 from '../img/destination-4.jpg';
import des5 from '../img/destination-5.jpg';
import des6 from '../img/destination-6.jpg';
import des7 from '../img/destination-7.jpg';
import des8 from '../img/destination-8.jpg';
import des9 from '../img/destination-9.jpg';

const Destination = () => {
  return (
    <div className="container-fluid py-5">
    <div className="container pt-5 pb-3 destination">
        <div className="text-center mb-3 pb-3">
            <h6 className="text-primary text-uppercase" style={{"letterSpacing": "5px"}}>Destination</h6>
            <h1>Explore Top Destination</h1>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src={des1} alt=""/>
                    <Link className="destination-overlay text-white text-decoration-none" to="">
                        <h5 className="text-white">United States</h5>
                        <span>100 Cities</span>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src={des2} alt=""/>
                    <Link className="destination-overlay text-white text-decoration-none" to="">
                        <h5 className="text-white">United Kingdom</h5>
                        <span>100 Cities</span>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src={des3} alt=""/>
                    <Link className="destination-overlay text-white text-decoration-none" to="">
                        <h5 className="text-white">Australia</h5>
                        <span>100 Cities</span>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src={des4} alt=""/>
                    <Link className="destination-overlay text-white text-decoration-none" to="">
                        <h5 className="text-white">India</h5>
                        <span>100 Cities</span>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src={des5} alt=""/>
                    <Link className="destination-overlay text-white text-decoration-none" to="">
                        <h5 className="text-white">South Africa</h5>
                        <span>100 Cities</span>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src={des6} alt=""/>
                    <Link className="destination-overlay text-white text-decoration-none" to="">
                        <h5 className="text-white">Indonesia</h5>
                        <span>100 Cities</span>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src={des7} alt=""/>
                    <Link className="destination-overlay text-white text-decoration-none" to="">
                        <h5 className="text-white">Turkey</h5>
                        <span>100 Cities</span>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src={des8} alt=""/>
                    <Link className="destination-overlay text-white text-decoration-none" to="">
                        <h5 className="text-white">Spain</h5>
                        <span>100 Cities</span>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src={des9} alt=""/>
                    <Link className="destination-overlay text-white text-decoration-none" to="">
                        <h5 className="text-white">Thailand</h5>
                        <span>100 Cities</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Destination