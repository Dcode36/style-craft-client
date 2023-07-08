import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast'
export default function AdminMenu() {
    const [auth, setAuth] = useAuth();
    const handleLogout = () => {
        setAuth({
          ...auth, user: null, token: ""
        })
        localStorage.removeItem('auth')
        toast.success("Logout Successfull")
      }
    return (
        <>
            <div className="text-center admin-menu" >
                <div className="space"></div>
                <NavLink to="/"><h1 className='fs-1 text-white fw-bold px-4'>Stylecraft </h1></NavLink>
                <NavLink className='text-white fs-1 fw-bold' to="/dashboard/admin">Admin Panel</NavLink>
         
                <ul class="list-group mb-5 p-4">
                    <li class="py-4 list-style-none "><NavLink to="/dashboard/admin/create-categray" class="text-decoration-none p-3  anchor  text-light " aria-current="true">
                        <i class="bi bi-list-task"></i>   Create Category
                    </NavLink></li>
                    <li class=" py-4 list-style-none "><NavLink to="/dashboard/admin/create-product" class="text-decoration-none  p-3 anchor text-light" >
                        <i class="bi bi-bag-plus-fill"></i>    Create Product
                    </NavLink></li>
                    <li class=" py-4 list-style-none "><NavLink to="/dashboard/admin/products" class="text-decoration-none  p-3 anchor text-light" >
                        <i class="bi bi-bag-plus-fill"></i>   Products
                    </NavLink></li>
                    <li class=" py-4 list-style-none "> <NavLink to="/dashboard/admin/users" class="text-decoration-none anchor p-3  text-light ">
                        <i class="bi bi-people"></i>    Users
                    </NavLink></li>

                </ul>
                <NavLink to="/" onClick={handleLogout} className="border border-1 p-2 text-decoration-none text-white logout  my-2 ">
              Log Out</NavLink>
            </div>

        </>
    )
}
