import React from "react";
import styles from '../components/HamburgerMenu.module.css';

const HamburgerMenu= () => {
    return(
        <div className={styles.hamburgerWrapper}>
            <button className={styles.hamburgerBtn}>
                <span/><span/><span/>
            </button>
        </div>
    )
};

export default HamburgerMenu;