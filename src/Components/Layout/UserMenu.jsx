import React from 'react'
import { NavLink, Link } from 'react-router-dom'
export default function UserMenu() {
    return (
        <div>
            <div className="text-center">
                <ul className="list-group  list-group-user my-3 ">
                 <Link to="/dashboard/user/profile" className=" py-3 list-group-item list-group-item-action text-dark " aria-current="true">
                 <i className="bi bi-person-circle"></i> Profile
                    </Link>
                   <Link to="/dashboard/user/orders" className=" py-3 list-group-item list-group-item-action text-dark">
                   <i className="bi bi-truck"></i>    Orders
                    </Link>
                </ul>

            </div>
        </div>
    )
}
