import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'; 
import axios from 'axios'
export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [answer, setAnswer] = useState('');
    const [pincode, setPincode] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, 
            { name, email, password, phone, address, answer, pincode }
            
            );
            if(res && res.data.success){
                toast.success(res.data && res.data.message);
                navigate('/login')
            }
            else{
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
            <Layout title={"Register"}>
                <div className="space"></div>
                <div className="resgister row">
                    <div className="register-left col-lg-5 col-md-12">
                        <h1 className='fw-bold text-center'>Sign Up</h1>
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
                                    required
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
                            <div className="mb-3">
                                <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                                <input
                                    type="number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="form-control"
                                    placeholder='+91 1234567890'
                                    id="exampleInputPhone"
                                    required
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
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAddress" className="form-label">What is your Favorite Color?</label>
                                <input
                                    type="text"
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                    className="form-control"
                                    placeholder='eg. red' id="exampleInputAddress"
                                    required
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
                                    required
                                />
                            </div>
                            <div className="my-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                />
                                <label className="form-check-label" htmlFor="exampleCheck1">I accept the privacy statement</label>

                            </div>
                            <p className="" > Already A User?<NavLink to="/login"> Login</NavLink></p>
                            <button type="submit" className="btn btn-dark res-btn " >Submit</button>

                        </form>
                    </div>
                 
                </div>
            </Layout>
        </div>
    )
}
