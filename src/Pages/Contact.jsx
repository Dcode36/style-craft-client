import React from 'react'
import Layout from '../Components/Layout/Layout'

export default function Contact() {
  return (
    <div>
      <Layout title={"Contact Us "}>
        <div className="space"></div>
        <div className="container">
          <h1 className='text-center fw-bold py-3'>Contact Us</h1>
          <div className="row d-flex justify-content-center align-items-center" >
            <p className='col-10 fs-5'>
              We would love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to get in touch with us. Here are the ways you can reach us:
        <br /> <br />
           <b>Customer Support Email:</b> kadamdigvijay36@gmail.com <br /> <br />
           <b>Customer Support Phone:</b> 7719964183 <br /> <br />
           <b>Follow us on social media for the latest updates, promotions, and behind-the-scenes peeks:</b><br /><br />
           <b>Instagram:</b> @dcode_06 <br /> <br />
           <b>LinkedIn:</b> Digvijay (Dcode) Kadam <br /><br />
            </p>
          </div>

        </div>
      </Layout>
    </div>
  )
}
