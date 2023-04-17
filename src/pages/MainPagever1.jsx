import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import styles from "./MainPage.module.css"
import MainIntro from "../components/main/MainIntro";
import MainInfo from "../components/main/MainInfo";
import MainProject from "../components/main/MainProject";
import MainSkill from "../components/main/MainSkill";
import { DonutTop } from "../UI/MainGeometry";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const MainPage = () => {
    const  MainWrap = useRef(null)  
    useLayoutEffect(()=>{
        let wholScroll = gsap.context((self)=>{
            const donut =self.selector('.donut');
            gsap.to(donut,5,{
                x:-200,
                y:1400,
                scrollTrigger:{
                    trigger:donut,
                    start:0,
                    end:'bottom bottm',
                    scrub:true,
                }
            })
        },MainWrap);
        return()=> wholScroll.revert();
    },[])  

    
    return(
        <div className={styles.mainWrapper} ref={MainWrap}>
            <div className={`${styles.donutTop} donut`}>                
                <DonutTop/>
            </div>
            <div>
            <MainIntro/>
            <MainInfo/>
            <MainProject/>
            <MainSkill/>
            </div>
        </div>
    )
};
export default MainPage;