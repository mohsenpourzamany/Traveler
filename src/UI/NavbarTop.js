import React from 'react'
import {Link} from 'react-router-dom'
import '../css/style.css';

const NavbarTop = () => {
  return (
    
        <div className="container-fluid bg-light pt-3 d-none d-lg-block">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                        <p className="text-body px-3">|</p>
                        <p><i className="fa fa-phone-alt mr-2"></i>+012 345 6789</p>
                    </div>
                </div>
                <div className="col-lg-6 text-center text-lg-right">
                    <div className="d-inline-flex align-items-center">
                        <Link to="/" className="text-primary px-3" >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="/" className="text-primary px-3" >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="/" className="text-primary px-3" >
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link to="/" className="text-primary px-3" >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="/" className="text-primary pl-3" >
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default NavbarTop