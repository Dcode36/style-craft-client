import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
      <div className="footer " >

          <div className="text-center footer-link py-5">
            <Link to="/about" className='mx-3 py-1 text-dark'>About</Link>
            <Link to="/contact" className='mx-3 py-1 text-dark'>Contact</Link>
            <Link to="/policy" className='mx-3 py-1 text-dark'>Policy</Link>
            <Link to="/policy" className='mx-3 py-1 text-dark'>Return And Exchange</Link>
            <Link to="/policy" className='mx-3 py-1 text-dark'>Shipping Policy</Link>
          
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
