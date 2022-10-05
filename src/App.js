import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
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
                        <Route path="/page1" element={<Page1 />} />
                        <Route path="/page2" element={<Page2 />} />
                        <Route path="/page3" element={<Page3 />} />
                        <Route path="/page4" element={<Page4 />} />
                        <Route path="/page5" element={<Page5 />} />
                        <Route path="/page6" element={<Page6 />} />
                        <Route path="/page7" element={<Page7 />} />
                        <Route path="/page8" element={<Page8 />} />
                        <Route path="/page9" element={<Page9 />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </>
        
    )
};
