import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import test1 from '../img/testimonial-1.jpg';
import test2 from '../img/testimonial-2.jpg';
import test3 from '../img/testimonial-3.jpg';
import test4 from '../img/testimonial-4.jpg';

const SayClients = () => {
  return (
   
    <div className="container-fluid py-5">
        <div className="container py-5 sayclients">
            <div className="text-center mb-3 pb-3">
                <h4 className="text-primary text-uppercase" style={{"letterSpacing": "5px"}}>Testimonial</h4>
                <h1>What Say Our Clients</h1>
            </div>
            <Carousel>
          
                <div className="text-center pb-4">
                    <img className="img-fluid mx-auto" src={test1} style={{"height": "100px", "width": "100px"}} alt="" />
                    <div className="testimonial-text bg-white p-4 mt-n5">
                        <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                        </p>
                        <h5 className="text-truncate">Client Name</h5>
                        <span>Profession</span>
                    </div>
                </div>
                <div className="text-center">
                    <img className="img-fluid mx-auto" src={test2} style={{"height": "100px", "width": "100px"}} alt="" />
                    <div className="testimonial-text bg-white p-4 mt-n5">
                        <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                        </p>
                        <h5 className="text-truncate">Client Name</h5>
                        <span>Profession</span>
                    </div>
                </div>
                <div className="text-center">
                    <img className="img-fluid mx-auto" src={test3} style={{"height": "100px", "width": "100px"}} alt="" />
                    <div className="testimonial-text bg-white p-4 mt-n5">
                        <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                        </p>
                        <h5 className="text-truncate">Client Name</h5>
                        <span>Profession</span>
                    </div>
                </div>
                <div className="text-center">
                    <img className="img-fluid mx-auto" src={test4} style={{"height": "100px", "width": "100px"}} alt=""/>
                    <div className="testimonial-text bg-white p-4 mt-n5">
                        <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                        </p>
                        <h5 className="text-truncate">Client Name</h5>
                        <span>Profession</span>
                    </div>
                </div>
           
            </Carousel>
        </div>
    </div>
  )
}

export default SayClients;