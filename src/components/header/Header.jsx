import React from "react";
import {Link} from "react-router-dom";
import styles from "./Header.module.css";
import InnerWrap from "../../UI/InnerWrap";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "../../assets/Lottie"

const Header=() => {

  

    return(
        <header>
            <div className={styles.headerWrap}>
                <div className={styles.logoWrap}>
                    <Link to ="/">
                        <h1>
                            <Logo/>
                        </h1>
                    </Link>
                </div>
                <InnerWrap>
                        <nav>
                            <ul className={styles.navMenu}>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#AboutMe'>About Me</a></li>
                                <li><a href='#Project'>Projects</a></li>
                                <li><a href='#Skills'>Skills</a></li>
                                <li><a href='#'>Contact Me</a></li>
                            </ul>
                        </nav>
                </InnerWrap>
                <HamburgerMenu></HamburgerMenu>
            </div>
        </header>
    )
};

export default Header;