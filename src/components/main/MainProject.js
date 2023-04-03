import React from "react";
import { ProjectCardRight, ProjectCardLeft } from "../../UI/ProjectCard";
import styles from "./MainProject.module.css";
import InnerWrap from "../../UI/InnerWrap";
import project1 from "../../assets/project1.gif";
import project2 from "../../assets/project2.gif";
import project3 from "../../assets/project3.gif";

const MainProject = () => {
    return(
        <>
            <div className={styles.circleWrap}>

            </div>
            <div className={styles.MainProjectWrap}>
                <InnerWrap>
                    <h2>Project</h2>
                    <ProjectCardRight 
                        name="Project1"
                        imgUrl={project1}/>
                    <ProjectCardLeft
                        name="Project2"
                        imgUrl={project2}/>
                    <ProjectCardRight 
                        name="Project3"
                        imgUrl={project3}/>
                </InnerWrap>
            </div>
        </>

    )
}

export default MainProject;