import {motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Homepage from "./Homepage";


const AboutMeText = () => {
    // const {ref, inView} = useInView({
    //     threshold: [0.25, .8]
    // });
    // const animation = useAnimation();

    // useEffect(() => {
    //     if(inView) {
    //         animation.start({
    //             x: 0,
    //             transition: {
    //                 type: "spring", duration: 1.2, bounce: 0.4
    //             }
    //         })
    //     }
    //     if(!inView) {
    //         animation.start({x: "-100vh"})
    //     }
    // })

    return (
        <div className="abutme-container">
            <div  className="about-me-text">
                <h1 className="aboutme-h1">About Me</h1>
                <hr/>
                <h6 className="about-me-h6">"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. 
                    So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. 
                    Explore, Dream, Discover." -Mark Twain</h6>
                <p className="about-me-p">Hello everyone. My name is <span style={{color: "#008080"}}>Hussein Guevara</span>. I have been a developer for about six months now. I attended a rigorous 
                        bootcamp called Coding Dojo. There I met tons of hardworking and talented people as well as developed a <span style={{color: "#008080"}}>passion for 
                        coding</span>. But my interest for coding didn't start at the dojo. It was about three years ago that I tried learning Java for the
                        first time via a series of youtube videos. Eventually I decided to pursue coding as a career and I can honestly say it has been 
                        the best decision of my life.  One of my other passions is music. More specificly <span style={{color: "#008080"}}>I love to play the guitar</span>. I enjoy playing Blues, 
                        RnB, and occasionally veer of to some other genre. Well I hope your enjoy my website. 
                </p>
            </div>
        </div>    
    )
}
export default AboutMeText;