import React,{ useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Team.css'
import img from '../../img/1.jpg'
import insta from '../../img/insta.png'
import linkedin from '../../img/linkedin.png'

export default function Team() {
    useEffect(()=>{
        AOS.init()
    })
    return (
        <div style={{display:"block",margin:"auto",maxWidth:"1100px"}}>
        <div style={{paddingLeft:"5px",paddingRight:"5px"}}>
        <div data-aos="fadeIn" className="Team" id="TeamID">
        <div style={{marginBottom:"30px",color:"white"}}>
            <h1><b>Team</b></h1>
        </div>
        <div className="TeamMembers">
            <div className="TeamDetails">
                <img src={img} className="TeamImg" alt=""></img>
                <h2>Rakesh Yadav</h2>
                <h4>Senior Developer</h4>
                <p>7+ Years Node JS Experience</p>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <img src={insta} className="TeamIcon" alt=""></img>
                    <img src={linkedin} className="TeamIcon" alt=""></img>
                </div>
            </div>
            <div className="TeamDetails">
                <img src={img} className="TeamImg" alt=""></img>
                <h2>Mukesh Parikh</h2>
                <h4>CMO</h4>
                <p>Strong Industry Network</p>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <img src={insta} className="TeamIcon" alt=""></img>
                    <img src={linkedin} className="TeamIcon" alt=""></img>
                </div>
            </div>
            <div className="TeamDetails">
                <img src={img} className="TeamImg" alt=""></img>
                <h2>Parag Shah</h2>
                <h4>CEO</h4>
                <p>In Blockchain Since 2014</p>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <img src={insta} className="TeamIcon" alt=""></img>
                    <img src={linkedin} className="TeamIcon" alt=""></img>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    )
}
