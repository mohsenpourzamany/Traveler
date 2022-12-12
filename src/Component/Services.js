import React from 'react'

const Services = () => {
  return (
    <div className="container-fluid py-5">
    <div className="container pt-5 pb-3 Services">
        <div className="text-center mb-3 pb-3">
            <h6 className="text-primary text-uppercase" style={{"letterSpacing": "5px"}}>Services</h6>
            <h1>Tours & Travel Services</h1>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                    <i className="fa fa-2x fa-route mx-auto mb-4"></i>
                    <h5 className="mb-2">Travel Guide</h5>
                    <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                    <i className="fa fa-2x fa-ticket-alt mx-auto mb-4"></i>
                    <h5 className="mb-2">Ticket Booking</h5>
                    <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                    <i className="fa fa-2x fa-hotel mx-auto mb-4"></i>
                    <h5 className="mb-2">Hotel Booking</h5>
                    <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Services