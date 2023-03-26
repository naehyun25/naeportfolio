import React from "react";
import { Routes, Route } from "react-router-dom";
import {ButtonA} from "./Buttons"
import MainIntro from "../components/main/MainIntro"
import Footer from "../components/footer/Footer"

const RoutesIndex = () => {
    return(
        <Routes>
            <Route path="/"></Route>
            <Route path="/test" element={<Footer/>}>
            </Route>
        </Routes>
    )
};

export default RoutesIndex;