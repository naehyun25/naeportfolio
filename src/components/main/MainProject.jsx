import React, {useState,useRef,createContext, useContext} from "react";
import { Link } from "react-router-dom";
import styles from "./MainProject.module.css";
import InnerWrap from "../../UI/InnerWrap";
import project1 from "../../assets/project1.jpg";
import projectphp1 from "../../assets/projectphp1.gif";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4Gif from "../../assets/project4.gif";
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
    
    let { title,content, imgUrl, number, skills, date, contribution, page, tech, deploy, aGithub,aVisit} = props;
  
    return (
      <div id="Project" className={styles.projectCard} onMouseOver={ImgScroll} onMouseLeave={ImgScrollOff}>
        <div className={styles.projectImgWrap}>
          <div className={styles.imgCover} ref={imgCover} style={{opacity:visual, transition:"all 0.5s"}}></div>
          <div className={styles.descWrap}>
            <p><span className={styles.descTitle}>제작기간  </span> {date} </p>
            <p><span className={styles.descTitle}>본인기여도  </span> {contribution}</p>
            <p><span className={styles.descTitle}>페이지</span><br />
              {page}
            </p>
            <p><span className={styles.descTitle}>Features</span><br />
              {tech}
            </p>
            <p><span className={styles.descTitle}>배포</span> {deploy}</p>
            <div className={styles.btnWrap}>
              <ButtonWhiteSmall name="Github" font="fontEnglish" src={github} srcWhite={githubWhite} link={aGithub}/>
              <ButtonWhiteSmall name={props.btnName} font="fontEnglish" src={deployIcon} srcWhite={deployWhite} link={aVisit} />
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
          <p className={styles.projectContent}>{content}</p>
          <p className={styles.projectSkills}>{skills}</p>
        </div>
      </div>
    );
  };
const MainProject = () => {
    return(
        <>
            <div id="Project" className={styles.MainProjectWrap}>
                <InnerWrap>
                    <h2>Project</h2>
                    <p className={styles.subTitle}>작업한 프로젝트</p>
                    <div className={styles.projectCardsWrap} >
                      <ProjectCard 
                          number="01"
                          title="JavaScript, jQuery 프로젝트"
                          content="독립기념관 리뉴얼"
                          skills="JS, JQuery, HTML, CSS"
                          imgUrl={project1}
                          date="3주"
                          contribution="100%"
                          page="메인페이지"
                          tech = "Carousel 직접구현, Cookie Pop-up, 기상청API, 대기오염API 구현"
                          deploy = "GitHub"
                          aGithub = "https://github.com/naehyun25/project1"
                          aVisit = "https://naehyun25.github.io/project1/"
                          btnName="Visit"
                      />
                      <ProjectCard
                          number="02"
                          title="PHP게시판 프로젝트"
                          content="독립기념관 리뉴얼 (ver.PHP)"
                          skills="PHP, JS, JQuery, HTML, CSS "
                          imgUrl={projectphp1}
                          date="1주"
                          contribution="100%"
                          page="메인페이지, 게시판페이지, 로그인페이지"
                          tech = "PHP게시판(CRUD), PHP로그인구현"
                          deploy = "Dothome"
                          aGithub = "https://github.com/naehyun25/project1-ver2"
                          aVisit = "http://naeh.dothome.co.kr/index_board.php"
                          btnName="Visit"
                      />
                      <ProjectCard
                          number="03"
                          title="부트스트랩 SCSS 프로젝트"
                          content="Team . ticatalk"
                          skills="Scss, Bootstrap, JS, HTML, CSS"
                          imgUrl={project2}
                          date="2주"
                          contribution="20% (총원 5명)"
                          page="메인페이지, 서브페이지, 로그인페이지"
                          // font="fontEnglish"
                          tech = "SwiferSlide, KopisApi, Cookie모달창"
                          deploy = "GitHub"
                          aGithub = "https://github.com/ejin1018/ticatalk"
                          aVisit = "https://ticatalk.vercel.app/"
                          btnName="Visit"
                      />
                      <ProjectCard
                          number="04"
                          title="리액트 프로젝트"
                          content="Team . 4niture"
                          skills="React, CSSmodule, Antd, Node, Express, PWA"
                          imgUrl={project3}
                          date="3주"
                          contribution="25% (총원 4명)"
                          page="메인페이지, 상세상품페이지4, 검색페이지, 
                          상품업로드, 리뷰업로드, 리뷰페이지"
                          // font="fontEnglish"
                          tech = "React,Node로 구현한 풀스택 프로젝트(CRUD 구현)"
                          deploy = "Vercell, CloudType"
                          aGithub = "https://github.com/hejo47/4niture_react"
                          aVisit = "https://4niture-react.vercel.app/"
                          btnName="Visit"
                          />
                      <ProjectCard 
                        number="05"
                        title="리액트 네이티브 프로젝트"
                        content="4niture App"
                        skills="React-native-Expo, node.js"
                        imgUrl={project4Gif}
                        date="3일"
                        contribution="100%"
                        page="메인Stack, 상품Stack, 리뷰Stack"
                        // font="fontEnglish"
                        tech = "react-native-expo, Carousel구현, Update-품절기능 구현, Post-상품구매"
                        deploy = "CloudType, Apk"
                        aGithub = "https://github.com/naehyun25/4niture-native-expo-app"
                        aVisit = "https://github.com/naehyun25/4niture-native-expo-app/tree/main/assets/apkqr.png"
                        btnName="Download"
                      />
                    </div>
                </InnerWrap>
            </div>
        </>

    )
}

export {MainProject, ProjectCard};