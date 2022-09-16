import React from "react";
import Navbar from "./Navbar"
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import { Route, Routes } from "react-router-dom";
import "./CSS/App.css";

export default function App() {
    return(
        <>
            <div className="app-container">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Portfolio />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/pricing" element={<Pricing />} />
                    </Routes>
                </div>
            </div>
        </>
        
    )
};
