import React from 'react'
import { Link } from 'react-router-dom'

const ListPost = () => {
  return (
    <div className="mb-5">
                        <h4 className="text-uppercase mb-4" style={{"letterSpacing": "5px"}}>Categories</h4>
                        <div className="bg-white" style={{"padding": "30px"}}>
                            <ul className="list-inline m-0">
                                <li className="mb-3 d-flex justify-content-between align-items-center">
                                    <Link className="text-dark" to="#"><i className="fa fa-angle-right text-primary mr-2"></i>Web
                                        United State</Link>
                                    <span className="badge badge-primary badge-pill">150</span>
                                </li>
                                <li className="mb-3 d-flex justify-content-between align-items-center">
                                    <Link className="text-dark" to="#"><i className="fa fa-angle-right text-primary mr-2"></i>Web
                                        Thailand</Link>
                                    <span className="badge badge-primary badge-pill">131</span>
                                </li>
                                <li className="mb-3 d-flex justify-content-between align-items-center">
                                    <Link className="text-dark" to="#"><i
                                            className="fa fa-angle-right text-primary mr-2"></i>Turkey</Link>
                                    <span className="badge badge-primary badge-pill">78</span>
                                </li>
                                <li className="mb-3 d-flex justify-content-between align-items-center">
                                    <Link className="text-dark" to="#"><i
                                            className="fa fa-angle-right text-primary mr-2"></i>India</Link>
                                    <span className="badge badge-primary badge-pill">56</span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <Link className="text-dark" to="#"><i
                                            className="fa fa-angle-right text-primary mr-2"></i>Spain</Link>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                            </ul>
                        </div>
                    </div>
  )
}

export default ListPost;