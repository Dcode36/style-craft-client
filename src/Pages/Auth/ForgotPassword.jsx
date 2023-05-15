import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { NavLink } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

import axios from 'axios'
export default function ForgotPassword() {

    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [answer, setAnswer] = useState('');
  
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
                { email, newPassword, answer }

            );
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
               
                navigate('/login')
            }
            else {
                toast.error(res.data.message)
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
            <Layout title={"Forgot Password"}>
                <div className="resgister row">
                    <div className="register-left col-lg-5 col-md-12">
                        <h1 className='fw-bold text-center'>Reset Password</h1>
                        <form className='col-12' onSubmit={handleSubmit} >

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder='example@gmail.com'
                                    required
                                />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputColor" className="form-label">Enter Your Favorite Color</label>
                                <input
                                    type="text"
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder='eg. red'
                                    required
                                />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="form-control"
                                    placeholder='password'
                                    id="exampleInputPassword1"
                                    required
                                />
                            </div>


                            <p className="cursor-pointer" > Don't Have Account?<NavLink to="/register"> Sign Up</NavLink></p>
                            <button type="submit" className="btn btn-dark res-btn " >Reset</button>

                        </form>
                    </div>
               
                </div>
            </Layout>
        </div>
    )
}
