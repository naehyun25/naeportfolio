import React, {useState,useRef,createContext, useContext} from "react";
import { Link } from "react-router-dom";
import styles from "./MainProject.module.css";
import InnerWrap from "../../UI/InnerWrap";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4Gif from "../../assets/project4.gif";
import project4 from "../../assets/project4.png";
import { ButtonWhiteSmall } from "../../UI/Buttons";
import github from "../../assets/github-icon.png";
import githubWhite from "../../assets/github-white-icon.png";
import deployIcon from "../../assets/deploy-icon.png";
import deployWhite from "../../assets/deploy-icon-white.png";
import circlePink from "../../assets/circle-pink.png";

  const ProjectCard = (props) => {
    const imgRef = useRef(null);
    const imgCover = useRef();
    const [translateY, setTranslateY] = useState(0);
    const [visual, setVisual] = useState(0);

    const ImgScroll = () => {
        const imgCoverHeight = imgCover.current.offsetHeight;
        const scrollHeight = imgRef.current.scrollHeight;
        const maxTranslateY = scrollHeight - imgCoverHeight;
        let translateOn = maxTranslateY;
        setTranslateY(translateOn);
        setVisual(0.7);
            };
      const ImgScrollOff =()=>{
        let translateOff=0;
        setTranslateY(translateOff)
        setVisual(0)
    }
    
    let { title, imgUrl, number, skills, date, contribution, page, content, tech, deploy, aGithub,aVisit,aDesc} = props;
  
    return (
      <div className={styles.projectCard} onMouseOver={ImgScroll} onMouseLeave={ImgScrollOff}>
        <div className={styles.projectImgWrap}>
          <div className={styles.imgCover} ref={imgCover} style={{opacity:visual, transition:"all 0.5s"}}></div>
          <div className={styles.descWrap}>
            <p> {content} </p>
            <p>제작기간 {date} </p>
            <p>본인기여도 {contribution}</p>
            <p>
              구현페이지 <br />
              {page}
            </p>
            <p>
              Tech <br />
              {tech}
            </p>
            <p>배포 {deploy}</p>
            <div className={styles.btnWrap}>
              <ButtonWhiteSmall name="Github" font="fontEnglish" src={github} srcWhite={githubWhite} link={aGithub}/>
              <ButtonWhiteSmall name="Visit" font="fontEnglish" src={deployIcon} srcWhite={deployWhite} link={aVisit} />
              {/* <ButtonWhiteSmall name="상세페이지"  font="fontKorean" src={deployIcon} srcWhite={deployWhite} link={aDesc}/> */}
            </div>
          </div>
          <div className={styles.projectImgCover}>
          <img src={imgUrl} 
          alt="프로젝트이미지" className={styles.projectImg}
          ref={imgRef}  style={{ transform: `translateY(-${translateY}px)`}}/>
          </div>
        </div>
        <div className={styles.projectDescWrap}>
          <p className={styles.projectNumber}>
            {number}
            <img src={circlePink} alt="" className={styles.circlePink} />
          </p>
          <div className={`${styles.projectTitle} ${styles[props.font]}`}>{title}</div>
          <p className={styles.projectSkills}>{skills}</p>
        </div>
      </div>
    );
  };
const MainProject = (hover) => {console.log(hover)
    return(
        <>
            <div className={styles.MainProjectWrap}>
                <InnerWrap>
                    <h2>Project</h2>
                    <p className={styles.subTitle}>작업한 프로젝트</p>
                    <div className={styles.projectCardsWrap} >
                      <ProjectCard 
                          number="01"
                          title="독립기념관 리뉴얼"
                          content = "독립기념관을 리뉴얼 Ver.1"
                          skills="HTML, CSS, JS, JQuery"
                          imgUrl={project1}
                          date="3주"
                          contribution="100%"
                          page="메인1, 게시판1, 로그인1"
                          tech = "캐시로그인, 캐로셀"
                          deploy = "GitHub"
                          aGithub = "https://github.com/naehyun25/project1"
                          aVisit = "https://naehyun25.github.io/project1/"
                          // aDesc = "https://www.naver.com"
                      />
                      <ProjectCard
                          number="02"
                          title="독립기념관 리뉴얼 (ver.PHP)"
                          content = "독립기념관을 리뉴얼했습니다."
                          skills="HTML, CSS, JS, JQuery, PHP"
                          imgUrl={project1}
                          date="1주"
                          contribution="100%"
                          page="메인1, 게시판1, 로그인1"
                          tech = "php게시판, 캐시로그인"
                          deploy = "Dothome"
                          aGithub = "https://github.com/naehyun25/project1-ver2"
                          aVisit = "http://naeh.dothome.co.kr/index.php"
                          // aDesc = "https://www.naver.com"
                      />
                      <ProjectCard
                          number="03"
                          title="tickatalk"
                          content = "팀프로젝트1. 티켓톡"
                          skills="HTML, CSS, JS, Jquery, bootstrap, Scss"
                          imgUrl={project2}
                          date="2주"
                          contribution="25%"
                          page="메인1, 서브페이지1, 로그인1"
                          font="fontEnglish"
                          tech = "캐시로그인, 부트스트랩, api"
                          deploy = "GitHub"
                          aGithub = "https://github.com/ejin1018/ticatalk"
                          aVisit = "https://ticatalk.vercel.app/"
                          // aDesc = "https://www.naver.com"
                      />
                      <ProjectCard
                          number="04"
                          title="4niture"
                          content = "팀프로젝트2. 가구쇼핑몰"
                          skills="React, CSSmodule, antd, node.js"
                          imgUrl={project3}
                          date="3주"
                          contribution="25%"
                          page="메인1, 상세상품게시판4, 검색페이지1, 
                          상품업로드1, 리뷰업로드1, 리뷰페이지1"
                          font="fontEnglish"
                          tech = "리액트, sequlize, 서버구현, sqllite"
                          deploy = "Vercell, CloudType"
                          aGithub = "https://github.com/hejo47/4niture_react"
                          aVisit = "https://4niture-react.vercel.app/"
                          // aDesc = "https://www.naver.com"
                          />
                      <ProjectCard 
                        number="05"
                        title="4niture App"
                        content = "가구쇼핑몰 어플"
                        skills="React-native-Expo, node.js"
                        imgUrl={project4Gif}
                        date="1주"
                        contribution="100%"
                        page="메인1, 상품페이지1, 리뷰페이지1"
                        font="fontEnglish"
                        tech = "react-native-expo, sequlize, 서버구현, sqllite"
                        deploy = "CloudType, apk"
                        aGithub = "https://github.com/naehyun25/4niture-native-expo-app"
                        aVisit = "https://github.com/naehyun25/4niture-native-expo-app/tree/main/assets/4nitureapp.apk"
                        // aDesc = "https://www.naver.com"
                      />
                    </div>

              
             
                </InnerWrap>
            </div>
        </>

    )
}

export default MainProject;