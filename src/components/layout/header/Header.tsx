"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import scss from "./Header.module.scss";
import { useRouter } from "next/navigation";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

type NavItem = {
  id: number;
  link: string;
  item: string;
};

const navItems: NavItem[] = [
  { id: 1, link: "#about", item: "Обо мне" },
  { id: 2, link: "#projects", item: "Проекты" },
  { id: 3, link: "#contact", item: "Контакты" },
];

export default function Header() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useRouter();

  const menuRef = useRef<HTMLDivElement | null>(null);

  // --- 1. Scroll active section highlight ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      const about = document.querySelector("#about");
      const projects = document.querySelector("#projects");
      const contact = document.querySelector("#contact");

      if (!about || !projects || !contact) return;

      const aboutTop = about.getBoundingClientRect().top + window.scrollY;
      const projectTop = projects.getBoundingClientRect().top + window.scrollY;
      const contactTop = contact.getBoundingClientRect().top + window.scrollY;
      const currentY = scrollY + window.innerHeight / 2;

      if (currentY >= aboutTop && currentY < projectTop) setActiveId(1);
      else if (currentY >= projectTop && currentY < contactTop) setActiveId(2);
      else if (currentY >= contactTop) setActiveId(3);
      else setActiveId(null);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- 2. Click outside to close menu ---
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // cleanup
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);
  // --- 3. Close menu when resizing to desktop ---
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={`${scss.header} ${scrolled ? scss.active : ""}`}>
      <div className="container">
        <div className={scss.content}>
          <a className={scss.logoContainer} href="#welcome">
            <div className={scss.logo}></div>
            <span className={scss.back}></span>
            <span className={scss.front}></span>
            <span className={scss.a}>A</span>
          </a>

          {/* Desktop menu */}
          <div className={scss.left}>
            {navItems.map((el) => (
              <nav key={el.id}>
                <Link
                  href={el.link}
                  className={`${scss.navLink} ${
                    activeId === el.id ? scss.active : ""
                  }`}
                >
                  <span>{`0${el.id}.`}</span> {el.item}
                </Link>
              </nav>
            ))}
            <a
              href="/АРЗУБЕК Full-Stack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={scss.resume}
            >
              <span>Резюме</span>
            </a>
          </div>

          {/* Mobile menu */}
          <div
            ref={menuRef}
            className={`${scss.leftmobile} ${menuOpen ? scss.menuOpen : ""}`}
          >
            {navItems.map((el) => (
              <nav key={el.id}>
                <Link
                  href={el.link}
                  className={scss.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{`0${el.id}.`}</span> {el.item}
                </Link>
              </nav>
            ))}
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
            <p className={scss.email}>arzubekmain2909@gmail.com</p>
          </div>

          {/* Burger toggle */}
          <div
            className={`${scss.toggle} ${menuOpen ? scss.checked : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className={`${scss.bar} ${scss.barTop}`}></div>
            <div className={`${scss.bar} ${scss.barMiddle}`}></div>
            <div className={`${scss.bar} ${scss.barBottom}`}></div>
          </div>
        </div>
      </div>
    </header>
  );
}
