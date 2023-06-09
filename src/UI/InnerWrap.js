import React from "react";
import styles from "./InnerWrap.module.css";

const InnerWrap = (props) => {
    return <div className={styles.innerWrap}>{props.children}</div>
}

export default InnerWrap;