import hussein from "../img/hussein.png";
import {motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Homepage from "./Homepage";
import "./AboutMe.css";
import hussein2 from "../img/hussein_bridege.jpg";

const AboutMe = () => {
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

    //     console.log("Use Effect hook, inView =", inView);
    // }, [inView]);

    return (
        <div  className="aboutme-container">
            {/* <img src={hussein2} alt="Hussein" /> */}
            <div className="about-me-text">    
                
            </div>    
        </div>
    )
}
export default AboutMe;