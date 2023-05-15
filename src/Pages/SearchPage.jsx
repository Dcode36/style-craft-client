import React from 'react'
import Layout from '../Components/Layout/Layout'
import { useSearch } from '../context/Search';
import { useNavigate } from 'react-router-dom';
import { useCart } from "../context/cart";
import toast from 'react-hot-toast'

export default function SearchPage() {
    const navigate = useNavigate();
    const [cart, setCart] = useCart();
    const [values, setValues] = useSearch();
    return (
        <Layout title={"Search Results"}>
            <div className="space"></div>
            <div className="container ">
                <div className="text-center">
                    <h1>Search Results</h1>
                    <h6>{values?.results.length < 1 ? "No Products Found" : `Found ${values?.results.length}`}</h6>
                    <div className="product-section ">


                        {values?.results.map(p => (


                            <div className="product " >

                                <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} onClick={() => navigate(`/product/${p.slug}`)} />
                                <div className="mx-4">
                                    <h5 className=" text-start">{p.name}</h5>
                                    <h6 className=" ">Rs. {p.price}</h6>
                                </div>

                                <button className="btn btn-dark btn-sm align-self-end mx-4"
                                    onClick={() => {
                                        setCart([...cart, p]);
                                        toast.success("Item Added Successfully");
                                    }}>Add To Cart</button>

                            </div>

                        ))}




                    </div>
                </div>
            </div>
        </Layout>
    )
}
