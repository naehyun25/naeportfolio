import React,{useRef, useState} from "react";
import { Link } from "react-scroll";
import styles from "./Header.module.css";
import InnerWrap from "../../UI/InnerWrap";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "../../assets/Lottie"

const Header=({appElement}) => {

    return(
        <header>
            <div className={styles.headerWrap}>
                <div className={styles.logoWrap}>
                    <Link to="MainPage" spy={true} smooth={true} offset={-140}>
                        <h1>
                            <Logo/>
                        </h1>
                    </Link>
                </div>
                <InnerWrap>
                        <nav>
                            <ul className={styles.navMenu}>
                                <li><Link to="MainPage" spy={true} smooth={true} offset={-140}>Home</Link></li>
                                <li><Link to="AboutMe" spy={true} smooth={true}>About Me</Link></li>
                                <li><Link to="Skills" spy={true} smooth={true} offset={-96}>Skills</Link></li>
                                <li><Link to="Project" spy={true} smooth={true}>Projects</Link></li>
                                <li><Link to="Contact" spy={true} smooth={true}>Contact Me</Link></li>
                            </ul>
                        </nav>
                </InnerWrap>
                <HamburgerMenu appElement={appElement}/>
            </div>
        </header>
    )
};

export default Header;