import React from 'react'
import { Carousel } from 'antd';
const contentStyle = {
    height: '20vh',
    color: '#fff',
    lineHeight: '20vh',
    textAlign: 'center',
    // background: '#000',
    width: '100%'
};
export default function Carouel() {
    return (
        <div>
            <Carousel effect="fade" autoplay>
                <div>
                    <h3 style={contentStyle}>"Stylecraft: Redefining Fashion."</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>"Stylecraft: Where Style Meets Comfort."</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>"Stylecraft: Unleash Your Fashion Persona."</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>"Stylecraft: Elevate Your Wardrobe Game."</h3>
                </div>
            </Carousel>
        </div>
    )
}
