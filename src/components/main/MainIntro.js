import React from "react";
import styles from "./MainIntro.module.css";
import InnerWrap from "../../UI/InnerWrap";
import {ButtonWhite} from "../../UI/Buttons";
// import profileImg from "../../assets/profile-temp.png";
// import circleHalf from "../../assets/circle-half.png";
// import circleBlue from "../../assets/circle-blue.png";
// import circlePurple from "../../assets/circle-purple.png";
// import circleWhite from "../../assets/circle-white.png";


const MainIntro = () => {
    return(
        <div className={styles.mainIntroWrap}>
            <div className={styles.backGroundWrap}>
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