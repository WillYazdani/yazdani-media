import React from 'react';
import "../CSS/portfolio.css";
import One from "../assets/images/1.jpg";
import Two from "../assets/images/2.jpg";
import Three from "../assets/images/3.jpg";
import Four from "../assets/images/4.jpg";
import Five from "../assets/images/5.jpg";
import Six from "../assets/images/6.jpg";
import Seven from "../assets/images/7.jpg";
import Eight from "../assets/images/8.jpg";
import Nine from "../assets/images/9.jpg";

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <img src={One} alt="one" />
            <img src={Two} alt="two" />
            <img src={Three} alt="three" />
            <img src={Four} alt="four" />
            <img src={Five} alt="five" />
            <img src={Six} alt="six" />
            <img src={Seven} alt="seven" />
            <img src={Eight} alt="eight" />
            <img src={Nine} alt="nine" />
        </div>
    )
}