import React,{useState} from "react";
import styles from "./Buttons.module.css";
import { Link } from "react-router-dom";

const ButtonWhite = (props) => {
    return(
        <button className={styles.btn}>
            <Link to ="/">
                <img src={props.src} alt="icon" className={styles.btnImg}></img>{props.name}
            </Link>
        </button>
    )
};


const ButtonBlue = (props) => {
    return(
        <button className={styles.btn}>
        <Link to ="/">
            <img src={props.src} alt="icon" className={styles.btnImg}></img>{props.name}
        </Link>
    </button>
    )
};

export {ButtonWhite, ButtonBlue};

