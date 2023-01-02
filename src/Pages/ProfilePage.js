import React from 'react'
import AddPackage from '../Component/package/AddPackage'
import Booking from '../Component/Booking';
import { Link } from 'react-router-dom';
const ProfilePage = () => {
  return (
    <>
        <div>
            <div className="container-fluid page-header">
            <div className="container">
                <div className="d-flex flex-column align-items-center justify-content-center" style={{"minHeight": "400px"}}>
                    <h3 className="display-4 text-white text-uppercase">Profile</h3>
                    <div className="d-inline-flex text-white">
                        <p className="m-0 text-uppercase"><Link className="text-white" to="">Home</Link></p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">Profile</p>
                    </div>
                </div>
            </div>
        </div>
        <Booking />
        <AddPackage />
        </div>
    </>    
  )
}

export default ProfilePage