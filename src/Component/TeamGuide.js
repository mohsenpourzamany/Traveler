import React from 'react'
import { Link } from 'react-router-dom'
import team1 from '../img/team-1.jpg';
import team2 from '../img/team-2.jpg';
import team3 from '../img/team-3.jpg';
import team4 from '../img/team-4.jpg';

const TeamGuide = () => {
  return (
    <div className="container-fluid py-5">
    <div className="container pt-5 pb-3 teamguide">
        <div className="text-center mb-3 pb-3">
            <h4 className="text-primary text-uppercase" style={{"letterSpacing": "5px"}}>Guides</h4>
            <h1>Our Travel Guides</h1>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                    <div className="team-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={team1} alt=""/>
                        <div className="team-social">
                            <Link className="btn btn-outline-primary btn-square" to=""><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-primary btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-primary btn-square" to=""><i className="fab fa-instagram"></i></Link>
                            <Link className="btn btn-outline-primary btn-square" to=""><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <h5 className="text-truncate">Guide Name</h5>
                        <p className="m-0">Designation</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                    <div className="team-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={team2} alt=""/>
                        <div className="team-social">
                            <Link className="btn btn-outline-primary btn-square" to=""><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-primary btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-primary btn-square" to=""><i className="fab fa-instagram"></i></Link>
                            <Link className="btn btn-outline-primary btn-square" to=""><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <h5 className="text-truncate">Guide Name</h5>
                        <p className="m-0">Designation</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                    <div className="team-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={team3} alt=""/>
                        <div className="team-social">
                            <Link className="btn btn-outline-primary btn-square" to=""><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-primary btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-primary btn-square" to=""><i className="fab fa-instagram"></i></Link>
                            <Link className="btn btn-outline-primary btn-square" to=""><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <h5 className="text-truncate">Guide Name</h5>
                        <p className="m-0">Designation</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                    <div className="team-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={team4} alt=""/>
                        <div className="team-social">
                            <Link className="btn btn-outline-primary btn-square" to=""><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-primary btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-primary btn-square" to=""><i className="fab fa-instagram"></i></Link>
                            <Link className="btn btn-outline-primary btn-square" to=""><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <h5 className="text-truncate">Guide Name</h5>
                        <p className="m-0">Designation</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default TeamGuide