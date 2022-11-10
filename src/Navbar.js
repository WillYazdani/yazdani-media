import "./CSS/navbar.css";
import { Link } from "react-router-dom";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar(props) {
    
    //toggle navbar-nav to active when menu-icon is clicked
    const toggleNav = () => {
        const nav = document.querySelector(".navbar-nav");
        nav.classList.toggle("active");
    };


    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="nav-logo">
                    <img src={require("./assets/images/ym-flat.png")} alt="logo" />
                </Link>
                <div className="navbar-nav">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link to="/">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pricing">Services</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-toggle">
                    <AiOutlineMenu className="menu-icon"
                    onClick={toggleNav} />
                </div>
            </div>
        </nav>
    )
}