import React from 'react'
import { Link } from 'react-router-dom'
import blog11 from '../img/blog-100x100.jpg';

const RecentPost = () => {
  return (
    <div className="mb-5">
                        <h4 className="text-uppercase mb-4" style={{"letterSpacing": "5px"}}>Recent Post</h4>
                        <Link className="d-flex align-items-center text-decoration-none bg-white mb-3" to="">
                            <img className="img-fluid" src={blog11} alt=""/>
                            <div className="pl-3">
                                <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                <small>Jan 01, 2050</small>
                            </div>
                        </Link>
                        <Link className="d-flex align-items-center text-decoration-none bg-white mb-3" to="">
                            <img className="img-fluid" src={blog11} alt=""/>
                            <div className="pl-3">
                                <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                <small>Jan 01, 2050</small>
                            </div>
                        </Link>
                        <Link className="d-flex align-items-center text-decoration-none bg-white mb-3" to="">
                            <img className="img-fluid" src={blog11} alt=""/>
                            <div className="pl-3">
                                <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                <small>Jan 01, 2050</small>
                            </div>
                        </Link>
                    </div>
  )
}

export default RecentPost