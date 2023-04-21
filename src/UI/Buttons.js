import React,{useState} from "react";
import styles from "./Buttons.module.css";
import { Link } from "react-router-dom";

const ButtonWhite = (props) => {
    const [hover, setHover]= useState(false);

    return(
        <button className={styles.btn} 
        onMouseOver={()=>{setHover(true)}}
        onMouseOut={()=>{setHover(false)}}
        >
            <Link to ={props.link} className={styles[props.font]} target="_blank">
                <img src={hover? props.srcWhite : props.src} alt="icon" className={styles.btnImg}></img>{props.name}
            </Link>
        </button>
    )
};

const ButtonWhiteSmall = (props) => {
    const [hover, setHover]= useState(false);

    return(
        <button className={styles.btnWhiteSmall} 
        onMouseOver={()=>{setHover(true)}}
        onMouseOut={()=>{setHover(false)}}
        >
            <Link to = {props.link} className={styles[props.font]} target="_blank">
                <img src={hover? props.srcWhite : props.src} alt="icon" className={styles.btnImg}></img>{[props.name]}
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

export {ButtonWhite, ButtonWhiteSmall, ButtonBlue};

