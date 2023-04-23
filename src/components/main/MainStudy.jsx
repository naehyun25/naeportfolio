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
                <p className={styles.title}>I'm growing up,</p>
                <p className={styles.subTitle}>이렇게 성장하고 있습니다</p>
                <p className={styles.titleDesc}>
                    "똑똑함"보다는 "꾸준함"의 힘이 더 크다고 생각합니다.<br/>
                    꾸준하고 끈기있게 성장하겠습니다.
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
                                기억하기 위해 기록하고 있습니다.<br/>
                                매일 복습하고 변형해가며 나의 것으로 익혔습니다.
                            </p>
                            <Link to='https://incongruous-halloumi-7db.notion.site/58d740b724c042fd9f89607bc596175f?v=1df68651616343e2a1bb61cf43693388' 
                            className={styles.direct} target="_blank">공부노트보러가기 &gt;</Link>
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
                                오류를 통해 해결능력을 높이고 <br/>
                                그 과정을 통해 한층 더 나아갔습니다.
                            </p>
                            <Link to='https://incongruous-halloumi-7db.notion.site/37329b542a8c491f8d72115d06911998?v=266ca72596dc4a4494dd9219658b0d36'
                            className={styles.direct} target="_blank">에러노트보러가기 &gt;</Link>
                        </div>

                    </div>

                </div>
            </InnerWrap>
        </div>
    )
};

export default MainStudy