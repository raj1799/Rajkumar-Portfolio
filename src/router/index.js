import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/index"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Router = () => {
    React.useEffect(() => {
        AOS.init();
    });
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )

}
export default Router;