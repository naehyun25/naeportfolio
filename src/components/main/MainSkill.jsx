import React from "react";
import styles from "./MainSkill.module.css";
import InnerWrap from "../../UI/InnerWrap";
import SkillBar from 'react-skillbars';
import  "./MainSkillbar.css";
import htmlIcon from "../../assets/html-icon.png";
import cssIcon from "../../assets/css-icon.png";
import jsIcon from "../../assets/js-icon.png";
import reactIcon from "../../assets/react-icon.png";
import sassIcon from "../../assets/sass-icon.png";
import nodeIcon from "../../assets/nodeJs-icon.png";
import vscodeIcon from "../../assets/vscode-icon.png";
import googleIcon from "../../assets/googledocs-icon.png";
import figmaIcon from "../../assets/figma-icon.png";
import viewIcon from "../../assets/view-icon.png";
import flutterIcon from "../../assets/flutter-icon.png";

const MainSkill = () => {
    const skills = [
        { type: 'HTML', level: 90 },
        { type: 'CSS', level: 85 },
        { type: 'JavaScript', level: 90 },
        { type: 'jQuery', level: 70 },
        { type: 'React', level: 80 },
        { type: 'Flutter', level: 90 },
      ];
      const colors = {
        bar: '#fffaaa',
        title: {
            background: '#27272e'
          },
        };
      
    return(
        <div id="Skills" className={styles.mainSkillWrap}>
            <InnerWrap>
                <h2 className={styles.mainSkillTitle}>My Skills</h2>
                <div className={styles.skillbarWrap}>

                <SkillBar skills={skills} colors={colors} height={20}  animationDelay={300}/>
                </div>
                <div className={styles.skillIcons}>
                    <div className={styles.skillIcon}><img src={htmlIcon} alt=""/></div>
                    <div className={styles.skillIcon}><img src={cssIcon} alt=""/></div>
                    <div className={styles.skillIcon}><img src={jsIcon} alt=""/></div>
                    <div className={styles.skillIcon}><img src={reactIcon} alt=""/></div>
                    <div className={styles.skillIcon}><img src={viewIcon} alt=""/></div>
                    <div className={styles.skillIcon}><img src={sassIcon} alt=""/></div>
                    <div className={styles.skillIcon}><img src={nodeIcon} alt=""/></div>
                    <div className={styles.skillIcon}><img src={figmaIcon} alt=""/></div>
                    <div className={styles.skillIcon}><img src={vscodeIcon} alt=""/></div>
                    <div className={styles.skillIcon}><img src={googleIcon} alt=""/></div>
                    <div className={styles.skillIcon}><img src={flutterIcon} alt=""/></div>
                </div>


            </InnerWrap>
        
        </div>
    )
};

export default MainSkill;