import React,{ useEffect } from 'react'
import './Roadmap.css'
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));
  

export default function Roadmap() {
    const classes = useStyles();
    useEffect(()=>{
        AOS.init()
    })
    return (
        <div style={{marginTop:"30px",marginBottom:"30px"}}>
        <div style={{paddingLeft:"5px",paddingRight:"5px"}}>
        <div id="RoadmapID" style={{display:"block",margin:"auto",maxWidth:"1100px"}}>
        <div data-aos="fadeIn" id="desktopRoadmap">
            <div style={{textAlign:"center",marginBottom:"20px"}}>
                <h1>Roadmap</h1>
            </div>
            <Timeline align="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                <Typography color="textSecondary">
                    <h4><b>Q4 2021</b></h4>
                </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot color="black">
                    <div className="RoadmapDot"></div>
                </TimelineDot>
                <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                <Paper className={classes.paper}>
                    <Typography>
                        <p>Fund Raising</p>
                        <p>Onboarding Talented Artists</p>
                        <p>Building Alpha Platform</p>
                        <p>Platform Launch</p>
                        <p>Launch Most Interesting “Bitcoin Documentary Every”</p>
                    </Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                <Typography color="textSecondary">
                    <h4><b>Q1 2022</b></h4>
                </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot color="black">
                <div className="RoadmapDot"></div>
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper className={classes.paper}> 
                    <Typography>
                        <p>Plan & Systematically Launch A Media Season on “Bitcoin” Initial Genre Would be </p>
                        <p>Comedy to Attract More People to the Ecosystem</p>
                        <p>Launch 1 Episode Every Week</p>
                        <p>Promote Episodes With Influencers</p>
                    </Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                <Typography color="textSecondary">
                    <h4><b>Q2 2022</b></h4>
                </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot color="black">
                <div className="RoadmapDot"></div>
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper className={classes.paper}> 
                    <Typography>
                        <p>Complete Platform Launch</p>
                        <p>Implement Reward Features</p>
                        <p>Implement More Token Utility to Earn Royalties</p>
                    </Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
        </div>

         <div id="MobileRoadmap">
            <div style={{textAlign:"center",marginBottom:"20px"}}>
                <h1>Roadmap</h1>
            </div>
            <Timeline align="left">
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot color="black">
                    <div className="RoadmapDot"></div>
                </TimelineDot>
                <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                <Paper className={classes.paper}>
                    <Typography color="textSecondary">
                        <h4><b>Q4 2021</b></h4>
                    </Typography>   
                    <Typography>
                        <p>Fund Raising</p>
                        <p>Onboarding Talented Artists</p>
                        <p>Building Alpha Platform</p>
                        <p>Platform Launch</p>
                        <p>Launch Most Interesting “Bitcoin Documentary Every”</p>
                    </Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot color="black">
                <div className="RoadmapDot"></div>
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper className={classes.paper}> 
                    <Typography color="textSecondary">
                        <h4><b>Q1 2022</b></h4>
                    </Typography>
                    <Typography>
                        <p>Plan & Systematically Launch A Media Season on “Bitcoin” Initial Genre Would be </p>
                        <p>Comedy to Attract More People to the Ecosystem</p>
                        <p>Launch 1 Episode Every Week</p>
                        <p>Promote Episodes With Influencers</p>
                    </Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot color="black">
                <div className="RoadmapDot"></div>
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper className={classes.paper}> 
                    <Typography color="textSecondary">
                        <h4><b>Q2 2022</b></h4>
                    </Typography>
                    <Typography>
                        <p>Complete Platform Launch</p>
                        <p>Implement Reward Features</p>
                        <p>Implement More Token Utility to Earn Royalties</p>
                    </Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
        </div>
     </div>
     </div>
     </div>
    )
}
