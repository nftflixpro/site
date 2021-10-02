import React,{ useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './FeaturedIn.css';
import img1 from '../../img/coindoo.png'
import img2 from '../../img/bencrypto.jpeg'
import MovingText from 'react-moving-text'

export default function FeaturedIn() {
    useEffect(()=>{
        AOS.init()
    })
    return (
        <div data-aos="fade-in" className="FeaturedIn" id="FeaturedInID">
            <div style={{paddingLeft:"5px",paddingRight:"5px"}}>
            <div>
                <h1 style={{"fontWeight":"600"}}>
                <MovingText
                    type="fadeIn"
                    duration="2000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    Featured In
                    </MovingText>
                </h1>
            </div>
            
            <MovingText
                    type="fadeIn"
                    duration="3000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                <div className="FeaturedList">
                <div><img src={img1} className="FeatureImg" alt=""/></div>
                <div><img src={img2} className="FeatureImg" alt=""/></div>
                <div><img src={img2} className="FeatureImg" alt=""/></div>
                <div><img src={img2} className="FeatureImg" alt=""/></div>
                <div><img src={img2} className="FeatureImg" alt=""/></div>
                <div><img src={img2} className="FeatureImg" alt=""/></div>
                <div><img src={img2} className="FeatureImg" alt=""/></div>
                </div>
            </MovingText>
            </div>
        </div>
    )
}
