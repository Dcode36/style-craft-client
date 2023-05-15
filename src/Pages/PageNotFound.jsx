import React from 'react'
import Layout from '../Components/Layout/Layout'
import { NavLink } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div>
      <Layout title={"Page Not Found"}>
        <div className="container-fluid d-flex justify-content-center flex-column text-center mt-5 pageno">
            <h1 className='Error'>404</h1>
            <h3>Oops! Page Not Found</h3>
            <NavLink to="/" className="btn btn-dark border-1  my-3 text-center ">Go back</NavLink>
        </div>
      </Layout>
    </div>
  )
}
