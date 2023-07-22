import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast'
import SeachInput from "../Form/SeachInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import logo from '../Layout/logo.png'
export default function Header() {
    const [auth, setAuth] = useAuth();
    const categories = useCategory();
    const [cart] = useCart();
    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: ""
        })
        localStorage.removeItem('auth')
        toast.success("Logout Successfull")
    }
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            // Check if the page is scrolledjkl.zcx 
            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add event listener to scroll event
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <nav className={` ${isScrolled ? 'header-scrolled' : 'header-transparent'} navbar fixed-top px-lg-5 px-2`} >
                <div className="container-fluid">

                    <a className="navbar-brand  fw-bold b-logo  " href="/" ><img src={logo} alt="logoimg" className="stylecraft-logo" /></a>
                    <div className="menu-navigation d-flex align-items-center">
                        {
                            !auth?.user ? (<>
                                <li className="nav-item ">

                                    <Link to="/register" className="text-decoration-none  text-dark btn btn-border-1 mx-2 auth">Sign Up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className=" text-decoration-none text-dark btn btn-border-1 mx-2 auth">Log In</Link>
                                </li>
                            </>) : (<>

                                <div className="dropdown">
                                    <Link className="dropdown-toggle text-decoration-none border border-1  text-dark btn btn-border-1 mx-2 auth" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                                        <i class="bi bi-person "></i> {auth?.user?.name}
                                    </Link>

                                    <ul className="dropdown-menu  ms-2">

                                        <li>
                                            <Link
                                                to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                                                className="dropdown-item text-decoration-none text-dark "


                                            >Profile</Link>
                                        </li>

                                        <li>
                                            <Link to="/" onClick={handleLogout} className="dropdown-item text-decoration-none text-dark  my-2 ">
                                                Log Out</Link>
                                        </li>
                                    </ul>
                                </div>

                            </>)
                        }

                        <Link to="/" className='bi bi-search fs-3 text-dark mx-2' data-bs-toggle="modal" data-bs-target="#exampleModal" type="button"></Link>
                        <Link to="/cart" className='bi bi-bag fs-3 text-dark mx-2 cartp'>

                            <span class="position-absolute top-2 left-1s start-100 translate-middle badge rounded-pill bg-dark">
                                {cart?.length}
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </Link>
                        <button className="navbar-toggler border-0  btn btn-outline-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">

                            <span className="navbar-toggler-icon fs-3"></span>
                        </button>
                    </div>

                    <div className="offcanvas offcanvas-end text-gray" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h6 className="offcanvas-title fs-5 fw-light" id="offcanvasNavbarLabel">MENU</h6>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body nav-bar-menu-section">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 fs-5" >


                                <li className="nav-item">
                                    <Link to="/about" className="nav-link" href="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link" href="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/policy" className="nav-link" href="/policy">Policy <span className='text-danger'>*</span></Link>
                                </li>


                                <div className="dropdown">
                                    <Link to={"/categories"} className="text-dark dropdown-toggle text-dark text-decoration-none fw-light dropdown-toggle cat" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </Link>
                                    <ul className="dropdown-menu" >
                                        <li>
                                            <Link className="dropdown-item" to={`/categories`} href="/categories">
                                                All Categoies
                                            </Link>
                                        </li>
                                        {categories?.map((c) => (

                                            <li>
                                                <Link className="dropdown-item" to={`/category/${c.slug}`}>{c.name}</Link>
                                            </li>

                                        ))}
                                    </ul>


                                </div>
                                <div className="profilevisible mt-5">
                                    {

                                        !auth.user ? (<>
                                            <li className="nav-item border border-2 text-center my-1 profilevisible-s">
                                                <Link to="/register" className="text-decoration-none  text-dark btn btn-border-1  ">Sign Up</Link>
                                            </li>
                                            <li className="nav-item border border-2 text-center my-1 profilevisible-l"  >
                                                <Link to="/login" className=" text-decoration-none text-dark btn btn-border-1 " >Log In</Link>
                                            </li>

                                        </>) : (
                                            <div class="dropdown ">
                                                <Link class="dropdown-toggle border border-2 text-decoration-none text-dark btn  mx-2 " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-person "></i> {auth?.user?.name}
                                                </Link>

                                                <ul class="dropdown-menu  ms-2">
                                                    <li>
                                                        <Link
                                                            to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                                                            className="dropdown-item text-decoration-none text-dark "

                                                        // to="/dashboard"
                                                        >Profile</Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to={`/dashboard/user/orders`}
                                                            className="dropdown-item text-decoration-none text-dark "

                                                        // to="/dashboard"
                                                        >Orders</Link>
                                                    </li>

                                                    <li>
                                                        <Link to="/" onClick={handleLogout} className="dropdown-item text-decoration-none text-dark  my-2 ">
                                                            Log Out</Link></li>
                                                </ul>
                                            </div>

                                        )
                                    }
                                </div>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
            <SeachInput />
        </>
    )
}
