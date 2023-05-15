import React from 'react'

import AdminMenu from '../../Components/Layout/AdminMenu'
import { useAuth } from '../../context/auth'
import Footer from '../../Components/Layout/Footer';

export default function AdminDashboard() {
  const [auth] = useAuth();

  return (
    <>
      <div className="containe-fluid adminDashboard">

        <div className="row" >

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
            <AdminMenu />
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
            <div className="row">
              <h1 className="text-center py-5 my-3">Admin Dashboard</h1>

              <div className="m-lg-5  fs-sm-5 fs-xs-3">
                <h1 ><i class="bi bi-person"></i> Admin Name : {auth?.user?.name}</h1>
                <h1><i class="bi bi-envelope"></i> Admin Email : {auth?.user?.email}</h1>
                <h1><i class="bi bi-telephone"></i> Admin Phone : {auth?.user?.phone}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}
