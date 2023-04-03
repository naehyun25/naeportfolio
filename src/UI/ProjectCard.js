import React from "react";
import styles from "./ProjectCard.module.css";



const ProjectCardRight = (props) => {
    return(
        <div className={styles.cardWrap}>
            <div className={styles.projectImgWrap}>
                <img src={props.imgUrl} alt="" className={styles.projectImg}></img>
            </div>
            <div className={styles.projectDescWrap}>
                <h3>{props.name}</h3>
                <p className={styles.projectTitle}>독립기념관리뉴얼</p>
                <p className={styles.projectContent}>독립기념관을리뉴얼했습니다.</p>
                <p className={styles.projectSkill}>하드코딩</p>
            </div>
        </div>
    )
}

const ProjectCardLeft = (props) => {
    return(
        <div className={styles.cardWrap}>
            <div className={styles.projectDescWrap}>
                <h3>{props.name}</h3>
                <p className={styles.projectTitle}>독립기념관리뉴얼</p>
                <p className={styles.projectContent}>독립기념관을리뉴얼했습니다.</p>
                <p className={styles.projectSkill}>하드코딩</p>
            </div>
            <div className={styles.projectImgWrap}>
                <img src={props.imgUrl} alt="" className={styles.projectImg}></img>
            </div>
        </div>
    )
}

export {ProjectCardRight,ProjectCardLeft}