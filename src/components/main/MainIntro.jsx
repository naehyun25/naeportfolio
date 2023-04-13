import React,{useState} from "react";
import styles from "./MainIntro.module.css";
import InnerWrap from "../../UI/InnerWrap";
import {ButtonWhite} from "../../UI/Buttons";
import { DonutTop, DonutBottom, CornorBottom } from "../../UI/MainGeometry";
import github from "../../assets/github-icon.png";
import notion from "../../assets/notion-icon.png";
import resume from "../../assets/resume-icon.png";
import githubWhite from "../../assets/github-white-icon.png";
import notionWhite from "../../assets/notion-white-icon.png";
import resumeWhite from "../../assets/resume-white-icon.png";

const MainIntro = () => {

    
    return(
        <div className={styles.mainIntroWrap}>
            <div className={styles.backGroundWrap}>
                <div className={styles.donutTop}>                
                <DonutTop/>
                </div>
                <div className={styles.donutBottom}>                
                <DonutBottom/>
                </div>
                {/* <div className={styles.conorBottom}>                
                <CornorBottom/>
                </div> */}
                <ul>
                    <li className={styles.static}></li>
                    <li className={styles.moving1}></li>
                    <li className={styles.moving2}></li>
                    <li className={styles.moving3}></li>
                    <li className={styles.moving4}></li>
                </ul>
            </div>
            <InnerWrap>
            <div className={styles.mainBanner}>
                <div className={styles.bannerDesc}>
                    <div>
                        <p>윤나는 코드를 만드는<br/><span>윤내현</span>입니다.</p>
                    </div>
                    <div className={styles.btns}>
                        <ButtonWhite name="Git Hub" src={github} srcWhite={githubWhite} font="fontEnglish" />
                        <ButtonWhite name="Notion" src={notion} srcWhite={notionWhite}
                        font="fontEnglish" />
                        <ButtonWhite name="Resume" src={resume} srcWhite={resumeWhite}
                        font="fontEnglish" />
                    </div>
                </div>
                <div className={styles.profileImg}></div>

            </div>

            </InnerWrap>
        </div>
    )
};

export default MainIntro;