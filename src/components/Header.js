import React from "react";
import {Link} from "react-router-dom";
import styles from"../components/Header.module.css";
import InnerWrap from "../UI/InnerWrap";
import HamburgerMenu from "./HamburgerMenu";
import logoImg from "../assets/logo-temp.jpg"

const Header=() => {
    return(
        <header>
            <InnerWrap>
                <div className={styles.headerMenu}>
                    <div className={styles.logoWrapper}>
                        <Link to ="/">
                            <h1>
                                <img src ={logoImg} alt="로고"/>
                            </h1>
                        </Link>
                    </div>
                    <nav>
                        <ul className={styles.navMenu}>
                            <li><Link to ='/'>Home</Link></li>
                            <li><Link to ='/'>About Me</Link></li>
                            <li><Link to ='/'>Skills</Link></li>
                            <li><Link to ='/'>Projects</Link></li>
                            <li><Link to ='/'>Contact Me</Link></li>
                        </ul>
                    </nav>
                    <HamburgerMenu></HamburgerMenu>
                </div>
            </InnerWrap>

        </header>
    )
};

export default Header;