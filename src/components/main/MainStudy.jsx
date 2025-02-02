import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainStudy.module.css';
import InnerWrap from '../../UI/InnerWrap';
import StudyImg from '../../assets/study.jpg';
import ErrorImg from '../../assets/error.jpg';


const MainStudy=()=>{
    return(
        <div className={styles.MainStudyWrap}>
            <InnerWrap>
                <div className={styles.pinkCircle}></div>
                <div className={styles.yellowCircle}></div>
                <p className={styles.title}>I'm evolving</p>
                {/* I believe that the power of consistency is greater than mere intelligence.
I will continue to grow steadily and with perseverance. */}
                <p className={styles.subTitle}>I believe that</p>
                <p className={styles.titleDesc}>
                The power of consistency is greater than mere intelligence.<br/>
                I will continue to grow steadily and with perseverance.
                </p>
                <div className={styles.studyContents}>
                    <div className={styles.studyContent}>
                        <div className={styles.imgWrap}>
                            <img src={StudyImg} className={styles.img} alt=''></img>
                        </div>
                        <div className={styles.textWrap}>
                            <p className={styles.contentTitle}>
                                Every Day
                            </p>
                            <p className={styles.contentSubTitle}>
                                I keep a record to remember.<br/>
                                review daily, and make it my own.
                            </p>
                            <Link to="https://incongruous-halloumi-7db.notion.site/58d740b724c042fd9f89607bc596175f?v=1df68651616343e2a1bb61cf43693388&pvs=4" 
                            className={styles.direct} target="_blank">Go to Study Notes &gt;</Link>
                        </div>

                    </div>
                    <div className={styles.errorContent}>
                        <div className={styles.imgWrap}>
                            <img src={ErrorImg} className={styles.img} alt=''></img>
                        </div>
                        <div className={styles.textWrap}>
                            <p className={styles.contentTitle}>
                                Error Makes Developer
                            </p>

                            <p className={styles.contentSubTitle}>
                            Errors sharpen my problem-solving skills, <br/>
                            helping me grow with each step.
                            </p>
                            <Link to='https://incongruous-halloumi-7db.notion.site/37329b542a8c491f8d72115d06911998?v=266ca72596dc4a4494dd9219658b0d36'
                            className={styles.direct} target="_blank">View Error Notes &gt;</Link>
                        </div>

                    </div>

                </div>
            </InnerWrap>
        </div>
    )
};

export default MainStudy