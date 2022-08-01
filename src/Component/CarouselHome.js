import React from "react";
import { Link } from "react-router-dom";
import img1 from "../img/carousel-1.jpg";
import img2 from "../img/carousel-2.jpg";
import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
  return (
    <>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {img1}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h4 className="title text-uppercase mb-md-3">
                  Tours & Travel
                </h4>
                <h1 className="display-3 text-white mb-md-4">
                  Let's Discover The World Together
                </h1>
                <Link to="" className="btn btn-primary py-md-3 px-md-5 mt-2 ">
                  Book Now
                </Link>
              </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h4 className="text-uppercase mb-md-3 title">
                  Tours & Travel
                </h4>
                <h1 className="display-3 text-white mb-md-4">
                  Discover Amazing Places With Us
                </h1>
                <Link to="" className="btn btn-primary py-md-3 px-md-5 mt-2 ">
                  Book Now
                </Link>
              </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
        
  </>
  );
};

export default CarouselHome;
