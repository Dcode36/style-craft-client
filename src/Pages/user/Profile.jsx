import React, { useState, useEffect } from 'react'
import UserMenu from '../../Components/Layout/UserMenu'
import Layout from '../../Components/Layout/Layout'
import { useAuth } from '../../context/auth';


import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
export default function Profile() {
    const navigate = useNavigate();

    const [auth, setAuth] = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');


    useEffect(() => {
        const { name, email, password, phone, address, pincode } = auth.user;
        setName(name);
        setPhone(phone);
        setEmail(email);
        setAddress(address);
    }, [auth?.user])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(`${process.env.REACT_APP_API}/api/v1/auth/profile`,
                { name, email, password, phone, address, pincode }

            );
            if (data?.error) {
                toast.error(data.error);
            }
            else {
                setAuth({ ...auth, user: data?.updatedUser });
                let ls = localStorage.getItem("auth")
                ls = JSON.parse(ls);
                ls.user = data.updatedUser
                localStorage.setItem("auth", JSON.stringify(ls))
                toast.success("Profile Updated Successfully")

            }

        } catch (error) {
            console.log(error)
            toast.error("Something went Wrong")
        }
        // console.log(name, email, password, phone, address);
        toast.success("Register Successfully");
    }
    return (
        <div>
            <Layout title={"Profile"}>
                <div className="space"></div>

                <div className="container-fluid ">
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
                            <div className="d-flex justify-content-center align-items-center row">
                                <div className="register-left col-lg-5 col-md-12">
                                    <h2 className='text-lg-center text-xs-start fw-bold'>Shipping Details</h2>
                                    <form className='col-12' onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputName" className="form-label">Name</label>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="form-control"
                                                id="exampleInputName"
                                                placeholder='John Doe'

                                            />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                placeholder='example@gmail.com'

                                                disabled
                                            />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="form-control"
                                                placeholder='password'
                                                id="exampleInputPassword1"

                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                                            <input
                                                type="number"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="form-control"
                                                placeholder='+91 1234567890'
                                                id="exampleInputPhone"

                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                                            <input
                                                type="text"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                className="form-control"
                                                placeholder='Street Name, City Name, Pincode' id="exampleInputAddress"

                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPincode" className="form-label">Pincode</label>
                                            <input
                                                type="text"
                                                value={pincode}
                                                onChange={(e) => setPincode(e.target.value)}
                                                className="form-control"
                                                placeholder='400 400' id="exampleInputPincode"

                                            />
                                        </div>

                                        <button type="submit" className="btn btn-dark res-btn " onClick={() => { navigate("/cart") }} >Update</button>

                                    </form>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </div>
    )
}
