import React, { useState, useEffect } from 'react'
import Layout from '../Components/Layout/Layout'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useCart } from "../context/cart";
import { Collapse } from 'antd';
const { Panel } = Collapse;
export default function ProductDetails() {
    const navigate = useNavigate();
    const [cart, setCart] = useCart();
    const params = useParams();
    const [product, setProduct] = useState({});
    const [realatedProducts, setRelatedProudcts] = useState([]);

    const getProduct = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`);
            setProduct(data?.product);
            getSimilerProduct(data?.product._id, data?.product.category._id);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (params?.slug) getProduct()
    }, [params?.slug]);


    const getSimilerProduct = async (pid, cid) => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/related-product/${pid}/${cid}`)
            setRelatedProudcts(data?.products)
        } catch (error) {
            console.log(error);


        }
    }
    return (
        <div>
            <Layout title={"Product Details"}>
                <div className="space"></div>

                <div className="search-product-section py-5 row d-flex justify-content-center ">
                    <div className="col-10">
                        <div className="product-Detail">
                            <div className=" product-Detail-img" data-aos="fade-up">
                                <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`} alt={product.name} type="button" data-bs-toggle="modal" data-bs-target="#productMoel" />
                            </div>
                            <div className="product-data">
                                <div className="mx-4   data" data-aos="fade-up">
                                    <h1 className='fw-bold my-2'>{product.name}</ h1>
                                    <h3 className='py-2'>Rs. {product.price}</ h3>
                                    <p className='text-primary'>Free Delivery</p>


                                    <Collapse defaultActiveKey={['1']} >
                                        <Panel header="Description" className='f bg-light' key="1">
                                            <p>{product.description}</p>
                                        </Panel>
                                    </Collapse>

                                    {/* <p><b>Category: </b>{product.category.name}</p> */}
                                    <p className='py-2 graycolor fw-light'><b className='text-dark my-2 fw-bold'>Wash Care</b> <br />
                                        <br />
                                        MACHINE WASH UP TO 30ºC/86ºF GENTLE CYCLE <br />

                                        DO NOT BLEACH <br />

                                        IRON UP TO 110ºC/230ºF <br />

                                        DO NOT DRY CLEAN <br />

                                        TUMBLE DRY LOW</p>
                                    <div className="buttons d-flex justify-content-centr flex-column">
                                        <button className='add-to-cart my-2'
                                            onClick={() => {
                                                setCart([...cart, product]);
                                                localStorage.setItem('cart', JSON.stringify([...cart, product]))
                                                toast.success("Item Added Successfully");
                                            }}
                                        >Add to Cart</button>
                                        <button className='buy-now my-2' onClick={() => {
                                            setCart([...cart, product]);
                                            localStorage.setItem('cart', JSON.stringify([...cart, product]))
                                            navigate("/cart")
                                        }}>Buy Now</button>
                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="space"></div>
                    <hr />
                    <div className="py-3"></div>
                    <h1 className="text-center my-4 fw-bold">You May Also Like</h1>
                    {realatedProducts.length < 1 && (<p className='text-center'>No similer proudct Found</p>)}
                    <div className="product-section ">


                        {realatedProducts?.map(p => (

                            <>
                                <div className="product " data-aos="fade-up">

                                    <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} onClick={() => navigate(`/product/${p.slug}`)} className="w-100" alt={p.name} />
                                    <div className="mx-4">
                                        <h5 className=" text-start">{p.name}</h5>
                                        <h6 className=" ">Rs. {p.price}</h6>
                                    </div>

                                    <button className="btn btn-dark btn-sm align-self-end mx-4"
                                        onClick={() => {
                                            setCart([...cart, p]);
                                            localStorage.setItem('cart', JSON.stringify([...cart, p]))
                                            toast.success("Item Added Successfully");
                                        }}
                                    >Add To Cart</button>

                                </div>
                            </>


                        ))}




                    </div>
                </div>
                <div className="modal fade" id="productMoel" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl  modal-fullscreen-sm-down" data-bs-dismiss="modal" aria-label="Close"  >
                        <div className="modal-content">

                            

                                <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`} className="card-img-top " alt={product.name} />

                           

                        </div>
                    </div>
                </div>


            </Layout>

        </div>
    )
}
