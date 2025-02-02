import React,{useRef,useState} from "react";
import styles from "./Projects.module.css"
import { ButtonWhiteSmall } from "./Buttons";
import github from "../assets/github-icon.png";
import githubWhite from "../assets/github-white-icon.png";
import deployIcon from "../assets/deploy-icon.png";
import deployWhite from "../assets/deploy-icon-white.png";
import circlePink from "../assets/circle-pink.png";

const ProjectCard = ({ title,content, imgUrl, number, skills, date, contribution, page, tech, deploy, aGithub,aVisit,btnName,idx}) => {

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
    
    return (
      <div id="Project" key={idx} className={styles.projectCard} onMouseOver={ImgScroll} onMouseLeave={ImgScrollOff}>
        <div className={styles.projectImgWrap}>
          <div className={styles.imgCover} ref={imgCover} style={{opacity:visual, transition:"all 0.5s"}}></div>
          <div className={styles.descWrap}>
            <p><span className={styles.descTitle}>Date  </span> {date} </p>
            <p><span className={styles.descTitle}>Contribution  </span> {contribution}</p>
            <p><span className={styles.descTitle}>Page</span><br />
              {page}
            </p>
            <p><span className={styles.descTitle}>Tech</span><br />
              {tech}
            </p>
            <p><span className={styles.descTitle}>Deploy</span> {deploy}</p>
            <div className={styles.btnWrap}>
              <ButtonWhiteSmall name="Github" font="fontEnglish" src={github} srcWhite={githubWhite} link={aGithub}/>
              <ButtonWhiteSmall name={btnName} font="fontEnglish" src={deployIcon} srcWhite={deployWhite} link={aVisit} />
            </div>
          </div>
          <div className={styles.projectImgCover}>
          <img src={[imgUrl]}
          alt="프로젝트이미지" className={styles.projectImg}
          ref={imgRef}  style={{ transform: `translateY(-${translateY}px)`}}/>
          </div>
        </div>
        <div className={styles.projectDescWrap}>
          <p className={styles.projectNumber}>
            {number}
            <img src={circlePink} alt="" className={styles.circlePink} />
          </p>
          <div className={`${styles.projectTitle} 
          
          `}>{title}</div>
          <p className={styles.projectContent}>{content}</p>
          <p className={styles.projectSkills}>{skills}</p>
        </div>
      </div>
    );
  };

export default ProjectCard;