import React,{ useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card } from "react-bootstrap";
import MovingText from 'react-moving-text'
import './Features.css'
import img1 from '../../img/Features1.jpg'
import img2 from '../../img/Features2.jpg'
import img3 from '../../img/Features3.jpg'
import img4 from '../../img/Features4.jpg'
// import CardComponent from './CardComponent';

export default function Features() {
    useEffect(()=>{
        AOS.init()
    })
    return (
        <div data-aos="fade-in" id="FeaturesID">
            <div className="FeatureHeading">
                <h1 style={{"fontWeight":"600","marginBottom":"30px"}}>
                <MovingText
                    type="fadeIn"
                    duration="3000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    Crypto Related Features:
                    </MovingText>
                </h1>
            </div>
        <div className="FeaturesBox" >
            {/* <div> */}
            {/*
            <MovingText
                    type="fadeIn"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                <div className="FeaturesList">
                    <div data-aos="fade-in" className="col d-flex justify-content-center ">
                        <Card style={{ width: '18rem',paddingLeft:"15px",paddingRight:"15px",marginTop:"15px" }} className="FeatureContent">
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Auto Staking</Card.Title>
                                <Card.Text>
                                Invest in your favorite creators and earn passive rewards for life as royalty from their film sales.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div data-aos="fade-in" className="col d-flex justify-content-center ">
                        <Card style={{ width: '18rem',paddingLeft:"15px",paddingRight:"15px",marginTop:"15px" }} className="FeatureContent">
                            <Card.Img variant="top" src={img2} />   
                            <Card.Body>
                                <Card.Title>Deflationary</Card.Title>
                                <Card.Text>
                                2% fees is added to each transaction and 1% fees is distributed equally to all token holders. 1% fee is burned forever which Increases value of each token.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div data-aos="fade-in" className="col d-flex justify-content-center">
                        <Card style={{ width: '18rem',paddingLeft:"15px",paddingRight:"15px",marginTop:"15px" }} className="FeatureContent">
                            <Card.Body>
                                <Card.Img variant="top" src={img3} />
                                <Card.Title>Earn Royalties</Card.Title>
                                <Card.Text>
                                Earn life time royalties on your favorite creator calculated based on your weighted average. everyone wins together!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div data-aos="fade-in" className="col d-flex justify-content-center">
                        <Card style={{ width: '18rem',paddingLeft:"15px",paddingRight:"15px",marginTop:"15px" }} className="FeatureContent">
                            <Card.Body>
                            <Card.Img variant="top" src={img4} />
                                <Card.Title>Film Launchpad</Card.Title>
                                <Card.Text>
                                Our exclusive launchpad, allows creators to launch films & earn income by earning royalties for lifetime.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </MovingText>
            </div> */}
        <div id="FeatureID" className="FeatureContainer">
            <div data-aos="fade-up" className="Features">
            <div>
                <img src={img1} className="FeaturesImg" alt=""></img>
            </div>
        </div>
            <div data-aos="fade-up" className="Features">
            <div>
                <h1 style={{"fontWeight":"600"}}>
                Auto Staking
                </h1>
                <h4 style={{textOverflow:"-moz-initial"}}>
                Invest in your favorite creators and earn passive rewards for life as royalty from their film sales.
                </h4>
            </div>
        </div>
        </div>

        <div id="FeatureID" className="FeatureContainer">
            <div data-aos="fade-up" className="Features">
            <div>
                <h1 style={{"fontWeight":"600"}}>
                        <img src={img2} className="FeaturesImg" alt=""></img>
                </h1>
            </div>
        </div>
            <div data-aos="fade-up" className="Features">
            <div>
                <h1 style={{"fontWeight":"600"}}>
                Deflationary
                </h1>
                <h4 style={{textOverflow:"-moz-initial"}}>
                2% fees is added to each transaction and 1% fees is distributed equally to all token holders. 1% fee is burned forever which Increases value of each token.
                </h4>
            </div>
        </div>
        </div>

        <div id="FeatureID" className="FeatureContainer">
            <div data-aos="fade-up" className="Features">
            <div>
                <h1 style={{"fontWeight":"600"}}>
                        <img src={img3} className="FeaturesImg" alt=""></img>
                </h1>
            </div>
        </div>
            <div data-aos="fade-up" className="Features">
            <div>
                <h1 style={{"fontWeight":"600"}}>
                Earn Royalties
                </h1>
                <h4 style={{textOverflow:"-moz-initial"}}>
                Earn life time royalties on your favorite creator calculated based on your weighted average. everyone wins together!
                </h4>
            </div>
        </div>
        </div>

        <div id="FeatureID" className="FeatureContainer">
            <div data-aos="fade-up" className="Features">
            <div>
                <h1 style={{"fontWeight":"600"}}>
                        <img src={img4} className="FeaturesImg" alt=""></img>
                </h1>
            </div>
        </div>
            <div data-aos="fade-up" className="Features">
            <div>
                <h1 style={{"fontWeight":"600"}}>
                Film Launchpad
                </h1>
                <h4 style={{textOverflow:"-moz-initial"}}>
                Our exclusive launchpad, allows creators to launch films & earn income by earning royalties for lifetime.
                </h4>
            </div>
        </div>
        </div>

        {/* <CardComponent img="../../img/Features4.jpg"/> */}

        </div>
        </div>
    )
}
