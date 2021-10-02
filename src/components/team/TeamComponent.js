import React from 'react'
import insta from '../../img/insta.png'
import linkedin from '../../img/linkedin.png'

export default function TeamComponent() {
    return (
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
    )
}
