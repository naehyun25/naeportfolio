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
    const cardRef = useRef(null);
    const imgRef = useRef(null);
    const [translateY, setTranslateY] = useState(0);


    const imgScroll = (idx,e) => {
        let img = document.getElementById(idx);
        const imgId = img.getAttribute("id");
        img.setAttribute("style",`transform : translateY(${translateY}%)`)
        if(idx==imgId){
            const scrollDown = setInterval(()=>{
                setTranslateY((prevY) => {
                    const newY = prevY - 0.2;
                    return newY > -1000 ? newY : 0;
                });
              }, 800);
        }
    }
    const imgScrollUp = (idx,e) => {
        let img = document.getElementById(idx);
        console.log(img)
        setTranslateY(0);
         console.log(translateY)
        img.setAttribute("style",`transform : translateY(${translateY}px)`)
    }

    return(
        <>
        
            <div className={styles.circleWrap}>
            </div>
            <div className={styles.MainProjectWrap}>
                <InnerWrap>
                    <h2>Project</h2>

                {projectData.map((data, idx) => {
                    return(
                        <div className={styles.cardWrap} key={idx} id={`card${idx}`}
                        ref={cardRef}
                        onMouseOver={(e) => imgScroll(idx,e)} 
                        onMouseLeave={(e) => imgScrollUp(idx,e)}
                        >
                            <div className={styles.projectImgWrap}>
                                <img src={data.imgUrl} alt="프로젝트이미지" 
                                id = {idx}
                                className={styles.projectImg}
                                ref={imgRef}
                                />
                            </div>
                            <div className={styles.projectDescWrap}>
                                <div className={styles.projectDesc}>
                                    <p className={styles.projectTitle}>{data.title}</p>
                                    <p className={styles.projectContent}>{data.content}</p>
                                    <p>제작기간  {data.date}</p>
                                    <p>기여도  {data.contribution}</p>
                                    <p>배포   {data.deploy}</p>
                                </div>
                                <div className={styles.projectSkill}>
                                    <p>skill <br/>{data.skill}</p>
                                    <p>기술 <br/>{data.tech}</p>
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