import React from 'react';
import "./CSS/footer.css";
import { GoMail } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";

export default function Footer() {
    return (
        <footer className="footer">
            <GoMail className="email" />
            <FaPhoneAlt className="phone" />
            <AiOutlineInstagram className="instagram" />
        </footer>
    )
}