import React,{useState,useRef} from "react";
import './HamburgerMenu.css';
import { Link } from "react-router-dom";

    
const HamburgerMenu= ({appElement}) => {
    const [hover, setHover] = useState(false);
    function mouseOver(){setHover(true);
    }
    function mouseLeave(){setHover(false);
    }

    const hamburger = useRef();
    function openBurger(){
        hamburger.current.classList.add('open') 
        hamburger.current.firstChild.classList.add('layerOpen')
        appElement(true)
    }
    function closeBurger(){
        hamburger.current.classList.remove('open')
        hamburger.current.firstChild.classList.remove('layerOpen')
        appElement(false)
    }
    return(
        <div className="hamburgerWrap">
            <button className="hamburgerBtn" 
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
            onClick={openBurger}
            >
                <span className={hover? "shortbar" : "longbar"}/>
                <span/>
                <span className={hover? "longbar" : "shortbar"}/>
            </button>
            <div className="hamburgerContents" ref={hamburger}>
                <div className="layer">
                    <div className="contentWrap">
                        <button className="closebtn" onClick={closeBurger}></button>
                        <hr/>
                        <div className="navMenus">
                            <p className="navMenu">
                                <a href='#'onClick={closeBurger}>Home</a>
                            </p>
                            <p className="navMenu">
                                <a href='#AboutMe'onClick={closeBurger}>About Me</a>
                            </p>
                            <p className="navMenu">
                                <a href='#Skills'onClick={closeBurger}>Skills</a>
                            </p>
                            <p className="navMenu">
                                <a href='#Project'onClick={closeBurger}>Projects</a>
                            </p>
                            <p className="navMenu">
                                <a href='#Contact'onClick={closeBurger}>Contact Me</a>
                            </p>
                        </div>
                        <hr/>
                        <div className="navContact">
                            <div className="available">
                                <p className="availavbTitle">I'm Ready to Work.</p>
                                <p className="days">Always</p>
                                <p className="time">Contact Me,</p>
                            </div>
                            <div className="contacts">
                                <Link to ="/test">
                                <p className="contactTitle">Information</p>
                                </Link>
                                <p className="contactEmail">E-mail.&nbsp; naehyun25@gmail.com</p>
                                <p className="contactNumber">HP.  &nbsp; 010 - 5800 - 2443</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
};

export default HamburgerMenu;