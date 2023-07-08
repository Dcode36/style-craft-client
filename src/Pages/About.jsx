import React from 'react'
import Layout from '../Components/Layout/Layout'

export default function About() {
  return (
    <div>
      <Layout title={"About Us"}>
        <div className="space"></div>
        <div className="container">
          <h1 className='text-center fw-bold py-3'>About Us</h1>
          <div className="row d-flex justify-content-center align-items-center" >
            <p className='col-10 fs-5'>
              At <b>StyleCraft</b>, we believe that fashion is more than just clothing; it's a form of self-expression. Our brand is dedicated to creating stylish and trendy t-shirts that allow individuals to showcase their unique personalities and make a statement. We strive to blend creativity, quality, and affordability to deliver exceptional fashion choices for our customers.
              <br />
              <br />
              Our designs are carefully crafted to capture the latest trends, drawing inspiration from various sources such as pop culture, art, music, and street style. We take pride in our attention to detail, ensuring that each t-shirt is made with precision and care. Whether you're looking for a casual everyday tee or a standout piece for a special occasion, we have something for everyone in our diverse collection.
              <br /> <br />
              At <b>StyleCraft</b>, we value sustainability and ethical practices. We prioritize using eco-friendly materials and partnering with manufacturers who share our commitment to reducing our environmental impact. We believe in fair and safe working conditions, ensuring that every person involved in the production process is treated with respect and dignity.
              <br /><br />
              Customer satisfaction is at the heart of our business. We strive to provide an exceptional shopping experience by offering a seamless online platform, secure payment options, and efficient customer service. We want our customers to feel confident and excited about their purchases, knowing they are receiving high-quality products that reflect their personal style.
            </p>
          </div>

        </div>
      </Layout>
    </div>
  )
}
