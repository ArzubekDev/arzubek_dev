import React from 'react';
import scss from "./Footer.module.scss";
import { FaTelegramPlane, FaInstagram, FaGithub, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className={scss.footer}>
            <div className={scss.socials}>
                <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                </a>
                <a href="https://t.me/your-username" target="_blank" rel="noopener noreferrer">
                    <FaTelegramPlane />
                </a>
                <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://facebook.com/your-username" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
            </div>
            <p className={scss.copyright}>
                 <span>Made with <FaHeartPulse /> using NextJS</span> <br /> <span> {new Date().getFullYear()} Arzubek</span>
            </p>
        </footer>
    );
};

export default Footer;