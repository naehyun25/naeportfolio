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
                                <li><Link to ='./test'>Home</Link></li>
                                <li><Link to ='/'>About Me</Link></li>
                                <li><Link to ='/'>Skills</Link></li>
                                <li><Link to ='/'>Projects</Link></li>
                                <li><Link to ='/'>Contact Me</Link></li>
                            </ul>
                        </nav>
                </InnerWrap>
                <HamburgerMenu></HamburgerMenu>
            </div>
        </header>
    )
};

export default Header;