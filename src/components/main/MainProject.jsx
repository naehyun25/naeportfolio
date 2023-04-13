import React, {useState, useRef} from "react";
import styles from "./MainProject.module.css";
import InnerWrap from "../../UI/InnerWrap";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import { ButtonBlue } from "../../UI/Buttons";

const projectData = [
    {
        imgUrl : project1,
        title : "독립기념관 리뉴얼",
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

const MainProject = () => {
   
    return(
        <>
            <div className={styles.circleWrap}>
            </div>
            <div className={styles.MainProjectWrap}>
                <InnerWrap>
                    <h2>Project</h2>

              
             
                </InnerWrap>
            </div>
        </>

    )
}

export default MainProject;