import React, {useEffect, useState, useLayoutEffect, useRef} from "react";
import InnerWrap from "../../UI/InnerWrap";
import styles from "./MainInfo.module.css";
import "./MainInfo.css";
import circleYellow from "../../assets/circle-yellow.png";
import circlePurple from "../../assets/circle-purple.png";
import circlePink from "../../assets/circle-pink.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import TextTransition, { presets } from 'react-text-transition';
const TEXTS = [ '| 광택나게 만들다.', '| 코드를 광택나게 갈고 닦다.','| 매끈한 소통능력이 있다.'];

gsap.registerPlugin(ScrollTrigger); 
const MainInfo = () => {
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, 
          );
          return () => clearTimeout(intervalId);
          
    },[])
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
            <InnerWrap>
                <div className={styles.MainIntroduction}>
                    <h2 className={styles.title}>About Me</h2>
                    
                    <p className={styles.subTitle}>
                        윤내현의 "윤내다"
                        <TextTransition className="title" delay={300} springConfig={presets.wobbly} >{TEXTS[index % TEXTS.length] }</TextTransition>
                    </p>
                        {/* <br/>
                        매끈한 소통능력과 눈부신 코딩실력으로
                        <br/>
                        회사의 빛이 되겠습니다. */}
                    
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
                            <p>1989 . 02 . 25</p>
                            <p>010 - 5800 - 2443</p>
                        </div>
                        <p className={styles.boxTitle}>
                            Licence
                        </p>
                        <div className={styles.boxContent}>
                            <p>자동차운전면허 2종</p>
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
                            <p className={styles.date}>2008.03 ~ 2012.08</p>
                            <p>충북대학교 축산학과 졸업</p>
                            <p>교육학 복수전공</p>
                            <p className={styles.date}>2014.09 ~ 2022.07 (7년 11개월)</p>
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
                            <p className={styles.date}> 2022.11 ~ 2023.05</p>
                            <p>프로젝트 기반 프론트엔드(React&Vue) <br/>웹&앱 SW개발자 양성과정</p>
                            <p className={styles.date}>2022.11 ~ 2022.12</p>
                            <p>디지털역량 제고를 위한 <br/>웹구조 언어&웹 스타일링 언어 기초</p>
                        </div>
                    </div>
                </div>
            </InnerWrap>
        </div>
    )
};
export default MainInfo;