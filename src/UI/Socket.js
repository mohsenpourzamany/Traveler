import React from 'react'
import { Link } from 'react-router-dom';

const Socket = () => {
  return (
    <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{"borderColor": "rgba(256, 256, 256, 0.1) !important"}}>
        <div className="row">
            <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                <p className="m-0 text-white-50">Copyright &copy; <Link to="#">TRAVELER</Link>. All Rights Reserved.
                </p>
            </div>
            <div className="col-lg-6 text-center text-md-right">
                <p className="m-0 text-white-50">Designed by <Link to="https://pywebino.com">PYWEBINO.COM</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Socket