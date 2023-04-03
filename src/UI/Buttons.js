import React from "react";
import styles from "./Buttons.module.css";
import { Link } from "react-router-dom";

const ButtonWhite = (props) => {
    return(
        <button className={styles.btn}>
            <Link to ="/">
                <img src="" alt="icon"></img>{props.name}
            </Link>
        </button>
    )
};

const ButtonB = () => {
    return(
        <>
        </>
    )
};

export {ButtonWhite, ButtonB};

