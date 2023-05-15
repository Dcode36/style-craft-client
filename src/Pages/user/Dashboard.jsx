import React from 'react'
import Layout from '../../Components/Layout/Layout'
import UserMenu from '../../Components/Layout/UserMenu'
import { useAuth } from '../../context/auth';
import Profile from './Profile';
export default function Dashboard() {
    const [auth] = useAuth();
    return (
        <div>
            <Layout title={"Your Account"}>
                <div className="space"></div>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 user-information  border border-1 py-3  text-center">
                            <h4>Hey! {auth.user.name}</h4>
                            <p>{auth.user.email}</p>
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col-12">
                            <UserMenu />

                        </div>
                        <div className="col-12">

                        </div>
                    </div>

                </div>
            </Layout>

        </div>
    )
}
