import React from "react";
import styles from "./MainPage.module.css"
import MainIntro from "../components/main/MainIntro";
import MainInfo from "../components/main/MainInfo";
import MainProject from "../components/main/MainProject";

const MainPage = () => {
    return(
        <div className={styles.mainWrapper}>
        <MainIntro/>
        <MainInfo/>
        <MainProject/>
        </div>
    )
};
export default MainPage;