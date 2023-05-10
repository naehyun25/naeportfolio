import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MainProjectTest from "../components/main/MainProjectTest";
import ProjectPage from "../pages/ProjectPage"
import MainInfo from "../components/main/MainInfo";
import MainSkill from "../components/main/MainSkill";
import { MainProject } from "../components/main/MainProject";
import Footer from "../components/footer/Footer";

const RoutesIndex = () => {
    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/aboutme" element={<MainInfo/>}/>
            <Route path="/skills" element={<MainSkill/>}/>
            <Route path="/projects" element={<MainProject/>}/>
            <Route path="/contact" element={<Footer/>}/>
            <Route path="/test" element={<MainProjectTest/>}/>
            <Route path="/projects" element={<ProjectPage/>}/>
        </Routes>
    )
};

export default RoutesIndex;