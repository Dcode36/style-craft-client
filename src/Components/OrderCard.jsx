import React from 'react'

const OrderCard = ({
    address,
    createdAt,
    payment,
    products,
    quantity,
    size,
    status,
}) => {

    return (
        <div className='m-2'>
            <div class="order-card p-2" style={{ maxHeight: "100%", minHeight: "200px", width: "100%" }}>
                <div className='m-4 row'>
                    <div className='col-lg-6 col-md-5 col-sm-10 col-xs-12'>
                        <h6 class="">Product Name: <p className='fw-bolder'>{products[0].name}</p></h6>
                        <h6 class="">Order Date:
                            <p className='fw-bolder'>
                                {createdAt.slice(0, 10)}
                            </p>
                        </h6>
                        <h6 class="">Price: <p className='fw-bolder'>{products[0]._id.price}</p></h6>
                        <h6 class="">Order Id:
                            <p className='fw-bolder'>{payment.razorpay_order_id}</p>
                        </h6>
                        <h6 class="">Size: <p className='fw-bolder'>{size}</p></h6>
                        <h6 class="">Delivery Address: <p className='fw-bolder'>{address}</p></h6>
                        <h6 class="">Status: <p className='fw-bolder'>{status}</p></h6>
                    </div>

                    <div class="order-image col-lg-6 col-md-5 col-sm-10 col-xs-12">
                        <img
                            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${products[0]._id._id}`}
                            alt={products[0].name}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OrderCard
