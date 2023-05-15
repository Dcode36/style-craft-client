import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { NavLink } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth';
import axios from 'axios'


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,
                { email, password }

            );
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate(location.state || '/')
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
            <Layout title={"Login"}>
                <div className="space"></div>
                <div className="resgister row">
                    <div className="register-left col-lg-5 col-md-12">
                        <h1 className='fw-bold text-center'>Log In</h1>
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
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                    placeholder='password'
                                    id="exampleInputPassword1"
                                    required
                                />
                            </div>


                            <p className="" > Don't Have Account?<NavLink to="/register"> Sign Up</NavLink></p>
                            <p className='text-primary cursor-pointer' onClick={() => { navigate('/forgot-password') }}> Forgot Password?</p>
                            <button type="submit" className="btn btn-dark res-btn " >Login</button>

                        </form>
                    </div>


                </div>
            </Layout>
        </div>
    )
}
