import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import axios from 'axios'

export default function CategoryProduct() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);

    const navigate = useNavigate();

    const params = useParams();
    const getProductsByCat = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`);
            setProducts(data?.products);
            setCategory(data?.category);
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        if (params?.slug) getProductsByCat();
    }, [params?.slug])
    return (
        <div>
            <Layout title={category.name}>
                <div className="space"></div>

                <h3 className='text-center fw-bold py-3'>Category - {category.name}</h3>
                <p className='text-center pb-5'>{products.length} results Found</p>
                <div className="product-section ">


                    {products?.map(p => (


                        <div className="product " >

                            <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} onClick={() => navigate(`/product/${p.slug}`)} />
                            <div className="mx-4">
                                <h5 className=" text-start">{p.name}</h5>
                                <h6 className=" ">Rs. {p.price}</h6>
                            </div>

                            <button className="btn btn-dark btn-sm align-self-end mx-4">Add To Cart</button>

                        </div>

                    ))}




                </div>
                
            </Layout>

        </div>
    )
}
