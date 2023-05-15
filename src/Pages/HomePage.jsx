import React, { useState, useEffect } from "react";
import Layout from '../Components/Layout/Layout'
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast'
import axios from "axios";
import { useCart } from "../context/cart";
import { Checkbox } from 'antd'



// import { useAuth } from '../context/auth';
export default function HomePage() {
    const [cart, setCart] = useCart();
    // const [auth, setAuth] = useAuth();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [checked, setChecked] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/all-category`);
            if (data?.success) {
                setCategories(data?.category);
            }
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getAllCategory();
        getTotalCount();
    }, [])

    const getAllProducts = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`)
            setLoading(false)
            setProducts(data?.products)
        } catch (error) {
            setLoading(false)
            console.log(error);
            toast.error("Somethig went wrong while getting all products")
        }
    }

    useEffect(() => {
        if (!checked.length) getAllProducts();
        // eslint-disable-next-line
    }, [checked.length]);

    useEffect(() => {
        if (checked.length) filterProduct()
    }, [checked])
    const handleFilter = (value, id) => {
        let all = [...checked];
        if (value) {
            all.push(id)
        } else {
            all = all.filter(c => c !== id)
        }
        setChecked(all);
    };

    const filterProduct = async () => {
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/product-filters`, { checked })
            setProducts(data?.products);

        } catch (error) {
            console.log(error)
        }
    }
    const getTotalCount = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-count`)
            setTotal(data?.total);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (page === 1) return;
        loadMore();
    }, [page])
    const loadMore = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`)
            setLoading(false)
            setProducts([...products, ...data.products])
        } catch (error) {
            setLoading(false)
            console.log(error)

        }
    }


    return (
        <div>
            <Layout title={"88* -Asthetic clothing brand"}>


                <div className="homepage bg-primary text-white flex-column">
                    <h1 className='head'>Unleash Your Inner Style with Aesthetic Wear</h1>
                    {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
                    <div className="navScroll text-center">
                        <h4 className='mt-5'>Scroll Down</h4>
                        <h4><i className=" bi bi-arrow-down-circle"></i></h4>
                    </div>

                </div>
                {/* <div className="homepage2 bg-primary text-white" >
                    <h3 >Shop</h3>
                </div> */}
                <div className="homepage3 " id="section1">
                    <div className="space"></div>
                    <h1 className="text-center my-3">

                        Inventary
                    </h1>

                    <div className="filter-section my-2 d-flex justify-content-between">
                        <p className="fw-bold">{total} Products</p>
                        <button className="filter-button my-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i class="bi bi-funnel-fill"></i>Filter</button>
                    </div>
                    <div className="product-section ">


                        {products?.map(p => (


                            <div className="product "  data-aos="fade-up">

                                <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} onClick={() => navigate(`/product/${p.slug}`)} />
                                <div className="mx-4 text">
                                    <h5 className=" text-start">{p.name}</h5>
                                    <h6 className=" ">Rs. {p.price}</h6>
                                </div>

                                <button className="btn btn-dark btn-sm align-self-end mx-4"
                                    onClick={()=>{
                                        setCart([...cart,p]);
                                        localStorage.setItem('cart', JSON.stringify([...cart,p]))
                                        toast.success("Item Added Successfully");
                                    }}
                                >Add To Cart
                                </button>

                            </div>

                        ))}




                    </div>
                    <div className="m-5 text-center">
                        {products && products.length < total && (
                            <button className="text-dark loadmore fw-bold"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setPage(page + 1)
                                }
                                }
                            >
                                {loading ? "Loding" : "Loadmore"}<i class="bi bi-chevron-double-down"></i>
                            </button>
                        )}
                    </div>
                </div>
                {/* modal */}
                <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title fs-3" id="offcanvasExampleLabel">Filter</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                        <h5 className="text-center">Filter By category</h5>
                        <div className="text-center my-2 d-flex align-items-center justify-content-center">
                            {
                                categories?.map(c => (
                                    <Checkbox className="fs-5" key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)}>
                                        {c.name}
                                    </Checkbox>
                                )
                                )}
                        </div>
                        <div className="row d-flex justify-content-center my-3">
                            <button className="btn btn-dark btn-sm col-5" onClick={() => window.location.reload()}><i class="bi bi-trash mx-2"></i>Reset Filters</button>
                        </div>


                    </div>
                </div>

            </Layout>

        </div>
    )
}
