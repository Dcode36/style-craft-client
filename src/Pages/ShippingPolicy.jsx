import React from 'react'
import Layout from '../Components/Layout/Layout'

export default function ShippingPolicy() {
    return (
        <div>
            <Layout title={"Shipping Policy"}>

                <div className="space"></div>
                <div className="container">
                    <h1 className='text-center fw-bold py-3'>Shipping Policy</h1>
                    <div className="row d-flex justify-content-center align-items-center" >
                        <p className='col-10 fs-5'>
                            At StyleCraft Threads, we strive to provide timely and reliable shipping services to ensure you receive your t-shirts in a convenient and efficient manner. Please read our shipping policy guidelines outlined below:
                            <br /><br />
                            1. Processing Time:
                            - We process orders within 1-3 business days from the date of purchase. During peak seasons or promotional periods, processing times may be slightly extended. We appreciate your patience during such times.
                            <br /><br />
                            2. Shipping Methods:
                            - We offer various shipping methods to cater to different delivery needs. The available shipping options will be displayed during the checkout process. The shipping methods may include standard shipping, express shipping, or any other available options based on your location.
                            <br /><br />
                            3. Shipping Costs:
                            - Shipping costs are determined based on several factors, including the destination, shipping method selected, and the total weight of the package. The shipping fees will be calculated and displayed during the checkout process. We strive to provide competitive and fair shipping rates.
                            <br /><br />
                            4. Delivery Time:
                            - The delivery timeframes depend on the shipping method chosen and the destination. Please note that delivery times are estimates and can vary due to factors beyond our control, such as customs processing, weather conditions, or unforeseen delays by the shipping carrier.
                            - Domestic shipping within [Country/Region] typically takes between 3-7 business days. International shipping may take longer, ranging from 7-21 business days, depending on the destination.
                            <br /><br />
                            5. Tracking Information:
                            - Once your order is shipped, we will provide you with a tracking number via email or SMS (if provided during checkout). You can use this tracking number to monitor the progress of your shipment. Please allow a few hours for the tracking information to be updated in the carrier's system.
                            <br /><br />
                            6. Customs and Duties:
                            - For international orders, customs duties, taxes, or import fees may be applicable upon the package's arrival in your country. These additional charges are the responsibility of the customer and are not included in the product or shipping prices. We recommend checking with your local customs office for more information regarding potential fees.
                            <br /><br />
                            7. Order Tracking and Support:
                            - If you have any questions or concerns regarding your shipment, please reach out to our customer support team at [Customer Support Email/Phone]. We will be glad to assist you and provide any necessary information related to tracking or delivery updates.
                            <br /><br />
                            Note: In light of the ongoing COVID-19 pandemic, please understand that there may be unforeseen delays or disruptions in shipping services. We appreciate your understanding and patience during these challenging times.
                            <br /><br />
                            Thank you for choosing StyleCraft Threads. We aim to make your shopping experience enjoyable and ensure your t-shirts are delivered to you promptly and securely.
                        </p>
                    </div>

                </div>
            </Layout>
        </div>
    )
}
