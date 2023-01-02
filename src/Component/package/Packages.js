import React from 'react'
import { Link } from 'react-router-dom';
import { PackageData } from './PackageData';

const Packages = () => {
  return (
    <div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
            <h6 className="text-primary text-uppercase" style={{"letterSpacing": "5px"}}>Packages</h6>
            <h1>Perfect Tour Packages</h1>
        </div>
        <div className="row">
            { PackageData &&
              PackageData.length !== 0 &&
              PackageData.map ((DataPackage) => {
                return (
            <div id={DataPackage.id} className="col-lg-4 col-md-6 mb-4">
                <div  className="package-item bg-white mb-2">
                    <img className="img-fluid" src={DataPackage.image} alt=""/>
                    <div className="p-4">
                        <div className="d-flex justify-content-between mb-3">
                            <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>{DataPackage.country}</small>
                            <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>{DataPackage.days} days</small>
                            <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>{DataPackage.numPerson} Person</small>
                        </div>
                        <Link className="h5 text-decoration-none" to="">Discover amazing places of the world with us</Link>
                        <div className="border-top mt-4 pt-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i> 4.5 <small>(250)</small></h6>
                                <h5 className="m-0">${DataPackage.price}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        } )}
        </div>
    </div>
</div>
  )
}

 export default Packages
