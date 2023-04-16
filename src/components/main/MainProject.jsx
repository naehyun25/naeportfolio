import React, {useState, useRef} from "react";
import styles from "./MainProject.module.css";
import InnerWrap from "../../UI/InnerWrap";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import { ButtonWhiteSmall } from "../../UI/Buttons";
import github from "../../assets/github-icon.png";
import notion from "../../assets/notion-icon.png";
import resume from "../../assets/resume-icon.png";
import githubWhite from "../../assets/github-white-icon.png";
import notionWhite from "../../assets/notion-white-icon.png";
import resumeWhite from "../../assets/resume-white-icon.png";
import circlePink from "../../assets/circle-pink.png";

const projectData = [
    {
        content : "독립기념관을 리뉴얼했습니다.",
        date : "3주",
        contribution : "100%",
        skill : "HTML, CSS, JS, Jquery",
        tech : "php게시판, 캐시로그인, 캐로셀",
        deploy : "GitHub, Dothome",
        page:"메인1, 게시판1, 로그인1"
    },
    {
        imgUrl : project2,
        title : "tickatalk",
        content : "팀프로젝트1. 티켓톡",
        date : "2주",
        contribution : "60%",
        skill : "HTML, CSS, JS, Jquery, bootstrap, Scss",
        tech : "캐시로그인, 부트스트랩, api",
        deploy : "GitHub",
        page:"메인1, 서브페이지1, 로그인1"
    },
    {
        imgUrl : project3,
        title : "4niture",
        content : "팀프로젝트2. 가구쇼핑몰",
        date : "3주",
        contribution : "70%",
        skill : "React, CSSmodule, antd, node.js",
        tech : "리액트, sequlize, 서버구현, sqllite",
        deploy : "Vercell, CloudType",
        page:"메인1, 상세상품게시판4, 검색페이지1, 상품업로드1, 리뷰업로드1, 리뷰페이지1"
    }

]
const ProjectCard = (props)=>{
    let {title,imgUrl,number,skills,date,contribution,page,content,deploy,tech}=props;
    return(
        <div className={styles.projectCard}>
            <div className={styles.projectImgWrap}>
                <div className={styles.imgCover}>
                </div>
                <div className={styles.descWrap}>
                    <p> {content} </p>
                    <p>제작기간 {date} </p>
                    <p>본인기여도 {contribution}</p>
                    <p>구현페이지 <br/>{page}</p>
                    <p>Tech <br/>{tech}</p>
                    <p>배포 {deploy}</p>
                    <div className={styles.btnWrap}>
                        <ButtonWhiteSmall name="github" font="fontEnglish" src={github} srcWhite={githubWhite}/>
                        <ButtonWhiteSmall name="visit" font="fontEnglish" src={github} srcWhite={githubWhite}/>
                    </div>
                </div>
                <img src={imgUrl} alt="프로젝트이미지" className={styles.projectImg}/>
            </div>
            <div className={styles.projectDescWrap}>
                <p className={styles.projectNumber}>{number}
                    <img src={circlePink} alt="" className={styles.circlePink} />
                </p>
                <div className={`${styles.projectTitle} ${styles[props.font]}`}>{title}</div>
                <p className={styles.projectSkills}>{skills}</p>
            </div>
        </div>
    );
}
const MainProject = () => {
    return(
        <>
            <div className={styles.MainProjectWrap}>
                <InnerWrap>
                    <h2>Project</h2>
                    <p className={styles.subTitle}>작업한 프로젝트</p>
                    <div className={styles.projectCardsWrap}>
                        <ProjectCard
                            number="01"
                            title="독립기념관 리뉴얼"
                            content = "독립기념관을 리뉴얼했습니다."
                            skills="HTML, CSS, JS, JQuery, PHP"
                            imgUrl={project1}
                            date="3주"
                            contribution="100%"
                            page="메인1, 게시판1, 로그인1"
                            tech = "php게시판, 캐시로그인, 캐로셀"
                            deploy = "GitHub, Dothome"
                        />
                        <ProjectCard
                            number="02"
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
                        />
                        <ProjectCard
                            number="03"
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
                        />
                        
                    </div>

              
             
                </InnerWrap>
            </div>
        </>

    )
}

export default MainProject;