import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
    <div className="space"></div>
     <div className="caroh d-flex justify-content-center align-items-center py-5">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center ">
                            <i class="bi bi-truck fs-1 text-center "></i>
                            <p className="fw-bold fs-5 text-center">FREE Shipping</p>
                            <p className="text-center">Free Shipping Pan India: On All Prepaid Orders.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center">
                            <i class="bi bi-arrow-down-up fs-1 text-center"></i>
                            <p className="fw-bold fs-5 text-center">PAN-INDIA DELIVERY

</p>
                            <p className="text-center">Easy Returns:  Just return it within 15 days.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center">
                            <i class="bi bi-bag-check fs-1 text-center"></i>
                            <p className="fw-bold fs-5 text-center">QUALITY PRODUCTS</p>
                            <p className="text-center">Guaranteed Quality: We Take Pride In Our Products.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center">
                            <i class="bi bi-envelope text-center  fs-1"></i>
                            <p className="fw-bold fs-5 text-center">CONTACT US</p>
                            <p className="text-center">Write to us at support@88.com</p>
                        </div>
                    </div>
                </div>

      <div className="footer " >

          <div className="text-center footer-link py-5">
            <Link to="/about" className='mx-3 py-1 text-dark'>About</Link>
            <Link to="/contact" className='mx-3 py-1 text-dark'>Contact</Link>
            <Link to="/policy" className='mx-3 py-1 text-dark'>Policy</Link>
            <Link to="/return-and-exchange" className='mx-3 py-1 text-dark'>Return And Exchange</Link>
            <Link to="/shipping-policy" className='mx-3 py-1 text-dark'>Shipping Policy</Link>
          
          </div>
          <hr />
        <div className="social-media py-2">
            <div className="text-center">
              <Link className='mx-1 text-dark fs-4'><i class="bi bi-facebook"></i></Link>
              <Link className='mx-1 text-dark fs-4'><i class="bi bi-instagram"></i></Link>

            </div>
        </div>
        <hr />
        <div className="rights py-3">
              <h6 className="text-center fw-light">© 2023 88*</h6>
        </div>
      </div>
    </>
  )
}
