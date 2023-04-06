import React from "react";
import styles from "./MainProject.module.css";
import InnerWrap from "../../UI/InnerWrap";
import project1 from "../../assets/project1.gif";
import project2 from "../../assets/project2.gif";
import project3 from "../../assets/project3.gif";

const projectData = [
    {
        imgUrl : project1,
        title : "독립기념관 리뉴얼",
        content : "독립기념관을 리뉴얼했습니다.",
        date : "2022.12.16~2023.01.09 (3주)",
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
        date : "2023.2.6~2023.02.22 (2주)",
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
        date : "2023.03.15~2023.04.04 (3주)",
        contribution : "70%",
        skill : "React, CSSmodule, antd, node.js",
        tech : "리액트, sequlize, 서버구현, sqllite",
        deploy : "Vercell, CloudType",
        page:"메인1, 상세상품게시판4, 검색페이지1, 상품업로드1, 리뷰업로드1, 리뷰페이지1"
    }

]

const MainProject = () => {
    return(
        <>
            <div className={styles.circleWrap}>
            </div>
            <div className={styles.MainProjectWrap}>
                <InnerWrap>
                    <h2>Project</h2>

                {projectData.map((data, idx) => {
                    console.log(data.imgUrl)
                    return(
                        <div className={styles.cardWrap} key={idx}>
                            <div className={styles.projectImgWrap}>
                                <img src={data.imgUrl} alt="" className={styles.projectImg}/>
                            </div>
                            <div className={styles.projectDescWrap}>
                                <div className={styles.projectDesc}>
                                    <p className={styles.projectTitle}>{data.title}</p>
                                    <p className={styles.projectContent}>{data.content}</p>
                                    <p>제작기간 <br/> {data.date}</p>
                                    <p>기여도 <br/>{data.contribution}</p>
                                </div>
                                <div className={styles.projectSkill}>
                                    <h3>skill <br/>{data.skill}</h3>
                                    <p>기술 <br/>{data.tech}</p>
                                    <p>배포 <br/>{data.deploy}</p>
                                    <p>구현페이지<br/> {data.page}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </InnerWrap>
            </div>
        </>

    )
}

export default MainProject;