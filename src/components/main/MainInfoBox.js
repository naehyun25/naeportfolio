import React from "react";
import styles from "./MainInfoBox.module.css";

const boxText=[
    {label:"Info",
    contents :{
        title:"title",
        date:"2023.03.26",
        content1:"content1",
        content2:"content2"
    }
    }
]



const MainInfoBox = (props) => {
    let {title,date,content1,content2}=boxText;
    return(
        <div className={styles.boxWrap}>
            <p className={styles.boxtitle}>
                {props.title}
            </p>
            <p className={styles.boxcontent}>
                {props.content}
            </p>
        </div>

    )
};

export default MainInfoBox;