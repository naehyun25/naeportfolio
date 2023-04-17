import React, {useLayoutEffect, useRef} from "react";
import InnerWrap from "../../UI/InnerWrap";
import styles from "./MainInfo.module.css";
import circleYellow from "../../assets/circle-yellow.png";
import circlePurple from "../../assets/circle-purple.png";
import circlePink from "../../assets/circle-pink.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger); 
const MainInfo = () => {
   
    const MainInfoWrap = useRef(null);
    useLayoutEffect(()=>{
        let moving = gsap.context((self) => {
            console.log(self)
            const circles = self.selector(".circle");
            circles.forEach((circle)=>{
                gsap.to(circle,5,{
                    x:300,
                    scale:1,
                    rotate:360,
                    scrollTrigger: {
                        trigger: circle,
                        start: 'bottom right',
                        end: 0,
                        scrub: true,
                      },
                })
            });
            },MainInfoWrap);
          return () => moving.revert();
    },[])

    return(
        <div className={styles.MainInfoWrap} ref={MainInfoWrap}>
            {/* <div className={styles.circleWrap}>
            </div> */}
            <InnerWrap>
                <div className={styles.MainIntroduction}>
                    <h2 className={styles.title}>About Me</h2>
                    {/* gsap으로 변경 */}
                    <p className={styles.subTitle}>노력으로 갈고 닦아 보석처럼 빛나는 윤내현입니다.
                        <br/>
                        매끈한 소통능력과 눈부신 코딩실력으로
                        <br/>
                        회사의 빛이 되겠습니다.
                    </p>
                </div>
                <div className={styles.infoBoxesWrap}>
                    <div className={`${styles.boxWrap} ${styles.boxInfo}`}>
                        <img src={circlePink} alt="" 
                        className={`${styles.circlePink} circle`}
                        />
                        <p className={styles.boxTitle}>
                            Info
                        </p>
                        <div className={styles.boxContent}>
                            <p>1989.02.25</p>
                            <p>010-5800-2443</p>
                        </div>
                        <p className={styles.boxTitle}>
                            Licence
                        </p>
                        <div className={styles.boxContent}>
                            <p>자동차운전면허 2종 자동</p>
                            <p>중등교사 자격증(농업생명계열)</p>
                        </div>
                    </div>
                    <div className={`${styles.boxWrap} ${styles.boxHistory}`}>
                        <img src={circleYellow} alt="" 
                        className={`${styles.circleYellow} circle`}
                        />
                        <p className={styles.boxTitle}>
                            History
                        </p>
                        <div className={styles.boxContent}>
                            <p className={styles.date}>2008.03~2012.08</p>
                            <p>충북대학교 축산학과 졸업</p>
                            <p>교육학 복수전공</p>
                            <p className={styles.date}>2014.09~2022.07(7년11개월)</p>
                            <p>(주) 태성트레이딩 근무</p>
                        </div>
                    </div>
                    <div className={`${styles.boxWrap} ${styles.boxEducation}`}>
                        <img src={circlePurple} alt="" 
                        className={`${styles.circlePurple} circle`}
                        />
                        <p className={styles.boxTitle}>
                            Education
                        </p>
                        <div className={styles.boxContent}>
                            <p className={styles.date}> 2022.11~2023.05</p>
                            <p>프로젝트 기반 프론트엔드(React&Vue) <br/>웹&앱 SW개발자 양성과정</p>
                            <p className={styles.date}>2022.10~2022.11</p>
                            <p>온라인과정(HTML,CSS)</p>
                        </div>
                    </div>
                </div>
            </InnerWrap>
        </div>
    )
};
export default MainInfo;