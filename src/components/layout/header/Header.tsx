"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import scss from "./Header.module.scss";

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

  return (
    <header className={`${scss.header} ${scrolled ? scss.active : ""}`}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logoContainer}>
            <div className={scss.logo}></div>
            <span className={scss.back}></span>
            <span className={scss.front}></span>
            <h2>A</h2>
          </div>

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
            <button className={scss.resume}>
              <span>Резюме</span>
            </button>
          </div>
          <div
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
          </div>

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
