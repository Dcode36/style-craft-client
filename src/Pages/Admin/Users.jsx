import React from 'react'
import Layout from '../../Components/Layout/Layout'
import AdminMenu from '../../Components/Layout/AdminMenu'
import Footer from '../../Components/Layout/Footer'

export default function Users() {
    return (
        <>
      

                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <AdminMenu />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="row">
                            <h1 className="text-center fw-bold  my-5">All Users</h1>
                        </div>
                        <h1>All Users</h1>
                    </div>
                </div>
        <Footer/>
        </>
    )
}
