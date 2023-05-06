import React from "react";
import styles from "./MainPage.module.css"
import MainIntro from "../components/main/MainIntro";
import MainInfo from "../components/main/MainInfo";
import {MainProject} from "../components/main/MainProject";
import MainSkill from "../components/main/MainSkill";
import MainStudy from "../components/main/MainStudy";

const MainPage = () => {
    
    return(
        <div className={styles.mainWrapper} >
            <div className="sectionOne"><MainIntro/></div>
            <div className="sectionTwo"><MainInfo/></div>
            <div className="sectionFour"><MainSkill/></div>
            <div className="sectionFive"><MainStudy/></div>
            <div className="sectionThree"><MainProject/></div>
        </div>
    )
};
export default MainPage;