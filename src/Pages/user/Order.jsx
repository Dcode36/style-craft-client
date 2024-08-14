import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import UserMenu from '../../Components/Layout/UserMenu'
import { useAuth } from '../../context/auth';
import axios from 'axios';
import OrderCard from '../../Components/OrderCard';
export default function Order() {
    const [auth] = useAuth();
    const [orders, setOrders] = useState([]);
    const getOrderOfUser = async (id) => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/orders/${id}`)
            console.log(data)
            setOrders(data)
        } catch (error) {
            alert(error)
        }
    }
    useEffect(() => {
        getOrderOfUser(auth.user._id);
    }, [])
    return (
        <div>
            <Layout title={"Orders"}>
                <div className="space">

                </div>

                <div className="container-fluid">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 user-information  border border-1 py-3  text-center">
                            <h4>Hey! {auth.user.name}</h4>
                            <p>{auth.user.email}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <UserMenu />
                        </div>
                        <div className="col-12">
                            {
                                orders.length < 1 ? (
                                    <p>No Orders are there</p>
                                ) : (
                                    orders.map((val, index) => (
                                        <OrderCard
                                            key={index}
                                            address={val.address}
                                            createdAt={val.createdAt}
                                            payment={val.payment}
                                            products={val.products}
                                            quantity={val.quantity}
                                            size={val.size}
                                            status={val.status}
                                        />
                                    ))
                                )
                            }

                        </div>
                    </div>
                </div>
            </Layout>

        </div>
    )
}
