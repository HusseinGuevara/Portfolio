// import { makeStyles, Toolbar, Typography } from "@material-ui/core";
// import Button from '@material-ui/core/Button';
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
// import { Link } from "react-scroll";
import Particles from "react-particles-js"
import React from "react";
import hussein2 from "../img/hussein_bridege.jpg";
import AboutMe from "./AboutMe";
import Navbar from "./Navbar";
import "./Homepage.css";
import AboutMeText from "./AboutMeText";
import "./MediaQuery.css";
import Work from "./Work";
import Technologies from "./Technologies";
import Contact from "./Contact";

const Homepage = () => {
    
   
    
    
    
    return (
        
        <>   
            <Navbar/>
            
            <div className="body-container">   
                
                    <div id="home" className="first-parallax">
                            <Particles height="fit" id="particles-js"
                            params={{
                                particles: {
                                    number: {
                                        value: 150,
                                        density: {
                                            enable: true,
                                            value_area: 1000
                                        }
                                    }
                                }
                            }}/>
                        <div  className="home-container">
                            <h1 className="home-h1">FULL STACK WEB</h1> 
                            <h1 className="home-h1">DEVELOPER</h1>
                            <h1 className="home-h1-firstname"><span style={{color: "#008080"}}>H</span>USSEIN</h1> <br/> 
                            <h1 className="home-h1-lastname"><span style={{color: "#008080"}}>G</span>UEVARA</h1>
                        </div>    
                    </div>
                
                <div className="about-me-container" id="aboutme">
                    <AboutMe/>
                    <AboutMeText/>
                    <img src={hussein2} alt="Hussein" />
                </div>
                <div className="container-between-about-work">
                    <Particles height="500px" id="particles-js"
                                params={{
                                    particles: {
                                        number: {
                                            value: 150,
                                            density: {
                                                enable: true,
                                                value_area: 1000
                                            }
                                        }
                                    }
                                }}/>
                    <h1 className="second-qoute">"Your work is going to fill a large part of your life, and the only way to be
                    truly satisfied is to do what you believe is great work. And the only way to do great work
                    is to love what you do. <span style={{color: "#008080"}}>If you haven't found it yet, keep looking. Don't settle.</span> As with all matters
                    of the heart, you'll know when you find it." - Steve Jobs</h1>            
                </div>
                <div className="work-container" id="projects">
                    <Work/>
                </div>  
                <div className="container-between-work-skills">
                    <Particles height="700px" id="particles-js"
                                    params={{
                                        particles: {
                                            number: {
                                                value: 150,
                                                density: {
                                                    enable: true,
                                                    value_area: 1000
                                                }
                                            }
                                        }
                                    }}/>
                    <h1 className="third-qoute">You’ll never change your life until you change something you do daily. The secret of your <span style={{color: "#008080"}}>success</span> is found in your
                        <span style={{color: "#008080"}}> daily routine</span>. – John C. Maxwell</h1>
                </div>  
                <div className="skills-container" id="skills">
                    <Technologies/>
                </div>
                <div className="container-between-skills-contact" >
                    <Particles height="700px" id="particles-js"
                                        params={{
                                            particles: {
                                                number: {
                                                    value: 150,
                                                    density: {
                                                        enable: true,
                                                        value_area: 1000
                                                    }
                                                }
                                            }
                                        }}/>
                    <h1 className="fourth-qoute">"The most important thing is to try and <span style={{color:"#008080"}}>inspire people</span> so that they can be great
                        in whatever they want to do." - Kobe Bryant</h1>
                </div>
                <div className="contact-container" id="contact">
                    <Contact/>

                </div>
            </div> 
        </>
    );
    
    
}
export default Homepage;


//   <div className="full-screen-video-container">
//                         <video autoPlay muted loop>
//                             <source src={beach} type="video/mp4"/>
//                         </video>
//                     </div>



