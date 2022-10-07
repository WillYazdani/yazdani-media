import React from 'react';
import "./CSS/footer.css";
import { AiOutlineMail } from "react-icons/ai";
// import { AiOutlinePhone} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import {AiOutlineLinkedin} from "react-icons/ai";

export default function Footer() {
    return (
        <footer className="footer">
            {/*link to my email*/}
            <a href="mailto: will@yazdanimedia.com" className="footer-link">
                <AiOutlineMail className="email" />
            </a>
            {/* <AiOutlinePhone className="phone" /> */}
            {/*link to my instagram*/}
            <a href="https://www.instagram.com/yazdaniphoto/" target="_blank" rel="noreferrer">
                <AiOutlineInstagram className="instagram" />
            </a>
            {/*link to my linkedin*/}
            <a href="https://www.linkedin.com/in/will-yazdani/" target="_blank" rel="noreferrer">
                <AiOutlineLinkedin className="linkedin" />
            </a>
        </footer>
    )
}