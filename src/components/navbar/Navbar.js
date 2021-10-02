import React,{ useEffect } from 'react'
import { Navbar,Button,Nav } from 'react-bootstrap'
import Headroom from "headroom.js";
import './Navbar.css'

export default function CNavbar() {
    useEffect(() => {
        var myElement = document.getElementsByClassName("ProjectNav")[0];
        var headroom  = new Headroom(myElement);
        headroom.init();
        myElement = document.getElementsByClassName("ProjectNav")[1];
        headroom  = new Headroom(myElement);
        headroom.init();

        // for the navbar transperancy 
        // window.scroll(()=>{
            window.onscroll = () =>{
                let tempNav=document.getElementsByClassName("ProjectNav")
                let tempNavButton1=document.getElementsByClassName("NavButton1")
                // let tempNavButton2=document.getElementsByClassName("NavButton2")
                if(window.pageYOffset>50){
                    tempNav[0].classList.remove("navbar-dark")
                    tempNav[0].classList.add("opaque-color-nav")
                    tempNav[1].classList.remove("navbar-dark")
                    tempNav[1].classList.add("opaque-color-nav")
                    tempNavButton1[0].classList.remove("btn-outline-light")
                    tempNavButton1[0].classList.add("btn-outline-dark")
                    // tempNavButton2[0].classList.remove("btn-light")
                    // tempNavButton2[0].classList.add("btn-dark")
                    tempNavButton1[1].classList.remove("btn-outline-light")
                    tempNavButton1[1].classList.add("btn-outline-dark")
                    // tempNavButton2[1].classList.remove("btn-light")
                    // tempNavButton2[1].classList.add("btn-dark")
                }
                else{
                    tempNav[0].classList.remove("opaque-color-nav")
                    tempNav[0].classList.add("navbar-dark")
                    tempNav[1].classList.add("navbar-dark")
                    tempNav[1].classList.remove("opaque-color-nav")
                    tempNavButton1[0].classList.add("btn-outline-light")
                    tempNavButton1[0].classList.remove("btn-outline-dark")
                    tempNavButton1[1].classList.add("btn-outline-light")
                    tempNavButton1[1].classList.remove("btn-outline-dark")
                    // tempNavButton2[0].classList.remove("btn-dark")
                    // tempNavButton2[0].classList.add("btn-light")
                    // tempNavButton2[1].classList.remove("btn-dark")
                    // tempNavButton2[1].classList.add("btn-light")
                }
            }
    })

    function TransperancyHandler(){
        let tempNav=document.getElementsByClassName("ProjectNav")
        let tempNavButton1=document.getElementsByClassName("NavButton1")
        // let tempNavButton2=document.getElementsByClassName("NavButton2")
        tempNav[0].classList.remove("navbar-dark")
        tempNav[0].classList.add("opaque-color-nav")
        tempNav[1].classList.remove("navbar-dark")
        tempNav[1].classList.add("opaque-color-nav")
        tempNavButton1[0].classList.remove("btn-outline-light")
        tempNavButton1[0].classList.add("btn-outline-dark")
        // tempNavButton2[0].classList.remove("btn-light")
        // tempNavButton2[0].classList.add("btn-dark")
        tempNavButton1[1].classList.remove("btn-outline-light")
        tempNavButton1[1].classList.add("btn-outline-dark")
        // tempNavButton2[1].classList.remove("btn-light")
        // tempNavButton2[1].classList.add("btn-dark")
    }
    return (
    <>
        <Navbar id="MobileNav" className=" ProjectNav transperant-color-nav navbar-dark" collapseOnSelect fixed="top" style={{justifyContent:"space-between",minWidth:"80%",paddingLeft:"5px",paddingRight:"5px"}}>
            <div style={{"paddingLeft":"15px"}}>
                <Navbar.Brand href="#">
                        NFTFLIXPRO
                </Navbar.Brand>
            </div>
            {/* <div>
                <Navbar.Toggle onClick={TransperancyHandler}/>
            </div> */}
                {/* <div> */}
                {/* <Navbar.Collapse> */}
                    <Nav>
                        {/* <Nav.Link href="/#FeaturedInID" style={{marginTop:"7px",marginLeft:"10px"}}>Featured In</Nav.Link>
                        <Nav.Link href="/#BackedByID" style={{marginTop:"7px",marginLeft:"10px"}}>Backed By</Nav.Link>
                        <Nav.Link href="/#FeaturesID" style={{marginTop:"7px",marginLeft:"10px"}}>Features</Nav.Link>
                        <Nav.Link href="/#TokenID" style={{marginTop:"7px",marginLeft:"10px"}}>Tokenomics</Nav.Link>
                        <Nav.Link href="/#ProblemID" style={{marginTop:"7px",marginLeft:"10px"}}>Problem</Nav.Link>
                        <Nav.Link href="/#ProblemID" style={{marginTop:"7px",marginLeft:"10px"}}>Solution</Nav.Link>
                        <Nav.Link href="/#RoadmapID" style={{marginTop:"7px",marginLeft:"10px"}}>Roadmap</Nav.Link>
                        <Nav.Link href="/#TeamID" style={{marginTop:"7px",marginLeft:"10px"}}>Team</Nav.Link>
                        <Nav.Link href="/#FAQID" style={{marginTop:"7px",marginLeft:"10px"}}>FAQs</Nav.Link> */}
                        <Nav.Link href="*" style={{marginLeft:"10px"}}>
                        <Button variant="outline-light" className="NavButton1">Download White Paper</Button>                           
                        </Nav.Link>
                        {/* <Nav.Link href="/#CTAID" style={{marginLeft:"10px"}}>
                        <Button variant="light" className="NavButton2">Fund Top Movies</Button>                           
                        </Nav.Link> */}
                    </Nav>
                {/* </Navbar.Collapse> */}
        </Navbar>

        <Navbar id="DesktopNav" className="ProjectNav transperant-color-nav navbar-dark" expand="true" collapseOnSelect fixed="top" style={{flexDirection:"column",justifyContent:"center"}}>
            <div style={{display:"flex",minWidth:"70%", justifyContent:"space-between"}}>
            <div style={{"paddingLeft":"15px","paddingTop":"12px",paddingRight:"2px"}}>
                <Navbar.Brand href="#">NFTFLIXPRO</Navbar.Brand>
            </div>
                    <Nav>
                        {/* <Nav.Link href="/#FeaturedInID" className="NavContent">FeaturedIn</Nav.Link>
                        <Nav.Link href="/#BackedByID" className="NavContent">BackedBy</Nav.Link>
                        <Nav.Link href="/#FeaturesID" className="NavContent">Features</Nav.Link>
                        <Nav.Link href="/#TokenID" className="NavContent">Tokenomics</Nav.Link>
                        <Nav.Link href="/#ProblemID" className="NavContent">Problem</Nav.Link>
                        <Nav.Link href="/#ProblemID" className="NavContent">Solution</Nav.Link>
                        <Nav.Link href="/#RoadmapID" className="NavContent">Roadmap</Nav.Link>
                        <Nav.Link href="/#TeamID" className="NavContent">Team</Nav.Link>
                        <Nav.Link href="/#FAQID" className="NavContent">FAQs</Nav.Link> */}
                        <Nav.Link href="*" style={{marginLeft:"-5px"}}>
                        <Button variant="outline-light" className="NavButton1">Download WhitePaper</Button>                           
                        </Nav.Link>
                        {/* <Nav.Link href="/#CTAID" style={{marginLeft:"-12px"}}>
                        <Button variant="light" className="NavButton2">Fund Top Movies</Button>                           
                        </Nav.Link> */}
                    </Nav>
                </div>
        </Navbar>
    </>
    )
}