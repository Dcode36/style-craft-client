import React from 'react'
import Layout from '../Components/Layout/Layout'

export default function Policy() {
  return (
    <div>
      <Layout title={"Policy"}>
        <div className="space"></div>
        <div className="container">
          <h1 className='text-center fw-bold py-3'>Policy</h1>
          <div className="row d-flex justify-content-center align-items-center" >
            <p className='col-10 fs-5'>
          <b>1. Shipping:</b>     We offer worldwide shipping to ensure that our customers can enjoy our t-shirts no matter where they are. Please allow 1-3 business days for order processing before shipment. Shipping times may vary depending on your location.
              <br /><br />
           <b>2. Returns and Exchanges:</b>    We want you to be completely satisfied with your purchase. If for any reason you are not happy with your t-shirt, you may return it within 30 days of receipt for a refund or exchange. The item must be unused, in its original packaging, and in the same condition as when you received it.
              <br /><br />
           <b>3. Privacy:</b>    We value your privacy and handle your personal information with the utmost care. We only collect necessary information to process your order and provide excellent customer service. We do not share or sell your data to third parties.
              <br /><br />
              <b>4. Payment Security:</b> We utilize secure payment gateways to ensure the safety of your financial information. We accept major credit cards, as well as PayPal, for a convenient and secure checkout process.
            </p>
          </div>

        </div>
      </Layout>
    </div>
  )
}
