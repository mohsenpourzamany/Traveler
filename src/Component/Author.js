import React from 'react'
import { Link } from 'react-router-dom';
import user1 from '../img/user.jpg'
const Author = () => {
  return (
    <div className="d-flex flex-column text-center bg-white mb-5 py-5 px-4">
                        <img src={user1} className="img-fluid mx-auto mb-3" style={{"width": "100px"}} alt="/"/>
                        <h3 className="text-primary mb-3">John Doe</h3>
                        <p>Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit no ut est  ipsum erat kasd amet elitr</p>
                        <div className="d-flex justify-content-center">
                            <Link className="text-primary px-2" to="">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link className="text-primary px-2" to="">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link className="text-primary px-2" to="">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link className="text-primary px-2" to="">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link className="text-primary px-2" to="">
                                <i className="fab fa-youtube"></i>
                            </Link>
                        </div>
                    </div>
  )
}

export default Author;