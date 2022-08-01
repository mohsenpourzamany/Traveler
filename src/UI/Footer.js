import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{"marginTop": "90px"}}>
    <div className="row pt-5">
        <div className="col-lg-3 col-md-6 mb-5">
            <Link to="" className="navbar-brand">
                <h1 className="text-primary"><span className="text-white">TRAVEL</span>ER</h1>
            </Link>
            <p>Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor</p>
            <h6 className="text-white text-uppercase mt-4 mb-3" style={{"letterSpacing": "5px"}}>Follow Us</h6>
            <div className="d-flex justify-content-start">
                <Link className="btn btn-outline-primary btn-square mr-2" to="#"><i className="fab fa-twitter"></i></Link>
                <Link className="btn btn-outline-primary btn-square mr-2" to="#"><i className="fab fa-facebook-f"></i></Link>
                <Link className="btn btn-outline-primary btn-square mr-2" to="#"><i className="fab fa-linkedin-in"></i></Link>
                <Link className="btn btn-outline-primary btn-square" to="#"><i className="fab fa-instagram"></i></Link>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-white text-uppercase mb-4" style={{"letterSpacing": "5px"}}>Our Services</h5>
            <div className="d-flex flex-column justify-content-start">
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>About</Link>
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Destination</Link>
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Services</Link>
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Packages</Link>
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Guides</Link>
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Testimonial</Link>
                <Link className="text-white-50" to="#"><i className="fa fa-angle-right mr-2"></i>Blog</Link>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-white text-uppercase mb-4" style={{"letterSpacing": "5px"}}>Usefull Links</h5>
            <div className="d-flex flex-column justify-content-start">
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>About</Link>
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Destination</Link>
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Services</Link>
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Packages</Link>
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Guides</Link>
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Testimonial</Link>
                <Link className="text-white-50" to="#"><i className="fa fa-angle-right mr-2"></i>Blog</Link>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-white text-uppercase mb-4" style={{"letterSpacing": "5px"}}>Contact Us</h5>
            <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
            <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
            <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
            <h6 className="text-white text-uppercase mt-4 mb-3" style={{"letterSpacing": "5px"}}>Newsletter</h6>
            <div className="w-100">
                <div className="input-group">
                    <input type="text" className="form-control border-light" style={{"padding": "25px"}} placeholder="Your Email"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary px-3">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



  )
}

export default Footer