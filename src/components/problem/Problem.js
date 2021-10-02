import React,{ useEffect } from 'react'
import MovingText from 'react-moving-text'
import AOS from 'aos';
import './Problem.css'
import 'aos/dist/aos.css';
import listImg from '../../img/tick.png'

export default function Problem() {
    useEffect(()=>{
        AOS.init()
    })
    return (
        <div style={{display:"block",margin:"auto",maxWidth:"1100px"}} id="ProblemID">
        <div style={{paddingLeft:"5px",paddingRight:"5px"}}>   
        <div className="Arranger" data-aos="fadeIn">
             <div data-aos="fade-up" className="Problem">
                <div>
                    <h1 style={{"fontWeight":"600"}}>
                    <MovingText
                        type="fadeIn"
                        duration="3000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                        The Problem
                        </MovingText>
                    </h1>
                </div>
                
                <MovingText
                        type="fadeIn"
                        duration="4000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                    <div style={{display:"flex"}}>
                    <ul className="ProblemList">
                        <li>Artists & Film cretors work hard to create their Art.</li>
                        <li>Most of it get’s unotices due to bad marketing,</li>
                        <li>And them not being able to stand up against Industry Moguls.</li>
                    </ul>
                    </div>
                </MovingText>
            </div>
            <div data-aos="fade-up" className="Solution">
                <div>
                    <h1 style={{"fontWeight":"600"}}>
                    <MovingText
                        type="fadeIn"
                        duration="3000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                        The Solution
                        </MovingText>
                    </h1>
                </div>
                
                <MovingText
                        type="fadeIn"
                        duration="4000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                    <div style={{display:"flex"}}>
                    <ul className="SolutionList">
                        <li>Decentralized Community to support Artists get recognition for their work</li>
                        <li>By getting funded for their films</li>
                        <li>Get Traction & Marketing support from community</li>
                        <li>Break into an highly monopolistic Industry with power of community</li>
                    </ul>
                    </div>
                </MovingText>
            </div>
        </div>
        </div>
        </div>
    )
}
