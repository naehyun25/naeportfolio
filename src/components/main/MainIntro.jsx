import React from "react";
import styles from "./MainIntro.module.css";
import InnerWrap from "../../UI/InnerWrap";
import {ButtonWhite} from "../../UI/Buttons";
import { DonutTop, DonutBottom} from "../../UI/MainGeometry";
import github from "../../assets/github-icon.png";
import notion from "../../assets/notion-icon.png";
import resume from "../../assets/resume-icon.png";
import githubWhite from "../../assets/github-white-icon.png";
import notionWhite from "../../assets/notion-white-icon.png";
import resumeWhite from "../../assets/resume-white-icon.png";
import profile from "../../assets/profile-testre.png";
// import profile from "../../assets/profile.png";

const MainIntro = () => {

    
    return(
        <div id="MainIntro" className={styles.mainIntroWrap}>
            <div className={styles.backGroundWrap}>
                <div className={styles.img3Dbottom}>
                </div>
                <div className={styles.donutTop}>                
                    <DonutTop />
                </div>
                <div className={styles.donutBottom}>                
                    <DonutBottom/>
                </div>
                <ul>
                    <li className={styles.static}></li>
                    <li className={styles.moving1}></li>
                    <li className={styles.moving2}></li>
                    <li className={styles.moving3}></li>
                    <li className={styles.moving4}></li>
                </ul>
                <div className={styles.profileImg}>
                    <img alt="프로필이미지" src={profile}/>
                </div>
            </div>
            <InnerWrap>
            <div className={styles.mainBanner}>
                <div className={styles.bannerDesc}>
                    <div>
                        <p><span>윤</span>나는 코드를 만드는<br/><span>윤내현</span>입니다.</p>
                    </div>
                    <div className={styles.btns}>
                        <ButtonWhite name="Git Hub" src={github} srcWhite={githubWhite} font="fontEnglish" link="https://github.com/naehyun25"/>
                        <ButtonWhite name="Notion" src={notion} srcWhite={notionWhite}
                        font="fontEnglish" link="https://incongruous-halloumi-7db.notion.site/58d740b724c042fd9f89607bc596175f?v=1df68651616343e2a1bb61cf43693388"/>
                        <ButtonWhite name="Resume" src={resume} srcWhite={resumeWhite}
                        font="fontEnglish" link="https://drive.google.com/file/d/1Ss_QfNIaVoCXQ8CghaOtUFckhfvaZUl-/view?usp=sharing"/>
                    </div>
                </div>
                

            </div>

            </InnerWrap>
        </div>
    )
};

export default MainIntro;