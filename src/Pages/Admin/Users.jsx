import React, { useState, useEffect } from 'react'
import AdminMenu from '../../Components/Layout/AdminMenu'
import Footer from '../../Components/Layout/Footer'
import axios from 'axios';
import toast from 'react-hot-toast'
export default function Users() {
    const [users, setUsers] = useState([]);

    const getAllUsers = async ()=>{
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-user`)
            setUsers(data);
        } catch (error) {
            console.log(error);
            toast.error("Somethig went wrong while getting all Users")
        }
    }
    useEffect(() => {
        getAllUsers();
    }, [])
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
                          <table class="table">
                          <thead>
                            <tr>
                              
                              <th scope="col">Name</th>
                              <th scope="col">Phone</th>
                              <th scope="col">Address</th>
                              <th scope="col">email</th>

                            </tr>
                          </thead>
                          <tbody>
                          {users.map(p=>(
                            <tr>
                            
                              <td>{p.name}</td>
                              <td>{p.phone}</td>
                              <td>{p.address}</td>
                              <td>{p.email}</td>
                            </tr>
                             ))}
                          </tbody>
                        </table>
                      
                    </div>
                </div>
        <Footer/>
        </>
    )
}
