import React from "react";
import styles from "./MainIntro.module.css";
import InnerWrap from "../../UI/InnerWrap";
import {DonutThree} from "../../UI/MainGeometry";
import {ButtonWhite} from "../../UI/Buttons";

const MainIntro = () => {
    return(
        <div className={styles.mainIntroWrap}>
            <div className={styles.backGroundWrap}>
                <DonutThree></DonutThree>
                <ul>
                    <li className={styles.img3Dtop}></li>
                    <li className={styles.img3Dbottom}></li>
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
                        <ButtonWhite name="Git Hub"></ButtonWhite>
                        <ButtonWhite name="Notion"></ButtonWhite>
                        <ButtonWhite name="이력서"></ButtonWhite>
                    </div>
                </div>
                <div className={styles.profileImg}></div>

            </div>

            </InnerWrap>
        </div>
    )
};

export default MainIntro;