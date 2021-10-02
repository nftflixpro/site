import React , { useEffect } from 'react' 
import MovingText from 'react-moving-text'
import './HeroSection.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroSection() {
    useEffect(()=>{
        AOS.init()
    })
    return (
        <>
        <div id="HeroSectionID" style={{display:"flex",flexDirection:"column",justifyContent:"center"}} data-aos="fade-in" className="HeroOutline">
        <div style={{paddingLeft:"5px",paddingRight:"5px"}}>
            <div style={{display:"flex",justifyContent:"center"}}>            
                <div id="HeroID">
                    <div data-aos="fade-in" className="Hero">
                        <h1 id="HeroHeading">
                            <MovingText
                            type="fadeIn"
                            duration="1000ms"
                            delay="0s"
                            direction="normal"
                            timing="ease"
                            iteration="1"
                            fillMode="none">
                            World's first decentralized funding platform for film creators
                            </MovingText>
                        </h1>
                        <h4 id="HeroSubHeading">
                            <MovingText
                            type="fadeIn"
                            duration="4000ms"
                            delay="0s"
                            direction="normal"
                            timing="ease"
                            iteration="1"
                            fillMode="none">
                                <h4>Invest in your favorite creators, get unique NFTs & earn passive royalty from their movie. Who will win? centralized media companies OR thousands of individual creators?</h4>
                                
                            </MovingText>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
