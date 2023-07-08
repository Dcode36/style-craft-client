import React, { useState, useEffect } from 'react'
import AdminMenu from '../../Components/Layout/AdminMenu'
import Layout from '../../Components/Layout/Layout'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Layout/Footer'
export default function Product() {
 
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`)
            setProducts(data?.products)
        } catch (error) {
            console.log(error);
            toast.error("Somethig went wrong while getting all products")
        }
    }

    useEffect(() => {
        getAllProducts();
    }, [])
    return (
        <div>

            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                    <AdminMenu />
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
                    <h1 className='text-center  fw-bold my-5'>All product ListsProducts</h1>
                    <p className='text-center fw-bold fs-5'>{products.length} Products</p>
                    <div className="d-flex gap-2 flex-wrap justify-content-center overflow-y-scroll ">
                    
                        {products?.map(p => (
                            <Link to={`/dashboard/admin/product/${p.slug}`} key={p._id}>
                                <div className="card col-lg-12 col-md-12 col-sm-6 col-xs-6 overflow-y-scroll" style={{ width: '18rem' }} >
                                    <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{p.name}</h5>
                                        <p className="card-text">{p.description}</p>
                                        <p className="card-text">Rs. {p.price}</p>

                                    </div>
                                </div>
                            </Link>

                        ))}
                    </div>



                </div>
            </div>
            <Footer />

        </div>
    )
}
