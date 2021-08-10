import { makeStyles, Toolbar, Typography } from "@material-ui/core";
import { useState } from "react";
import { AppBar } from "@material-ui/core";
import { useScrollTrigger } from "@material-ui/core";
import { Slide } from "@material-ui/core";
import logo from "../img/Logo.png";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar.css";
import "./MediaQuery.css";


function HideOnScroll({children: Props}) {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={ false } direction={ "down" } in={!trigger}>
            {Props}
        </Slide>
    )
}

const Navbar = () => {
    
    const [ click, setClick ] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    

    return (
        <>
            <HideOnScroll>   
                <nav className="navbar" >
                    <Link to="/" className="navbar-logo">
                        {/* <img className="logo" src={logo} alt="logo" /> */}
                        <h1 className="navbar-name">HG</h1>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div className="rightSide">    
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link
                                className="nav-links"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={closeMobileMenu}
                                >HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-links"
                                    activeClass="active"
                                    to="aboutme"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                    onClick={closeMobileMenu}
                                    >ABOUT
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-links"
                                    activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                    onClick={closeMobileMenu}
                                    >PROJECTS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-links"
                                    activeClass="active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                    onClick={closeMobileMenu}
                                    >TECHNOLOGIES
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-links"
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                    onClick={closeMobileMenu}
                                    >CONTACT
                                </Link>
                            </li>
                        </ul>
                    </div>







                </nav>
            </HideOnScroll>     
        </>
    )
}
export default Navbar;


{/* <AppBar className="appbar" style={{background: "#1e1e1e"}} position="sticky">
    <Toolbar  className="toolbar">
            <div className="leftSide">
                <img className="logo" src={logo} alt="logo" />
            </div>    
            <div className="rigthSide">
                <div className="links">
                    <Link
                        className="Links"
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                        >HOME
                    </Link>
                    <Link 
                        className="Links"
                        activeClass="active"
                        to="aboutme"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    >ABOUT
                    </Link>
                    <Link 
                        className="Links"
                        activeClass="active"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    >WORK
                    </Link>
                    <Link 
                        className="Links"
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    >SKILLS
                    </Link>
                    <Link 
                        className="Links"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    >CONTACT
                    </Link>
                </div>    
            </div>
    </Toolbar>
</AppBar> */}