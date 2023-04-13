import React,{useState} from "react";
import styles from './HamburgerMenu.module.css';


    
const HamburgerMenu= () => {
    const [hover, setHover] = useState(false);
    
    function mouseOver(){
        setHover(true);
    }
    function mouseLeave(){
        setHover(false);
    }
    return(
        <div className={styles.hamburgerWrap}>
            <button className={styles.hamburgerBtn} 
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
            >
                <span className={hover? styles.shortbar : styles.longbar}/>
                <span/>
                <span className={hover? styles.longbar : styles.shortbar}/>
            </button>
        </div>
    )
};

export default HamburgerMenu;