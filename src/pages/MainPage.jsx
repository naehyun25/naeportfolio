import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import styles from "./MainPage.module.css"
import MainIntro from "../components/main/MainIntro";
import MainInfo from "../components/main/MainInfo";
import MainProject from "../components/main/MainProject";
import MainSkill from "../components/main/MainSkill";
import { DonutTop } from "../UI/MainGeometry";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
    const main =useRef();
    useLayoutEffect(()=>{
        let donutScroll = gsap.context((self)=>{
            const donut = self.selector(".donut")
            const secOne = self.selector(".sectionOne")
            const secTwo = self.selector(".sectionTwo")
            const secThree = self.selector(".sectionThree")
            const donutWidth = donut[0].clientHeight/2;
            console.log(donutWidth)
            const tl1 = gsap.timeline({
                scrollTrigger:{
                    trigger:secOne,
                    start:"top top",
                    endTrigger : secTwo,
                    end:"bottom bottom",
                    scrub:true
                }
            });
            tl1.to(donut,{
                x:-secOne[0].clientWidth+donutWidth,
                y:secOne[0].clientHeight,
                z:0
           })
           const tl2 = gsap.timeline({
            scrollTrigger:{
                trigger:secTwo,
                start:"top top",
                endTrigger : secThree,
                end:"0",
                scrub:true
            }
        });
        tl2.to(donut,{
            x:secTwo[0].clientWidth-donutWidth/2,
            y:secTwo[0].clientHeight,
          
       });
       const tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:secThree,
            start:"top top",
            end:"bottom bottom",
            scrub:true
        }
    });
    tl3.to(donut,{
        x:-secThree[0].clientWidth+donutWidth,
        y:secThree[0].clientHeight,
      
   })

        },main);
        return()=>donutScroll.revert();
    },[])
    
    return(
        <div className={styles.mainWrapper} ref={main}>
            <div className={`${styles.donutTop} donut`}>                
                <DonutTop/>
            </div>
            <div>
            <div className="sectionOne"><MainIntro/></div>
            <div className="sectionTwo"><MainInfo/></div>
            <div className="sectionThree"><MainProject/></div>
            <div className="sectionFour"><MainSkill/></div>
            </div>
        </div>
    )
};
export default MainPage;