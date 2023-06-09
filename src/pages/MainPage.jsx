import React from "react";
import styles from "./MainPage.module.css"
import MainIntro from "../components/main/MainIntro";
import MainInfo from "../components/main/MainInfo";
import {MainProject} from "../components/main/MainProject";
import MainSkill from "../components/main/MainSkill";
import MainStudy from "../components/main/MainStudy";

const MainPage = () => {
    
    return(
        <div className={styles.mainWrapper} id="MainPage" >
            <MainIntro/>
            <MainInfo/>
            <MainSkill/>
            <MainStudy/>
            <MainProject/>
        </div>
    )
};
export default MainPage;