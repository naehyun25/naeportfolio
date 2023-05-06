import React from "react";
import { Routes, Route } from "react-router-dom";
import MainProjectTest from "../components/main/MainProjectTest";

const RoutesIndex = () => {
    return(
        <Routes>
            <Route path="/"></Route>
            <Route path="/test" element={<MainProjectTest/>}>
            </Route>
        </Routes>
    )
};

export default RoutesIndex;