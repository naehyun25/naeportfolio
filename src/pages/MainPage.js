import React from "react";
import styles from "./MainPage.module.css"
import MainIntro from "../components/main/MainIntro";
import MainInfo from "../components/main/MainInfo";

const MainPage = () => {
    return(
        <div className={styles.mainWrapper}>
        <MainIntro/>
        <MainInfo/>
        </div>
    )
};
export default MainPage;