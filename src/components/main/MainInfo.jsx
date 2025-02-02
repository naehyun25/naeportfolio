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
const TEXTS = [ '|Always striving for improvement', '| Leveraging teamwork to create impact'];

gsap.registerPlugin(ScrollTrigger); 
const MainInfo = () => {
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            2000, 
          );
          return () => clearTimeout(intervalId);
          
    },[])
    const MainInfoWrap = useRef(null);
    useLayoutEffect(()=>{
        let moving = gsap.context((self) => {
            const circles = self.selector(".circle");
            circles.forEach((circle)=>{
                gsap.to(circle,5,{
                    x:250,
                    scale:1,
                    rotate:360,
                    scrollTrigger: {
                        trigger: circle,
                        start: 'bottom right',
                        end: 0,
                        scrub: true,
                        // markers:true,
                      },
                })
            });
            },MainInfoWrap);
          return () => moving.revert();
    },[])

    return(
        <div id="AboutMe" className={styles.MainInfoWrap} ref={MainInfoWrap}>
            <InnerWrap>
                <div className={styles.MainIntroduction}>
                    <h2 className={styles.title}>About Me</h2>
                    
                    <div className={styles.subTitle}>
                    Defining myself
                        <TextTransition className="title" delay={300} springConfig={presets.wobbly} >{TEXTS[index % TEXTS.length] }</TextTransition>
                    </div>
                </div>
                <div className={styles.infoBoxesWrap}>

                    {/* Personal Section */}
                    <div className={`${styles.boxWrap} ${styles.boxInfo}`}>
                        <img src={circlePink} alt="" 
                        className={`${styles.circlePink} circle`}
                        />
                        <div className={styles.infoPadding}>
                            <p className={styles.boxTitle}>
                                Info
                            </p>
                            <div className={`${styles.boxContent} ${styles.smallBoxContent}`}>
                                <p>1989 . 02 . 25</p>
                                <p>010 - 5800 - 2443</p>
                            </div>
                        </div>
                        <div className={styles.licencePadding}>
                            <p className={styles.boxTitle}>
                                Licence
                            </p>
                            <div className={`${styles.boxContent} ${styles.smallBoxContent}`}>
                                <p>Secondary School Teacher Certification (Agricultural Life Science)</p>
                            </div>
                        </div>
                    </div>

                    {/* History Section*/}
                    <div className={`${styles.boxWrap} ${styles.boxHistory}`}>
                        <img src={circleYellow} alt="" 
                        className={`${styles.circleYellow} circle`}
                        />
                        <p className={styles.boxTitle}>
                            History
                        </p>
                        <div className={`${styles.boxContent} ${styles.fullBoxContent}`}>
                            <div className={styles.historyPadding}>
                            <p className={styles.date}>March 2008 – August 2012</p>
                                <p>Graduated with a degree in Animal Science, Chungbuk National University</p>
                            </div>
                            <div className={styles.historyPadding}>
                            <p className={styles.date}>September 2014 – July 2022 (7 years 11 months)</p>
                                <p>Worked at Taesung Trading Co., Ltd.</p>
                            </div>
                            <div className={styles.historyPadding}>
                            <p className={styles.date}>May 2023 – April 2024 (11 months)</p>
                                <p>Worked at Bombaram as a Web and App Developer</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Education Section */}
                    <div className={`${styles.boxWrap} ${styles.boxEducation}`}>
                        <img src={circlePurple} alt="" 
                        className={`${styles.circleExtraPurple} circleE`}
                        />
                        <p className={styles.boxTitle}>
                            Education
                        </p>
                        <div className={`${styles.boxContent} ${styles.fullBoxContent}`}>
                            <div className={styles.eduPadding}>
                                <p className={styles.date}>November 2022 – May 2023</p>
                                <p>Frontend Development (React & Vue)</p>
                                <p>Web & App Software Developer Training Program</p>
                            </div>
                            <div className={styles.eduPadding}>
                                <p className={styles.date}>November 2022 – December 2022</p>
                                <p>Basic Web Structure and Styling Languages for Digital Competency Improvement </p>
                            </div>
                        </div>
                    </div>
                </div>
            </InnerWrap>
        </div>
    )
};
export default MainInfo;