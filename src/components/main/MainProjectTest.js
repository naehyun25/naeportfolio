import React,{useState, useEffect} from "react";
import InnerWrap from "../../UI/InnerWrap";
import styles from "./MainProjectTest.module.css";
import ProjectCard from "../../UI/Projects";
import projectData from "../../models/projectData";


const MainProjectTest =()=>{
    // const [currentTab, setCurrentTab] = useState(0);
    // const tabClick=(e)=>{
    //     console.log("click" , e.target.id);
    //     setCurrentTab(e.target.id);
    // }
    // return(
    //     <div className={styles.mainProjectWrap}>
    //         <InnerWrap>
    //             <h2>Project</h2>
    //             <p className={styles.subTitle}>작업한 프로젝트</p>
    //             <div className={styles.tabbtnwrap}>
    //                 <ul>
    //                     <li className={styles.tabbtn} id="01" onClick={(e)=>{tabClick(e)}} >01</li>
    //                     <li className={styles.tabbtn} id="02" onClick={(e)=>{tabClick(e)}} >02</li>
    //                 </ul>
    //             </div>
    //             <div className={styles.projecCardWrap}>
    //                 <div className={`${styles.individualCard} ${styles.visual}`}
    //                 >
    //                     <ProjectCard
    //                     number="01"
    //                     title="test01"/>
    //                 </div>
    //                 <div className={`${styles.individualCard}`} >
    //                     <ProjectCard 
    //                     number="01"
    //                     title="test02"/>
    //                 </div>
    //             </div>
    //         </InnerWrap>
    //     </div>
    // )

    return(
        <>
            <div id="Project" className={styles.MainProjectWrap}>
                <InnerWrap>
                    <h2>Project</h2>
                    <p className={styles.subTitle}>작업한 프로젝트</p>
                    <div className={styles.projectCardsWrap} >
                    
                        {
                        projectData.map((project, idx)=>{
                            return<div key={idx}>
                                <ProjectCard
                                title={project.title}
                                date={project.date}
                                page={project.page}
                                deploy={project.deploy}
                                btnName={project.btnName}
                                aGithub={project.aGithub}
                                aVisit={project.aVisit}
                                imgUrl={project.imgUrl}
                                number={project.number}
                                content={project.content}
                                contribution={project.contribution}
                                tech={project.tech}
                                /> 
                            </div>

                        

                        })}


                    </div>
                </InnerWrap>
            </div>
        </>
    )

};

export default MainProjectTest;