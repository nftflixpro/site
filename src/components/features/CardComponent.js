import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../../img/Features4.jpg'

export default function CardComponent(props) {
    // var img=require(props.img.toString())
    console.log(props.img);
    return (
        <div>
            <div id="FeatureID" className="FeatureContainer">
            <div data-aos="fade-up" className="Features">
            <div>
                <h1 style={{"fontWeight":"600"}}>
                        <img src={require( `${ props.img }` )} className="FeaturesImg" alt=""></img>
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
        </div>
    )
}
