import React from 'react'
import { Link } from 'react-router-dom'
import AboutUs from '../Component/AboutUs'
import Booking from '../Component/Booking'
import Feature from '../Component/Feature'
import Registration from '../Component/Registration'
import TeamGuide from '../Component/TeamGuide'

const AboutPage = () => {
  return (
    <>
    <div className="container-fluid page-header">
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{"minHeight": "400px"}}>
                <h3 className="display-4 text-white text-uppercase">About</h3>
                <div className="d-inline-flex text-white">
                    <p className="m-0 text-uppercase"><Link className="text-white" to="">Home</Link></p>
                    <i className="fa fa-angle-double-right pt-1 px-3"></i>
                    <p className="m-0 text-uppercase">About</p>
                </div>
            </div>
        </div>
    </div>
    <Booking />
    <AboutUs />
    <Feature />
    <Registration />
    <TeamGuide />
    </>
  )
}

export default AboutPage