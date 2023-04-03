import React from "react";
import InnerWrap from "../../UI/InnerWrap";
import styles from "./MainInfo.module.css";
import circleYellow from "../../assets/circle-yellow.png";
import circlePurple from "../../assets/circle-purple.png";
import circlePink from "../../assets/circle-pink.png";

const MainInfo = () => {
    return(
        <div className={styles.MainInfoWrap}>
            <div className={styles.circleWrap}>
                <img src={circleYellow} alt="" className={styles.circleYellow}></img>
                <img src={circlePurple} alt="" className={styles.circlePurple}></img>
                <img src={circlePink} alt="" className={styles.circlePink}></img>
            </div>
            <InnerWrap>
                <div className={styles.MainIntroduction}>
                    <h2>About Me</h2>
                    <p>윤내현의 "윤내다"
                        <br/>
                        노력으로 갈고 닦아 광택이 난다.
                        <br/>
                        맨들맨들한 성격과 소통능력을 가지고 있다.
                    </p>
                </div>
                <div className={styles.infoBoxesWrap}>
                    <div className={`${styles.boxWrap} ${styles.boxInfo}`}>
                        <p className={styles.boxTitle}>
                            Info
                        </p>
                        <div className={styles.boxContent}>
                            <p>1989.02.25
                                <br/>
                                010-5800-2443
                            </p>
                        </div>
                        <p className={styles.boxTitle}>
                            Licence
                        </p>
                        <div className={styles.boxContent}>
                            <p>자동차운전면허 2종 자동</p>
                            <p>중동교사 자격증(농업생명계열)</p>
                        </div>
                    </div>
                    <div className={`${styles.boxWrap} ${styles.boxHistory}`}>
                        <p className={styles.boxTitle}>
                            History
                        </p>
                        <div className={styles.boxContent}>
                            <p>2008.03~2012.08</p>
                            <p>충북대학교 축산학과 졸업</p>
                            <p>교육학 복수전공</p>
                            <p>2014.09~2022.07(7년11개월)</p>
                            <p>(주) 태성트레이딩 근무</p>
                        </div>
                    </div>
                    <div className={`${styles.boxWrap} ${styles.boxEducation}`}>
                        <p className={styles.boxTitle}>
                            Education
                        </p>
                        <div className={styles.boxContent}>
                            <p>2022.11~2023.05</p>
                            <p>프로젝트 기반 프론트엔드(React&Vue) 웹&앱 SW개발자 양성과정</p>
                            <p>2022.10~2022.11</p>
                            <p>온라인과정(HTML,CSS)</p>
                        </div>
                    </div>
                </div>
            </InnerWrap>
        </div>
    )
};
export default MainInfo;