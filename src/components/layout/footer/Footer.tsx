import React from "react";
import scss from "./Footer.module.scss";
import {
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className={scss.socials}>
        <a
          href="https://wa.me/+996550835345"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://t.me/ArzubekDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://instagram.com/dzhuraev_000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/ArzubekDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/arzubek-d-a5b69b37b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <p className={scss.copyright}>
        <span>
          Made with <FaHeartPulse /> using NextJS
        </span>{" "}
        <br /> <span> {new Date().getFullYear()} Arzubek</span>
      </p>
    </footer>
  );
};

export default Footer;
