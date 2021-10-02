import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import insta from '../../img/instaColor.png'
import linkedin from '../../img/linkedinColor.png'

export default function Footer() {

    const description = "connect";
  const title = "Get in touch";
  const columns = [
 ];

    return (
        <div>
            <MDBFooter color="black" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left" style={{maxWidth:"1100px"}}>
                <MDBRow>
                <MDBCol md="6">
                    <h4 className="title">Get in touch</h4>
                    <p>
                    contact@nftproswap.com
                    </p>
                </MDBCol>
                <MDBCol md="6">
                    <a><img src={insta} style={{height:"auto",width:"auto",maxHeight:"50px",maxWidth:"50px",matginLeft:"30px"}}></img></a>
                    <a><img src={linkedin} style={{height:"auto",width:"auto",maxHeight:"50px",maxWidth:"50px",matginLeft:"30px"}}></img></a>      
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href=""> NFTPROSWAP </a>
                </MDBContainer>
            </div>
            </MDBFooter>
        </div>
    )
}
