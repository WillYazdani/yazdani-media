import React from 'react';
import "./CSS/footer.css";
import { AiOutlineMail } from "react-icons/ai";
// import { AiOutlinePhone} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";

export default function Footer() {
    return (
        <footer className="footer">
            <AiOutlineMail className="email" />
            {/* <AiOutlinePhone className="phone" /> */}
            <AiOutlineInstagram className="instagram" href="https://www.instagram.com/yazdaniphoto" />
        </footer>
    )
}