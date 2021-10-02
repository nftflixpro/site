import React,{ useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PieChart } from 'react-minimal-pie-chart';
import './Tokenomics.css'
export default function Tokenomics() {
    useEffect(()=>{
        AOS.init()
    })

    return (
        <>
        <div style={{paddingLeft:"5px",paddingRight:"5px"}}>
        <h1 style={{marginTop:"30px",marginBottom:"30px",fontWeight:"600",textAlign:"center"}}>Tokenomics</h1>
        <div data-aos="fadeIn" className="Tokenomics" id="TokenID">
            
            <div className="TokenomicsContent">
                <div id="TokenomicsTemp" style={{display:"flex",justifyContent:"center"}}>

            <div id="TokenomicsChart">
                <div>
                    <PieChart
                        data={[
                            { title: 'Team and advisor', value: 10, color: 'rgb(72, 22, 189)' },
                            { title: 'Operations', value: 5, color: 'rgba(178, 189, 22' },
                            { title: 'Reserve', value: 2.42, color: '#6A2135' },
                            { title: 'Airdrop/Bounty', value: 2, color: 'aqua' },
                            { title: 'Private Sale', value: 20, color: 'rgb(255, 174, 0)' },
                            { title: 'Public Sale', value: 23.58, color: 'rgb(52, 144, 29)' },
                            { title: 'Exchange Liquidity', value: 5, color: 'rgb(22, 142, 189)' },
                            { title: 'Liquidity mining and staking', value: 23.58, color: 'rgb(189, 22, 139)' },
                        ]}
                        animate="true"
                        />
                </div>
            </div>
                <div className="TokenomicsKey">
                        <div className="TokenomicsKeyValues">
                            <div className="TokenomicsColor" style={{backgroundColor:"rgb(72, 22, 189)"}}></div>
                            <div style={{marginLeft:"10px"}}><p>Team and advisor</p></div>
                        </div>
                        <div className="TokenomicsKeyValues">
                            <div className="TokenomicsColor" style={{backgroundColor:"rgba(178, 189, 22"}}></div>
                            <div style={{marginLeft:"10px"}}><p>Operations</p></div>
                        </div>
                        <div className="TokenomicsKeyValues">
                            <div className="TokenomicsColor" style={{backgroundColor:"#6A2135"}}></div>
                            <div style={{marginLeft:"10px"}}><p>Reserve</p></div>
                        </div>
                        <div className="TokenomicsKeyValues">
                            <div className="TokenomicsColor" style={{backgroundColor:"aqua"}}></div>
                            <div style={{marginLeft:"10px"}}><p>Airdrop/Bounty</p></div>
                        </div>
                        <div className="TokenomicsKeyValues">
                            <div className="TokenomicsColor" style={{backgroundColor:"rgb(255, 174, 0)"}}></div>
                            <div style={{marginLeft:"10px"}}><p>Private Sale</p></div>
                        </div>
                        <div className="TokenomicsKeyValues">
                            <div className="TokenomicsColor" style={{backgroundColor:"rgb(52, 144, 29)"}}></div>
                            <div style={{marginLeft:"10px"}}><p>Public Sale</p></div>
                        </div>
                        <div className="TokenomicsKeyValues">
                            <div className="TokenomicsColor" style={{backgroundColor:"rgb(22, 142, 189)"}}></div>
                            <div style={{marginLeft:"10px"}}><p>Exchange Liquidity</p></div>
                        </div>
                        <div className="TokenomicsKeyValues" style={{marginBottom:"17px"}}>
                            <div className="TokenomicsColor" style={{backgroundColor:"rgb(189, 22, 139)"}}></div>
                            <div style={{marginLeft:"10px"}}><p>Liquidity mining and staking</p></div>
                        </div>
                </div>
            </div>
             </div>
                <div data-aos="fadeIn">
                    <h4>Total tokens : 80,000,000</h4>
                </div>
        </div>
        </div>
    </>
    )
}
