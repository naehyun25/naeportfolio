import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MainProjectTest from "../components/main/MainProjectTest";
import ProjectPage from "../pages/ProjectPage"
import MainIntro from "../components/main/MainIntro";

const RoutesIndex = () => {
    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/test" element={<MainProjectTest/>}/>
            <Route path="/projects" element={<ProjectPage/>}/>
            <Route path="/Home" element={<MainIntro/>}></Route>
        </Routes>
    )
};

export default RoutesIndex;