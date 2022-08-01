import React from 'react'
import {Link} from 'react-router-dom'
import '../css/style.css';
import Dropdown from 'react-bootstrap/Dropdown';
const Navbar = () => {
  return (
    <div>
        <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{"zIndex": 9}}>
            <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                <Link to="" className="navbar-brand">
                    <h1 className="m-0 text-primary"><span className="text-dark">TRAVEL</span>ER</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="aboutpage" className="nav-item nav-link">About</Link>
                        <Link to="servicespage" className="nav-item nav-link">Services</Link>
                        <Link to="packagepage" className="nav-item nav-link">Tour Packages</Link>
                        <Dropdown className="nav-item dropdown">
                        <Dropdown.Toggle>
                            <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages<i className="bi bi-chevron-compact-down dropdownicon"/></Link>
                            </Dropdown.Toggle>   
                            <Dropdown.Menu className="dropdown-menu border-0 rounded-0 m-0">
                                <Link to="blogpage" className="dropdown-item">Blog Grid</Link>
                                <Link to="blogdescpage" className="dropdown-item">Blog Detail</Link>
                                <Link to="destinationpage" className="dropdown-item">Destination</Link>
                                <Link to="travelguide" className="dropdown-item">Travel Guides</Link>
                                <Link to="sayclientpage" className="dropdown-item">Testimonial</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Link to="contactpage" className="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    </div>
    
  )
}

export default Navbar