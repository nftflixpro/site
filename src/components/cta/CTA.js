import React,{ useEffect } from 'react'
import './CTA.css'
import MovingText from 'react-moving-text'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CTA() {
    useEffect(()=>{
        AOS.init()
    })
    return (
        <div id="CTAID" className="CTAContainer">
        <div style={{paddingLeft:"5px",paddingRight:"5px"}}>
            {/* <img src={img1} className="CTAImg"/> */}
            <div data-aos="fade-up" className="CTA">
            <div>
                <h1 style={{"fontWeight":"600"}}>
                <MovingText
                    type="fadeIn"
                    duration="8000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    Start earning passive royalty today!
                    </MovingText>
                </h1>
            </div>
            
            <MovingText
                    type="fadeIn"
                    duration="8000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                <div style={{display:"flex",justifyContent:"center"}}>
                <div id="CTAButton"><p style={{color:"white"}}>Fund Top Movies</p></div>
                </div>
            </MovingText>
        </div>
        </div>
        </div>
    )
}
