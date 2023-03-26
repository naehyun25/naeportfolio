import React from "react";
import styles from './HamburgerMenu.module.css';

const HamburgerMenu= () => {
    return(
        <div className={styles.hamburgerWrap}>
            <button className={styles.hamburgerBtn}>
                <span/><span/><span/>
            </button>
        </div>
    )
};

export default HamburgerMenu;