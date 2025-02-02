import React from "react";
import styles from "./MainProject.module.css";
import InnerWrap from "../../UI/InnerWrap";
import ProjectCard from "../../UI/Projects";
import projectData from "../../models/projectData";

const MainProject = () => {
    return(
        <>
            <div id="Project" className={styles.MainProjectWrap}>
                <InnerWrap>
                    <h2>Project</h2>
                    <p className={styles.subTitle}>Projects I've Worked On</p>
                    <div className={styles.projectCardsWrap} >
                    {
                        projectData.map((project, idx)=>{
                            return<ProjectCard
                                key={idx}
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
                        })}
                    </div>
                </InnerWrap>
            </div>
        </>

    )
}

export {MainProject};