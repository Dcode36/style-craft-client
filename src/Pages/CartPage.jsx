import React from 'react'
import Layout from '../Components/Layout/Layout'
import { useCart } from '../context/cart';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
export default function CartPage(props) {
    const [auth] = useAuth();
    const [cart, setCart] = useCart();
    const navigate = useNavigate();

    //constants

    const removeCartItem = (pid) => {
        try {
            let myCart = [...cart];
            let index = myCart.findIndex(item => item._id === pid);

            myCart.splice(index, 1);
            setCart(myCart);
            localStorage.setItem('cart', JSON.stringify(myCart));
        } catch (error) {
            console.log(error)

        }
    }

    const totalPrice = () => {
        try {
            let total = 0;
            cart?.map(item => { total = total + item.price })
            return total;
        } catch (error) {
            console.log(error)
        }
    }

    // ======> payment <======= //
    let loadScript = async () => {
        return new Promise((resolve, reject) => {
            const scriptElement = document.createElement("script");
            scriptElement.src = "https://checkout.razorpay.com/v1/checkout.js";
            scriptElement.onload = () => {
                resolve(true);
            };
            scriptElement.onerror = () => {
                reject(false);
            };
            document.body.appendChild(scriptElement);
        });
    };

    let paymentHandler = async () => {
        try {
            let isLoaded = await loadScript();
            if (!isLoaded) {
                alert("Unable to load payment SDK");
                return;
            }

            let URL = `${process.env.REACT_APP_API}/api/v1/payments/checkout`;
            let sendData = {
                amount: totalPrice(),
                email: auth?.user?.email,
            };

            let { data } = await axios.post(URL, sendData);
            let { order } = data;

            var options = {
                key: process.env.KEY_ID,
                amount: totalPrice(),
                currency: "INR",
                name: auth?.user?.name,
                description: `Name : ${auth?.user.name}, Address : ${auth?.user.address}, Pincode : ${auth?.user.pincode}`,
                image:
                    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                order_id: order.id,
                handler: async function (response) {
                    try {
                        let URL = `${process.env.REACT_APP_API}/api/v1/payments/callback`;
                        let products = cart.map((p) => ({
                            _id: p._id,
                            name: p.name,
                            slug: p.slug,
                            __v: p.__v,
                        }));
                        let sendData = {
                            payment_id: response.razorpay_payment_id,
                            order_id: response.razorpay_order_id,
                            signature: response.razorpay_signature,
                            cart: { // Add necessary cart data here
                                products: products, // Add products array with product IDs
                                size: "M", // Add the selected size
                                address: auth.user.address, // Add the delivery address
                                quantity: 0, // Add the quantity
                            },
                        };

                        let { data } = await axios.post(URL, sendData);
                        if (data.status === true) {
                            Swal.fire({
                                icon: "success",
                                title: "Payment Successful",
                                text: "Your Order Will be delivered soon",
                            }).then(() => {
                                window.location.assign("/dashboard/user/orders"); // Redirect to the home page
                            });
                        } else {
                            alert("Payment failed, please try again.");
                        }
                    } catch (error) {
                        console.log(error);
                    }
                },
                prefill: {
                    name: auth?.user?.name,
                    email: auth?.user?.email,

                },
                notes: {
                    address: auth?.user?.address,
                },
                theme: {
                    color: "#00000",
                },
            };

            var paymentObject = new window.Razorpay(options);
            paymentObject.open();

            paymentObject.on('payment-success',
                localStorage.removeItem('cart'),

                
            )
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <Layout>
                <div className="space">

                </div>

                <div className="container-fluid">
                    <div className="text-center">
                        <p className='py-3 fw-bold fs-3'>
                            {cart?.length
                                ? `You Have ${cart.length} items in your cart ${auth?.token ? "" : "please login to checkout !"
                                }`
                                : " Your Cart Is Empty"}
                        </p>
                        {/* <h4> {`Hello ${auth?.token && auth?.user?.name}`}</h4> */}

                    </div>


                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-sx-12">
                                {cart?.length ? (
                                    <>
                                        <div className="cart-table">
                                            <table className="table ">
                                                <thead>
                                                    <tr>

                                                        <th scope="col">Product</th>
                                                        <th scope="col">Product Name</th>
                                                        <th scope="col">Price</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        cart?.map((p) => (
                                                            <tr className='my-2'>
                                                                <td className='table-img'>
                                                                    <img
                                                                        src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                                                                        className="card-img-top"
                                                                        alt={p.name}
                                                                        onClick={() => navigate(`/product/${p.slug}`)}
                                                                    />
                                                                </td>

                                                                <td >{p.name} <br /><button className='btn border border-1 btn-sm mt-3'
                                                                    onClick={() => removeCartItem(p._id)}
                                                                >Remove</button></td>
                                                                <td>Rs. {p.price}</td>

                                                            </tr>


                                                        ))
                                                    }

                                                </tbody>
                                            </table>
                                        </div>


                                        <div className="text-end">
                                            <h2 className='fw-bold my-4'>Subtotal Rs.  {totalPrice()}</h2>

                                            {auth?.user?.address ? (
                                                <>
                                                    <p className='fw-bold'>Current Address : </p>
                                                    <p>{auth?.user?.address}</p>
                                                    <button className='btn-checkout bg-dark'
                                                        onClick={() => { navigate("/dashboard/user/profile") }}
                                                    >Update Address</button>
                                                    <button className='btn-checkout bg-dark' onClick={paymentHandler}>CHECK OUT</button>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="mb-3">
                                                        {
                                                            auth?.token ? (
                                                                <>
                                                                    <button className='btn-checkout bg-dark'
                                                                        onClick={() => { navigate("/dashboard/user/profile") }}
                                                                    >Update Address</button>
                                                                    <button className='btn-checkout bg-dark' onClick={paymentHandler}>CHECK OUT</button>
                                                                </>

                                                            ) : (
                                                                <button className='brn btn-sm btn-checkout bg-dark'
                                                                    onClick={() => {
                                                                        navigate("/login", {
                                                                            state: "/cart"
                                                                        })
                                                                    }}
                                                                >Please Login To check Out</button>
                                                            )
                                                        }
                                                    </div>
                                                </>
                                            )}

                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <p className='text-center fw-bold fs-1'>Oops! It seems You havent't put items in your cart</p>
                                    </>
                                )}


                            </div>

                        </div>
                    </div>
                </div>

            </Layout>

        </div>
    )
}
